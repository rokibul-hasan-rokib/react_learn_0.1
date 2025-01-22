'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Post() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
              setData(response.data);
              console.log(response.data);
            } catch (error) {
              setError('Error fetching data');
            }
        };
        fetchData();
    },[])
  return (
    <div>
      <h1>Post</h1>
      <div>
        {error && <p>{error}</p>}
      </div>
      {
        data.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))
      }
    </div>
  )
}
