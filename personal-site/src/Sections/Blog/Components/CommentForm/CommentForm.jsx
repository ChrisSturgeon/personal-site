import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CommentForm.css';

export default function CommentForm({ confirmSubmit }) {
  const [username, setUsername] = useState(null);
  const [commentText, setCommentText] = useState(null);

  const [usernameCount, setUsernameCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

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

  // Counts username input length
  useEffect(() => {
    if (username) {
      setUsernameCount(username.length);
    }
  }, [username]);

  // Counts content input length
  useEffect(() => {
    if (commentText) {
      setCommentCount(commentText.length);
    }
  }, [commentText]);

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <label htmlFor="username">
        Name <span>{usernameCount} / 19 characters</span>
      </label>
      <input
        onChange={updateUsername}
        type="text"
        placeholder="Leave blank to post as guest..."
        maxLength={19}
      />
      <label htmlFor="commentText">
        Text<span>{commentCount} / 3000 characters</span>
      </label>
      <textarea
        required={true}
        onChange={updateCommentText}
        maxLength={3000}
      ></textarea>
      <span>{validationError}</span>
      <button type="submit">Submit Comment</button>
    </form>
  );
}
