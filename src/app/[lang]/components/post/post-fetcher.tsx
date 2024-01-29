"use client";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import PostList from "./post-list";

interface Props {
  kind: string;
}

export default function PostFetcher({ kind }: Props) {
  const { data, isLoading, isError } = useFetchPosts(kind);
  return (
    <PostList data={data?.data.children} loading={isLoading} error={isError} />
  );
}
