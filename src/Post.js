import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ReplyBox from "./ReplyBox";
import fetchData from "./utils/fetchData";
import { redditURL } from "./utils/variables";

function Post() {
  let location = useLocation();
  let permalink = location.state.title.permalink;
  let title, author, subreddit, comments;

  //States
  const [thread, setThread] = useState([]);
  const [singleReply, setSingleReply] = useState(null);

  //Fetch data
  fetchData(redditURL, permalink).then((myJson) => {
    setThread(myJson);
  });

  //Change the title of the page
  useEffect(() => {
    document.title = "Reddit Clone - Single Post";
  }, []);

  //Toggle replies
  const toggleReplyBox = (id) => {
    if (singleReply === id) {
      setSingleReply(null);
    } else {
      setSingleReply(id);
    }
  };

  if (thread.length > 0) {
    ({ title, author, subreddit } = thread[0].data.children[0].data);
    comments = thread[1].data.children;
  }

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
            {comments.map((comment) => {
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
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Post;
