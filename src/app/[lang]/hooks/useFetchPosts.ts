import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { REDDIT_URL } from "../utils/constants";
import { useQuery } from "@tanstack/react-query";
import { RedditListing } from "../ts/reddit";

const KIND_PARAM = "k";
const VALID_KINDS: PostKind[] = ["best", "hot", "new", "rising"];
type PostKind = "best" | "hot" | "new" | "rising";

const fetchPosts = async (kind: PostKind) => {
  const res = await axios.get<RedditListing>(`${kind}.json`, {
    baseURL: REDDIT_URL,
    params: {
      limit: 5,
    },
  });
  return res.data;
};

export const useFetchPosts = () => {
  const params = useSearchParams();
  const urlParam: string = params.get(KIND_PARAM) ?? "";

  const [kind, setKind] = useState<PostKind>(
    VALID_KINDS.includes(urlParam as PostKind) ? (urlParam as PostKind) : "best"
  );

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
