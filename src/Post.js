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
  // setThread(getData());
  getData().then((myJson) => {
    console.log(myJson);
    setThread(myJson);
  });

  const toggleReplyBox = (id) => {
    console.log(id);

    if (singleReply === id) {
      return setSingleReply(null);
    }
    setSingleReply(id);

    // setComments((wasComment) => !wasComment);
  };

  let title, author, subreddit, comments;
  if (thread.length > 0) {
    ({ title, author, subreddit } = thread[0].data.children[0].data);
    comments = thread[1].data.children;
  }

  //Return App
  return (
    <div>
      {thread.length !== 0 && (
        <div className="MainFeed">
          <h1>{title}</h1>
          <p>
            {author} in {subreddit}
          </p>
          <div>
            {console.log(thread[1].data.children)}
            {comments.map((comment) => {
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
                  {singleReply === comment.data.name && (
                    <ReplyBox replies={comment.data.replies} />
                  )}
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
