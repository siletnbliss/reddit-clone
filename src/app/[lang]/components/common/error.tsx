"use client";
import { Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import errorImage from "@/assets/error-illustration.png";
import { useTranslation } from "@/app/i18n/client";
import { useLocale } from "../locale/locale.provider";

interface Props {
  title?: string;
  message?: string;
}
export default function Error({ title, message }: Props) {
  const { locale } = useLocale();
  const { t } = useTranslation(locale, "common");
  const parsedTitle = title ?? t("error.title");
  const parsedMessage = message ?? t("error.message");

  return (
    <Stack align="center" my={"auto"} mx={"auto"}>
      <Image width={500} src={errorImage} alt="error" />
      <div className="text-center">
        <Title className="mb-2">{parsedTitle}</Title>
        <Text>{parsedMessage}</Text>
      </div>
    </Stack>
  );
}
