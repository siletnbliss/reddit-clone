"use client";
import { useState } from "react";
import { UnstyledButton, Menu, Image, Group } from "@mantine/core";
import { IconChevronDown, IconLanguage } from "@tabler/icons-react";
import classes from "./locale-switch.module.css";
import { useLocale } from "./locale.provider";
import { useTranslation } from "@/app/i18n/client";

interface SelectProps {
  label: string;
  value: string;
}

const data: SelectProps[] = [
  { label: "locale.en", value: "en" },
  { label: "locale.es", value: "es" },
];

export default function LocaleSwitch() {
  const { locale, setLocale } = useLocale();
  const { t } = useTranslation(locale, "common");
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(
    data.find((d) => d.value === locale) ?? data[0]
  );

  const handleChange = (option: SelectProps) => {
    setSelected(option);
    setLocale(option.value);
  };

  const items = data.map((item) => (
    <Menu.Item onClick={() => handleChange(item)} key={item.label}>
      {t(item.label, { defaultValue: item.value })}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={`${classes.control} border-bg`}
          data-expanded={opened || undefined}
        >
          <Group gap="xs">
            <IconLanguage size={22} />
            <span className={`${classes.label} uppercase`}>
              {selected.value}
            </span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
