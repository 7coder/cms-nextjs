export type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

export type PostCreation = Omit<Post, "id">;
export type PostCreationForm = Omit<PostCreation, "createdAt">;
