import { useMemo } from "react";
import { isImage } from "../../utils/is-image";
import { Box, Group, Image, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import { IconExternalLink, IconPlayerPlayFilled } from "@tabler/icons-react";

interface Props {
  link: string;
  alt?: string;
  height?: number | string;
  isVideo?: boolean;
}
export default function MediaPreview({
  link,
  height,
  isVideo,
  alt = "img",
}: Props) {
  const { colorScheme } = useMantineColorScheme();
  const linkType = useMemo<"image" | "link">(
    () => (isImage(link) ? "image" : "link"),
    [link]
  );
  if (linkType === "image") {
    return (
      <Box h={height}>
        <Image fit="cover" src={link} radius={"md"} h={height} alt={alt} />
      </Box>
    );
  }

  if (isVideo) {
    return (
      <Box
        className="rounded-md flex justify-center items-center"
        h={"100%"}
        bg={colorScheme === "dark" ? "dark.5" : "gray.3"}
      >
        <IconPlayerPlayFilled size={48} />
      </Box>
    );
  }

  return (
    <Link href={link} target="_blank">
      <Group>
        <IconExternalLink />
        {link}
      </Group>
    </Link>
  );
}
