import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom"

export const PostsPage = () => {
  const [posts, setPosts] = useState([])
  const navigation = useNavigate()
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setPosts(json))
  }, [])
  if (!posts.length) return null;
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id} onClick={() => navigation(`/posts/${post.id}`, {state: post})}>
             {post.title}
         </li>
      ))}
    </ul>
  )
}
