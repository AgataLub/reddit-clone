import React, { useState } from "react";
import PostList from "./PostList";
import { constants, fetchData } from ".utils";

function App() {
  //States
  const [feed, setFeed] = useState([]);

  //Fetching data
  // async function getData() {
  //   const response = await fetch("https://www.reddit.com/.json", {
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       Accept: "application/json",
  //     },
  //   });
  //   const myJson = await response.json();
  //   return myJson;
  // }

  fetchData(constants.redditURL);

  fetchData().then((myJson) => {
    console.log(myJson.data.children);
    setFeed(myJson.data.children);
  });
  //Return App
  return <div>{feed.length !== 0 && <PostList posts={feed} />}</div>;
}

export default App;
