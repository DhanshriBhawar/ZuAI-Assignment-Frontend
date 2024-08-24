import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="post-list">
      {posts.map(post => (
        <div key={post._id} className="post-summary">
          <img src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.shortDescription}</p>
          <Link to={`/posts/${post._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;
