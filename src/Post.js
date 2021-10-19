import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CommentBox from "./CommentBox";

function Post() {
  let location = useLocation();
  let permalink = location.state.title.permalink;

  //States
  const [thread, setThread] = useState([]);
  const [comments, setComments] = useState(false);
  const [singleComment, setSingleComment] = useState(null);

  //Fetching data
  async function getData() {
    const response = await fetch(`https://www.reddit.com${permalink}.json`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });
    const myJson = await response.json();
    return myJson;
  }
  getData().then((myJson) => {
    console.log(myJson);
    setThread(myJson);
  });

  const toggleCommentBox = (id) => {
    console.log(id);

    if (singleComment === id) {
      setSingleComment(null);
    } else {
      setSingleComment(id);
    }

    // setComments((wasComment) => !wasComment);
  };

  //Return App
  return (
    <div>
      {thread.length !== 0 && (
        <div>
          <p>Title: {thread[0].data.children[0].data.title}</p>
          <p>Author: {thread[0].data.children[0].data.author}</p>
          <p>Reddit: {thread[0].data.children[0].data.subreddit}</p>
          <div>
            {console.log(thread[1].data.children)}
            {thread[1].data.children.map((comment) => {
              return (
                <div ID={comment.data.name}>
                  <b>{comment.data.author}</b> said {comment.data.body} ||{" "}
                  <button
                    onClick={() => {
                      toggleCommentBox(comment.data.name);
                    }}
                  >
                    ID: {comment.data.name}
                  </button>
                  {singleComment === comment.data.name && <CommentBox />}
                </div>
              );
            })}
          </div>
          <NavLink to="/">Home</NavLink>
        </div>
      )}
    </div>
  );
}

export default Post;
