import React, { useState, useEffect } from "react";
import PostList from "./PostList";
import { dataFetcher } from "./utils/networkHelper";
import { redditHomepageUrl } from "./utils/constants";

function App() {
  //States
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    dataFetcher(redditHomepageUrl).then((json) => setFeed(json.data.children));
    // async function getData() {
    //   const response = await fetch("https://www.reddit.com/.json", {
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //       Accept: "application/json",
    //     },
    //   });
    //   const myJson = await response.json();
    //   setFeed(myJson.data.children);
    // }
    // getData();
  }, [feed]);

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
  // getData().then((myJson) => {
  //   console.log(myJson.data.children);
  //   setFeed(myJson.data.children);
  // });
  //Return App
  return <div>{feed.length !== 0 && <PostList posts={feed} />}</div>;
}

export default App;
