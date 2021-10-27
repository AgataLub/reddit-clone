import React from "react";

function ReplyBox(replies) {
  console.log(replies);
  return (
    <div className="ReplyBox">
      {replies.replies.data.children.map((reply) => {
        const { id, author, body } = reply.data;
        return (
          <p key={id}>
            <i>{author}</i> {body}
            text
          </p>
        );
      })}
    </div>
  );
}

export default ReplyBox;
