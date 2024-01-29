"use client";

import {
  Anchor,
  Box,
  Button,
  Card,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { RedditPost } from "../../ts/reddit";
import CardVote from "./card-vote";
import { REDDIT_URL } from "../../utils/constants";
import MediaPreview from "./media-preview";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { useMemo } from "react";
import reletiveTime from "dayjs/plugin/relativeTime";
import utcPlugin from "dayjs/plugin/utc";
import { htmlDecode } from "../../utils/html-decode";
import { IconMessageCircle } from "@tabler/icons-react";
import classes from "./post-card.module.css";
import { useLocale } from "../locale/locale.provider";
import { useTranslation } from "@/app/i18n/client";

interface Props {
  post: RedditPost;
}

dayjs.extend(reletiveTime);
dayjs.extend(utcPlugin);

export default function PostCard({ post }: Props) {
  const { locale } = useLocale();

  const { t } = useTranslation(locale, ["feed"]);
  const postLink = new URL(post.data.permalink, REDDIT_URL).toString();
  const subredditLink = new URL(
    post.data.subreddit_name_prefixed,
    REDDIT_URL
  ).toString();
  const authorLink = new URL(
    "/user/" + post.data.author,
    REDDIT_URL
  ).toString();

  const dateFromNow = useMemo(() => {
    const date = new Date(0);
    date.setUTCSeconds(post.data.created_utc);
    return dayjs(date).locale(locale).fromNow();
  }, [post.data.created_utc, locale]);

  const decodedHtml = useMemo(
    () => htmlDecode(post.data.selftext_html),
    [post.data.selftext_html]
  );

  return (
    <Card className="flex">
      <Grid>
        <GridCol visibleFrom="sm" span={{ base: 0, sm: 0.6 }}>
          <CardVote votes={post.data.score} />
        </GridCol>
        <GridCol span={{ base: 12, sm: 11.4 }}>
          <Stack>
            <Group fz={"xs"} gap={3}>
              <Anchor
                target="_blank"
                href={subredditLink}
                fw={"bold"}
                size="xs"
              >
                {post.data.subreddit_name_prefixed}{" "}
              </Anchor>
              <Text size="6px">•</Text>
              <Text size="xs" c={"dimmed"}>
                {t("posted")}
                <Anchor target="_blank" href={authorLink} c={"inherit"}>
                  {" "}
                  {post.data.author}
                </Anchor>
              </Text>
              <Text size="xs" c={"dimmed"}>
                {dateFromNow}
              </Text>
            </Group>
            <a href={postLink} target="_blank">
              <Title fw={600} order={3}>
                {post.data.title}
              </Title>
            </a>
            {!!post.data.url_overridden_by_dest && (
              <a href={postLink} target="_blank">
                <MediaPreview
                  isVideo={post.data.is_video}
                  link={post.data.url_overridden_by_dest}
                  alt={post.data.title}
                  height={425}
                />
              </a>
            )}

            {!!decodedHtml && (
              <Text
                lineClamp={10}
                dangerouslySetInnerHTML={{ __html: decodedHtml }}
              />
            )}
            <Group>
              <Box hiddenFrom="sm">
                <CardVote votes={post.data.score} />
              </Box>
              <a href={postLink} target="_blank">
                <Button
                  className={classes.commentsButton}
                  size="xs"
                  variant="subtle"
                  c="gray"
                  color="gray"
                  leftSection={<IconMessageCircle size={16} />}
                >
                  {post.data.num_comments} {t("comments")}
                </Button>
              </a>
            </Group>
          </Stack>
        </GridCol>
      </Grid>
    </Card>
  );
}
