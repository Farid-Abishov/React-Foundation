import Post from "./Post";
import classes from "./PostList.module.scss";
import { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
     const response= await fetch("http://localhost:4040/posts")
        const resData=await response.json();
        setPosts(resData.posts)
    }
    fetchPosts()
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:4040/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
     

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
