import { Post } from "@/src/types/post";
import React from "react";
import PostListItem from "./PostListItem";

const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      {posts.map((item) => (
        <PostListItem {...item} key={item.id} />
      ))}
    </>
  );
};

export default PostList;
