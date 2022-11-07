import React, { useEffect, useState } from "react";
import PostList from "components/PostList";
import http from "@/src/utils/http";
import { Post } from "@/src/types/post";

const Index: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await http.getRq("/api/v1/posts");
      setPosts(res.json);
    } catch (e) {
      window.alert(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="col pt-2">
        {isLoading ? <p>Fetch data...</p> : <PostList posts={posts} />}
      </div>
    </div>
  );
};

export default Index;
