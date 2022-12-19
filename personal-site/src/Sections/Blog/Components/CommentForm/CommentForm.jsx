import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CommentForm.css';

export default function CommentForm({ confirmSubmit }) {
  const [username, setUsername] = useState(null);
  const [commentText, setCommentText] = useState(null);
  const [validationError, setValidationError] = useState(null);
  const { postId } = useParams();
  const submitURL = `http://localhost:3000/posts/${postId}/comments/create`;

  const updateUsername = (event) => {
    setUsername(event.target.value);
  };

  const updateCommentText = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const comment = {
      username: username,
      content: commentText,
    };

    try {
      const submittedComment = await fetch(submitURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
      });

      if (submittedComment.status === 201) {
        setUsername('');
        setCommentText('');
        confirmSubmit();
      } else {
        const errors = await submittedComment.json();
        setValidationError(errors.errors[0].msg);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <h3>New Comment</h3>
      <label htmlFor="username">Name</label>
      <input onChange={updateUsername} type="text" placeholder="Guest" />
      <label htmlFor="commentText">Text</label>
      <textarea required={true} onChange={updateCommentText}></textarea>
      <span>{validationError}</span>
      <button type="submit">Submit</button>
    </form>
  );
}
