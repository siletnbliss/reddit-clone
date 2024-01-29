"use client";
import { Card, Chip, ChipGroup, Group, ScrollArea } from "@mantine/core";
import { PostKind, useFetchPosts } from "../../hooks/useFetchPosts";
import {
  Icon,
  IconChartBar,
  IconFlame,
  IconRocket,
  IconSun,
  IconTrendingUp,
} from "@tabler/icons-react";
import { useLocale } from "../locale/locale.provider";
import { useTranslation } from "@/app/i18n/client";
import classes from "./filters.module.css";

const filters: {
  label: string;
  value: PostKind;
  Icon: Icon;
}[] = [
  { label: "filters.best", value: "best", Icon: IconRocket },
  { label: "filters.hot", value: "hot", Icon: IconFlame },
  { label: "filters.new", value: "new", Icon: IconSun },
  { label: "filters.top", value: "top", Icon: IconChartBar },
  { label: "filters.rising", value: "rising", Icon: IconTrendingUp },
];

export default function Filters() {
  const { locale } = useLocale();

  const { t } = useTranslation(locale, "feed");

  const { kind, setKind } = useFetchPosts();

  const handleChange = (k: string) => {
    setKind(k as PostKind);
  };

  return (
    <>
      <Card mb="md">
        <ScrollArea type="auto" w={"100%"} scrollbars="x">
          <ChipGroup multiple={false} value={kind} onChange={handleChange}>
            <Group className="mb-6 lg:mb-0" wrap="nowrap">
              {filters.map((filter) => (
                <Chip
                  classNames={{
                    checkIcon: classes["chip-icon"],
                    iconWrapper: classes["chip-icon"],
                    label: classes["chip-body"],
                  }}
                  width={"max-content"}
                  size={"lg"}
                  key={filter.value}
                  value={filter.value}
                >
                  <Group gap={2}>
                    <filter.Icon />
                    {t(filter.label)}
                  </Group>
                </Chip>
              ))}
            </Group>
          </ChipGroup>
        </ScrollArea>
      </Card>
    </>
  );
}
