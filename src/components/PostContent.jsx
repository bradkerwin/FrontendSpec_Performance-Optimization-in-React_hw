import React, { memo } from "react";

const PostContent = memo(function PostContent({ content }) {
  return (
    <div>
      {content ? (
        <>
          
          <h2>{content.title}</h2>
          <p>{content.body}</p>
        </>
      ) : (
        <>
          <h2>Select a post</h2>
        </>
      )}
    </div>
  );
});

export default PostContent;
