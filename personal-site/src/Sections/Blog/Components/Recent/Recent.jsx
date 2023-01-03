import React, { useState, useEffect } from 'react';
import PostSummary from '../PostSummary/PostSummary';
import './Recent.css';

export default function Recent(props) {
  const [posts, setPosts] = useState([]);

  // Fetches posts summary on mount
  useEffect(() => {
    const fetchRecentPosts = async () => {
      const allPosts = await fetch(
        'https://blog-api-production-aaa7.up.railway.app/posts/recent'
      );
      const data = await allPosts.json();
      setPosts(data.posts);
    };
    fetchRecentPosts();
  }, []);


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
