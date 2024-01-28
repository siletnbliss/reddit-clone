"use client";

import { Container, Group, Title } from "@mantine/core";
import classes from "./header.module.css";
import Logo from "../common/logo";
import ThemeSwitch from "../theme/theme-switch";

export default function Header() {
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={6} align="center">
          <Logo size={36} />
          <Title
            className={classes.logoText}
            visibleFrom="xs"
            fw={1000}
            size="h2"
          >
            reddit
          </Title>
        </Group>
        <Group>
          <ThemeSwitch />
        </Group>
      </Container>
    </header>
  );
}
