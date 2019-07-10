export interface IPostExcerpt {
  id: string;
  title: string;
  excerpt: string;
}

export interface IFullPost extends IPostExcerpt {
  content: string;
}
