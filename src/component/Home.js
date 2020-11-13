import React, { useContext, useState } from "react";
import Post from "./Post";
import Pagination from "./Pagination";
import { Context } from "../ContextApi";
import Loading from "./Loading";

const Home = () => {
  const context = useContext(Context);
  const posts = context.posts.map((post) => {
    return <Post post={post} endpoint="/post/" key={post.id} />;
  });
  const postPerPage = 4;
  const numberofPosts = posts.length;
  const [firstPostofCurrentPage, setFirstPost] = useState(parseInt(0));
  const [lastPostofCurrentPage, setLastPost] = useState(parseInt(postPerPage));

  const gotoNextPage = () => {
    setFirstPost(firstPostofCurrentPage + postPerPage);
    setLastPost(lastPostofCurrentPage + postPerPage);
  };

  const gotoPreviousPage = () => {
    setFirstPost(firstPostofCurrentPage - postPerPage);
    setLastPost(lastPostofCurrentPage - postPerPage);
  };
  if (context.loading) {
    return <Loading />;
  }
  return (
    <>
      <Pagination
        firstPostofCurrentPage={firstPostofCurrentPage}
        lastPostofCurrentPage={lastPostofCurrentPage}
        numberofPosts={numberofPosts}
        gotoPreviousPage={gotoPreviousPage}
        gotoNextPage={gotoNextPage}
      />
      {posts.slice(firstPostofCurrentPage, lastPostofCurrentPage)}
    </>
  );
};

export default Home;
