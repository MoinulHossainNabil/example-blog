import React, { useContext } from "react";
import Post from "./Post";
import { Context } from "../ContextApi";
const Home = () => {
  const context = useContext(Context);
  const posts = context.posts.map((post) => {
      return <Post post={post} endpoint="/post/" key={post.id} />
  })
  
  return (
      context.loading?<div>Loading</div>
      :posts
  )
};

export default Home;
