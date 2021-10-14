import React, { useEffect, useState } from "react";

function App() {
  const [feed, setFeed] = useState([]);

  const getData = () => {
    fetch("https://www.reddit.com/.json", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        setFeed(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>{feed.data.children[0].data.title}</h1>
      <span>Text</span>
    </div>
  );
}

export default App;
