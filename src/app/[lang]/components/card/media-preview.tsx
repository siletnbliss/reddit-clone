import { useMemo } from "react";
import { isImage } from "../../utils/is-image";
import {
  Anchor,
  Box,
  Group,
  Image,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
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
        <Image
          className="md:px-12"
          fit="cover"
          src={link}
          radius={"md"}
          h={height}
          alt={alt}
          mah={"100%"}
        />
      </Box>
    );
  }

  if (isVideo) {
    return (
      <Box
        className="rounded-md flex justify-center items-center md:mx-12"
        h={height}
        mah={"100%"}
        bg={colorScheme === "dark" ? "dark.5" : "gray.3"}
      >
        <IconPlayerPlayFilled size={48} />
      </Box>
    );
  }

  return (
    <Anchor component="div" c={"blue"}>
      <Group gap={2} fz={"sm"}>
        <Text w={200} truncate="end">
          {link}
        </Text>
        <IconExternalLink size={18} />
      </Group>
    </Anchor>
  );
}
