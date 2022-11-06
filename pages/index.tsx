import React from "react";
import PostList from "components/PostList";

const Index: React.FC = () => {
  return (
    <div className="row">
      <div className="col pt-2">
        <PostList />
      </div>
    </div>
  );
};

export default Index;
