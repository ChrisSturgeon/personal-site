import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import './Comments.css';
import { AnimatePresence } from 'framer-motion';

export default function Comments(props) {
  const [displayCommentForm, setDisplayCommentForm] = useState(false);
  const [comments, setComments] = useState(null);
  const [submitMessage, setSubmitMessage] = useState(false);
  const { postId } = useParams();
  const commentsURL = `https://blog-api-production-aaa7.up.railway.app/posts/${postId}/comments`;

  const toggleCommentForm = () => {
    setDisplayCommentForm(!displayCommentForm);
  };

  const confirmSubmit = () => {
    toggleCommentForm();
    setSubmitMessage(true);
  };

  // Fetches blog post comments on mount
  useEffect(() => {
    const getComments = async () => {
      const comments = await fetch(commentsURL);
      const commentsArr = await comments.json();
      if (commentsArr.length > 0) {
        setComments(commentsArr);
      }
    };
    getComments();
  }, []);

  return (
    <div className="comments-wrapper">
      <div className="comments-header">
        <h2>Comments</h2>
        <button onClick={toggleCommentForm}>
          {displayCommentForm ? 'Cancel' : 'New Comment'}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {displayCommentForm ? (
          <CommentForm key="commentForm" confirmSubmit={confirmSubmit} />
        ) : null}
        {submitMessage ? (
          <div className="thank-you">Thanks for your comment!</div>
        ) : null}
      </AnimatePresence>

      <div className="comments-column">
        {comments ? (
          comments.map((comment) => {
            return <Comment key={comment._id} comment={comment} />;
          })
        ) : (
          <p>No one has commented yet. You can be the first!</p>
        )}
      </div>
    </div>
  );
}
