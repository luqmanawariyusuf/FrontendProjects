    // src/components/BlogPost.jsx
    import React from 'react';

    function BlogPost({ title, content }) {
      return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      );
    }

    export default BlogPost;