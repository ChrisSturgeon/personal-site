import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import './CommentForm.css';

const expandOut = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: {
        duration: 0.2,
      },
      opacity: {
        duration: 0.7,
        delay: 0,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.2,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
};

export default function CommentForm({ confirmSubmit }) {
  const [username, setUsername] = useState(null);
  const [commentText, setCommentText] = useState(null);

  const [usernameCount, setUsernameCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  const [validationError, setValidationError] = useState(null);
  const { postId } = useParams();
  const submitURL = `https://blog-api-production-aaa7.up.railway.app/posts/${postId}/comments/create`;

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
    <motion.form
      onSubmit={handleSubmit}
      className="comment-form"
      initial={expandOut.initial}
      animate={expandOut.animate}
      exit={expandOut.exit}
    >
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
        Comment<span>{commentCount} / 3000 characters</span>
      </label>
      <textarea
        required={true}
        onChange={updateCommentText}
        maxLength={3000}
      ></textarea>
      <span>{validationError}</span>
      <button type="submit">Submit Comment</button>
    </motion.form>
  );
}
