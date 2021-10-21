import React, { useState } from "react";
import PostList from "./PostList";
import { redditURL } from "./utils/constants";
import fetchData from "./utils/fetchData";

function App() {
  //States
  const [feed, setFeed] = useState([]);

  fetchData(redditURL).then((myJson) => {
    setFeed(myJson.data.children);
  });
  //Return App
  return <div>{feed.length !== 0 && <PostList posts={feed} />}</div>;
}

export default App;
