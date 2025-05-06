'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Blogs() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError('Error fetching data');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
