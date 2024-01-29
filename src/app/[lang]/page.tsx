import { Suspense } from "react";
import Filters from "./components/filters/filters";

import { LocalePageProps } from "./ts/locale";
import PostFetcher from "./components/post/post-fetcher";

export const dynamic = "force-dynamic";

export default function Home({
  params: { lang },
  searchParams: { k },
}: {
  params: LocalePageProps;
  searchParams: { k: string };
}) {
  return (
    <main className="w-[1000px] px-1 max-w-full">
      <Suspense>
        <Filters />
      </Suspense>
      <PostFetcher kind={k} />
    </main>
  );
}
