import React from 'react';
import './Comment.css';
import { format, parseISO } from 'date-fns';
import DOMPurify from 'dompurify';

export default function Comment({ comment }) {
  const formattedDate = format(parseISO(comment.posted), 'do MMM yyyy');

  return (
    <div className="comment">
      <span className="comment-details">
        <span>
          <span className="username">{comment.username}</span> commented on{' '}
          {formattedDate}
        </span>
      </span>
      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(comment.content),
        }}
      ></p>
    </div>
  );
}
