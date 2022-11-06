import React from "react";

const PostCreate: React.FC = () => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-6 py-5">
        <h4 className="mb-4">Create Post</h4>
        <form>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Post title"
            aria-label="default input example"
          />
          <textarea
            className="form-control mb-4"
            placeholder="Post content"
            rows={3}
          ></textarea>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostCreate;
