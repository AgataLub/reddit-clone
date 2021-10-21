import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ReplyBox from "./ReplyBox";
import fetchData from "./utils/fetchData";
import { redditURL } from "./utils/constants";

function Post() {
  let location = useLocation();
  let permalink = location.state.title.permalink;

  //States
  const [thread, setThread] = useState([]);
  const [singleReply, setSingleReply] = useState(null);

  //Fetch data
  fetchData(redditURL, permalink).then((myJson) => {
    setThread(myJson);
  });

  //Toggle replies
  const toggleReplyBox = (id) => {
    if (singleReply === id) {
      setSingleReply(null);
    } else {
      setSingleReply(id);
    }
  };

  // const { title, author, subreddit } = thread[0].data.children[0].data;

  //Return App
  return (
    <div className="MainFeed">
      {thread.length !== 0 && (
        <div className="SinglePost">
          <h1>{title}</h1>
          <p>
            {author} in {subreddit}
          </p>
          <div>
            {thread[1].data.children.map((comment) => {
              const { id, author, body, replies, name } = comment.data;
              return (
                <div key={id}>
                  <hr />
                  <p>
                    <b>{author}</b> said {body}
                  </p>
                  {replies && (
                    <button
                      onClick={() => {
                        toggleReplyBox(name);
                      }}
                    >
                      See replies
                    </button>
                  )}
                  {singleReply === name && <ReplyBox replies={replies} />}
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
