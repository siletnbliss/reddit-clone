import { RedditPost } from "../../ts/reddit";
import PostSkeleton from "./post-skeletont";
import Error from "../common/error";

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
  return <div>post-list</div>;
}
