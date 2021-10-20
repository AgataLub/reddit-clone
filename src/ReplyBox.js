import React from "react";

function ReplyBox(repliesPayload) {
  console.log("ReplyBox");
  console.log(repliesPayload.replies.data.children);
  const replies = repliesPayload.replies.data.children;
  return (
    <div className="ReplyBox">
      {replies.map((reply) => {
        return (
          <p>
            <i>{reply.data.author}</i> wrote {reply.data.body}
          </p>
        );
      })}
    </div>
  );
}

export default ReplyBox;
