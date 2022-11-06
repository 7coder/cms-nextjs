import React, { useEffect, useState } from "react";
import http from "@/src/utils/http";
import { useRouter } from "next/router";
import { Post } from "@/src/types/post";

const PostPage: React.FC = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const [isLoading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<Post | null>(null);

  const fetchPost = async (id: string) => {
    setLoading(true);
    if (id) {
      const res = await http.getRq(`/api/v1/posts/${id}`);
      setPost(res);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          <div className="col">
            <h3>{post?.title}</h3>
            <p>{post?.createdAt}</p>
            <p>{post?.content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PostPage;
