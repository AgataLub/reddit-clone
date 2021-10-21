import React from "react";

function ReplyBox(replies) {
  console.log("ReplyBox");
  console.log(replies.replies.data.children);
  return (
    <div className="ReplyBox">
      {replies.replies.data.children.map((reply) => {
        console.log(reply.data.id);
        return (
          <p key={reply.data.id}>
            <i>{reply.data.author}</i> wrote {reply.data.body}
          </p>
        );
      })}
    </div>
  );
}

export default ReplyBox;
