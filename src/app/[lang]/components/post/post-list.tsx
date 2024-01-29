import { RedditPost } from "../../ts/reddit";
import PostSkeleton from "./post-skeletont";
import Error from "../common/error";
import { Stack } from "@mantine/core";
import PostCard from "../card/post-card";

interface Props {
  error?: boolean;
  loading?: boolean;
  data?: RedditPost[];
}
export default function PostList({ data, error, loading }: Props) {
  if (loading) {
    return <PostSkeleton totalSkeletons={5} />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Stack>
      {data?.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </Stack>
  );
}
