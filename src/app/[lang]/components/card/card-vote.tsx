"use client";

import { ActionIcon, Box, Text } from "@mantine/core";
import { IconArrowDown, IconArrowUp } from "@tabler/icons-react";
import { useNumberShorten } from "../../hooks/use-number-shorten";
import { useMemo, useState } from "react";

interface Props {
  votes: number;
}

type Vote = "up" | "down";

export default function CardVote({ votes }: Props) {
  const [score, setScore] = useState(votes);
  const shortScore = useNumberShorten(score);
  const [vote, setVote] = useState<Vote | null>(null);
  const scoreColor = useMemo(
    () => (!vote ? "inherit" : vote == "up" ? "orange" : "blue"),
    [vote]
  );
  const handleVote = (type: Vote) => {
    setScore(votes);

    if (type === vote) {
      setVote(null);
    } else {
      const change = type === "up" ? 1 : -1;
      setScore((prev) => prev + change);
      setVote(type);
    }
  };

  const handleUp = () => {
    handleVote("up");
  };
  const handleDown = () => {
    handleVote("down");
  };

  return (
    <Box className="gap-2 flex flex-row md:flex-col items-center">
      <ActionIcon
        onClick={handleUp}
        variant={vote === "up" ? "filled" : "subtle"}
        component="div"
      >
        <IconArrowUp />
      </ActionIcon>
      <Text c={scoreColor} fz={"xs"} fw={"bold"}>
        {shortScore}
      </Text>
      <ActionIcon
        onClick={handleDown}
        variant={vote === "down" ? "filled" : "subtle"}
        color={"blue"}
        component="div"
      >
        <IconArrowDown />
      </ActionIcon>
    </Box>
  );
}
