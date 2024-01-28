export interface RedditPost {
  kind: string;
  data: {
    subreddit_name_prefixed: string;
    author_fullname: string;
    title: string;
    selftext: string;
    num_comments: number;
    ups: number;
    downs: number;
    score: number;
    thumbnail_height?: number;
    thumbnail_width?: number;
    permalink: string;
    created_utc: number;
    thumbnail?: "self" | string;
    is_video: boolean;
  };
}

export interface RedditListing {
  kind: string;
  data: {
    before?: string;
    after?: string;
    dist: number;
    children: RedditPost[];
  };
}
