export type Content = {
  order: number;
  writing: string | null;
  tag: string | null;
  link: string | null;
  image: string | null;
  code: string | null;
  important: string | null;
};

export type Post = {
  title: string;
  description: string;
  category: string;
  contents: Content[];
};
