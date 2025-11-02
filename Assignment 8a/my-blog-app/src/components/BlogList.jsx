    // src/components/BlogList.jsx
    import React from 'react';
    import BlogPost from './BlogPost';

    const posts = [
      { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
      { id: 2, title: 'Second Blog Post', content: 'Here\'s some more interesting content for the second post.' },
    ];

    function BlogList() {
      return (
        <div>
          {posts.map(post => (
            <BlogPost key={post.id} title={post.title} content={post.content} />
          ))}
        </div>
      );
    }

    export default BlogList;