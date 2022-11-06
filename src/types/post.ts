export type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
};

export type PostCreation = Omit<Post, "id">;
