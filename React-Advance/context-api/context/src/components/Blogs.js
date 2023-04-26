import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import "../index.css";

const Blogs = () => {
  // consume data use context;

  const { posts, loading } = useContext(AppContext);
  console.log("Ayan");

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="title">{post.title}</p>
            <p>
              By{" "}
              <span>
                {post.author} <span>on</span>
                {post.category}
              </span>
            </p>
            <p>Postted on{post.date}</p>
            <p>{post.content}</p>
            <div>
              {post.tags.map((tag, index) => {
                return <span key={index}>{`#${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
