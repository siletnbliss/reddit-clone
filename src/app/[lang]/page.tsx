"use client";
import Filters from "./components/filters/filters";
import PostList from "./components/post/post-list";
import { useFetchPosts } from "./hooks/useFetchPosts";
import { LocalePageProps } from "./ts/locale";

export default function Home({
  params: { lang },
}: {
  params: LocalePageProps;
}) {
  const { data, isLoading, isError } = useFetchPosts();
  return (
    <main className="w-[1000px] px-1 max-w-full">
      <Filters />
      <PostList
        data={data?.data.children}
        loading={isLoading}
        error={isError}
      />
    </main>
  );
}
