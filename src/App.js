import React, { useState, useEffect } from "react";
import PostList from "./PostList";
import { redditURL } from "./utils/variables";
import fetchData from "./utils/fetchData";

function App() {
  //States
  const [feed, setFeed] = useState([]);

  fetchData(redditURL).then((myJson) => {
    setFeed(myJson.data.children);
  });

  //Change title of the page
  useEffect(() => {
    document.title = "Reddit Clone";
  }, []);
  //Return App
  return <div>{feed.length !== 0 && <PostList posts={feed} />}</div>;
}

export default App;
