import { PostCreationForm } from "@/src/types/post";
import http from "@/src/utils/http";
import React, { useState } from "react";

const PostCreate: React.FC = () => {
  const initialFormData = { title: "", content: "" };
  const [formData, setFormData] = useState<PostCreationForm>({
    ...initialFormData,
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await http.postRq("/api/v1/posts", formData);
    if (res) {
      setFormData({ ...formData, ...initialFormData });
    }
  };

  return (
    <div className="row justify-content-md-center">
      <div className="col-6 py-5">
        <h4 className="mb-4">Create Post</h4>
        <form onSubmit={onSubmitHandler}>
          <input
            className="form-control mb-3"
            type="text"
            value={formData.title}
            name="title"
            placeholder="Post title"
            aria-label="default input example"
            onChange={(e) => onChangeHandler(e)}
          />
          <textarea
            name="content"
            value={formData.content}
            className="form-control mb-4"
            placeholder="Post content"
            onChange={(e) => onChangeHandler(e)}
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
