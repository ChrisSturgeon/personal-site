import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PostSummary.css';
import { format, parseISO } from 'date-fns';

export default function PostSummary({ summary }) {
  const postUrl = `/blog/posts/${summary._id}`;
  const formattedDate = format(parseISO(summary.posted), 'do MMMMMM yyyy');

  return (
    <Link to={postUrl} className="post-summary">
      <h2>{summary.title}</h2>
      <span>{formattedDate}</span>
      <p>{summary.summary}</p>
    </Link>
  );
}
