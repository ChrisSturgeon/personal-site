import { format, parseISO } from 'date-fns';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';

export default function Post(props) {
  const { postId } = useParams();
  const postUrl = `http://localhost:3000/posts/${postId}`;
  const [post, setPost] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);

  // Fetches post details on mount
  useEffect(() => {
    const getPost = async () => {
      const post = await fetch(postUrl);
      const postData = await post.json();
      setPost(postData.post);
    };
    getPost();
  }, [postUrl]);

  // Parses JSON date string to object and then formats for rendering
  useEffect(() => {
    if (post) {
      const dateAsObject = parseISO(post.posted);
      const formattedDate = format(dateAsObject, 'do MMMMMM yyyy');
      setFormattedDate(formattedDate);
    }
  }, [post]);

  if (post) {
    return (
      <main className="post-main">
        <div className="post-wrapper">
          <p className="posted-date">{formattedDate}</p>
          <h1>{post.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
        </div>
      </main>
    );
  }
}
