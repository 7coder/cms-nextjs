import React from "react";
import Link from "next/link";
import { Post } from "@/src/types/post";

const PostListItem: React.FC<Post> = ({ id, title, createdAt }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{createdAt}</p>
        <Link className="card-link" href={`/posts/${id}`}>
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
