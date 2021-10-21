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

  fetchData(redditURL, permalink).then((myJson) => {
    setThread(myJson);
  });

  const toggleReplyBox = (id) => {
    console.log(id);

    if (singleReply === id) {
      setSingleReply(null);
    } else {
      setSingleReply(id);
    }
  };

  //Return App
  return (
    <div className="MainFeed">
      {thread.length !== 0 && (
        <div className="SinglePost">
          <h1>{thread[0].data.children[0].data.title}</h1>
          <p>
            {thread[0].data.children[0].data.author} in {thread[0].data.children[0].data.subreddit}
          </p>
          <div>
            {console.log(thread[1].data.children)}
            {thread[1].data.children.map((comment) => {
              return (
                <div key={comment.data.id}>
                  <hr />
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
