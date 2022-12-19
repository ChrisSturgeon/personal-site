import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './Comments.css';

export default function Comments(props) {
  const [comments, setComments] = useState(null);
  const { postId } = useParams();
  const commentsURL = `http://localhost:3000/posts/${postId}/comments`;

  useEffect(() => {
    const getComments = async () => {
      const comments = await fetch(commentsURL);
      const commentsArr = await comments.json();
      setComments(commentsArr);
    };
    getComments();
  }, [commentsURL]);

  return (
    <div className="comments-wrapper">
      <h2>Comments</h2>

      <div className="comments-column">
        {comments
          ? comments.map((comment) => {
              return <Comment key={comment._id} comment={comment} />;
            })
          : null}
      </div>
    </div>
  );
}
