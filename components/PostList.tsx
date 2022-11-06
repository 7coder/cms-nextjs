import React from "react";
import PostListItem from "./PostListItem";

const PostList: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "test 1",
      content: "test content 1",
      createdAt: "2022-11-04T14:20:44.358Z",
    },
    {
      id: 2,
      title: "test 2",
      content: "test content 2",
      createdAt: "2022-11-04T14:20:44.358Z",
    },
    {
      id: 3,
      title: "test 3",
      content: "test content 3",
      createdAt: "2022-11-04T14:20:44.358Z",
    },
  ];

  return (
    <>
      {posts.map((item) => (
        <PostListItem key={item.id} />
      ))}
    </>
  );
};

export default PostList;
