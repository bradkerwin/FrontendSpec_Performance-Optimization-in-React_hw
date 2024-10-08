import React, { useMemo } from "react";

const PostList = ({ posts, selectedUserId, handlePostSelect }) => {

  const filteredPosts = useMemo(() =>  posts.filter((post) => post.userId === selectedUserId), [selectedUserId, posts],);

  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id} onClick={() => handlePostSelect(post)}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
