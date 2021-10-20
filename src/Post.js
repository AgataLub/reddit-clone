import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ReplyBox from "./ReplyBox";

function Post() {
  let location = useLocation();
  let permalink = location.state.title.permalink;

  //States
  const [thread, setThread] = useState([]);
  // const [comments, setComments] = useState(false);
  const [singleReply, setSingleReply] = useState(null);

  //useEffect?
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

  const toggleReplyBox = (id) => {
    console.log(id);

    if (singleReply === id) {
      setSingleReply(null);
    } else {
      setSingleReply(id);
    }

    // setComments((wasComment) => !wasComment);
  };

  //Return App
  return (
    <div>
      {thread.length !== 0 && (
        <div className="MainFeed">
          <h1>{thread[0].data.children[0].data.title}</h1>
          <p>
            {thread[0].data.children[0].data.author} in {thread[0].data.children[0].data.subreddit}
          </p>
          <div>
            {console.log(thread[1].data.children)}
            {thread[1].data.children.map((comment) => {
              console.log("comment");
              console.log(comment.data.replies);
              return (
                <div>
                  <p>
                    <b>{comment.data.author}</b> said {comment.data.body}
                  </p>
                  {comment.data.replies && (
                    <button
                      onClick={() => {
                        toggleReplyBox(comment.data.name);
                      }}
                    >
                      See replies
                    </button>
                  )}
                  {singleReply === comment.data.name && <ReplyBox replies={comment.data.replies} />}
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
