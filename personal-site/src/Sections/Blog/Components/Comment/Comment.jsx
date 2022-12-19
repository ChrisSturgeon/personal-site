import React from 'react';
import './Comment.css';
import { format, parseISO } from 'date-fns';

export default function Comment({ comment }) {
  const formattedDate = format(parseISO(comment.posted), 'do MMM yyyy');
  return (
    <div className="comment">
      <span className="comment-details">
        <span>
          <span className="username">{comment.username}</span> posted on{' '}
          {formattedDate}
        </span>
      </span>
      <p dangerouslySetInnerHTML={{ __html: comment.content }}></p>
    </div>
  );
}
