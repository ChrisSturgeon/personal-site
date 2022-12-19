import React from 'react';
import { Link } from 'react-router-dom';
import './PostSummary.css';

export default function PostSummary({ summary }) {
  const postUrl = `/blog/posts/${summary._id}`;

  return (
    <Link to={postUrl} className="post-card">
      <h2>{summary.title}</h2>
      <p>{summary.summary}</p>
    </Link>
  );
}
