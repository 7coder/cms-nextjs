import React from "react";

const PostListItem: React.FC = () => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <a href="#" className="card-link">
          Read more...
        </a>
      </div>
    </div>
  );
};

export default PostListItem;
