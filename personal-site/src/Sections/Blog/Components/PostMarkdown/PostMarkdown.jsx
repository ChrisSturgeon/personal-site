import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../../markdown-styles.css';

export default function PostMarkdown({ content }) {
  return (
    <ReactMarkdown
      className="ReactMarkdown"
      children={content}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={vs}
              language={match[1]}
              PreTag="div"
              className="codeStyle"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    ></ReactMarkdown>
  );
}
