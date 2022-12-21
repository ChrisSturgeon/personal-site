import React, { useState, useEffect } from 'react';
import PostSummary from '../PostSummary/PostSummary';
import './Summaries.css';

export default function Summaries(props) {
  const [posts, setPosts] = useState([]);

  // Fetches posts summary on mount
  useEffect(() => {
    const getPosts = async () => {
      const allPosts = await fetch(
        'https://blog-api-production-aaa7.up.railway.app/posts/all'
      );
      const data = await allPosts.json();
      setPosts(data.posts);
    };
    getPosts();
  }, []);

  // TO DELETE - console logs posts on state change
  useEffect(() => {}, [posts]);

  return (
    <div className="summaries-main">
      <div className="summaries-column">
        {posts
          ? posts.map((post) => {
              return <PostSummary key={post._id} summary={post} />;
            })
          : null}
      </div>
    </div>
  );
}
