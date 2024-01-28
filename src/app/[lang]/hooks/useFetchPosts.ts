import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { REDDIT_URL } from "../utils/constants";
import { useQuery } from "@tanstack/react-query";
import { RedditListing } from "../ts/reddit";

const KIND_PARAM = "k";
const VALID_KINDS: PostKind[] = ["best", "hot", "new", "rising"];
type PostKind = "best" | "hot" | "new" | "rising";

const fetchPosts = async (kind: string) => {
  const parsedKind: PostKind = VALID_KINDS.includes(kind as PostKind)
    ? (kind as PostKind)
    : "best";
  const res = await axios.get<RedditListing>(`${parsedKind}.json`, {
    baseURL: REDDIT_URL,
    params: {
      limit: 5,
    },
  });
  return res.data;
};

export const useFetchPosts = () => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const kind = params.get(KIND_PARAM) ?? "";

  const setKind = (kind: PostKind) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set(KIND_PARAM, kind);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  const query = useQuery({
    queryKey: [kind],
    queryFn: (ctx) => fetchPosts(ctx.queryKey[0]),
  });

  return {
    kind,
    setKind,
    ...query,
  };
};
