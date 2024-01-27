import { useTranslation } from "../i18n";
import { LocalePageProps } from "./ts/locale";

export default async function Home({
  params: { lang },
}: {
  params: LocalePageProps;
}) {
  const { t } = await useTranslation(lang);
  return <main>Hey, {lang}</main>;
}
