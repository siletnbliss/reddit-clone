export interface RedditImage {
  source: {
    url: string;
    width: number;
    height: number;
  };
}
export interface RedditPost {
  kind: string;
  data: {
    subreddit_name_prefixed: string;
    author_fullname: string;
    author: string;
    title: string;
    selftext: string;
    selftext_html: string;
    num_comments: number;
    ups: number;
    downs: number;
    score: number;
    thumbnail_height?: number;
    thumbnail_width?: number;
    permalink: string;
    created: number;
    created_utc: number;
    thumbnail?: "self" | string;
    is_video: boolean;
    preview?: {
      images?: RedditImage[];
    };
    url_overridden_by_dest?: string;
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
