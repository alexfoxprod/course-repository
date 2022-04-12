import React from 'react'
import {useLocation} from "react-router-dom"

export const PostPage = () => {
  const {state: post} = useLocation()
  return (
    <>
    {" "}
    {post && (
      <>
          <div className="wrapper">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            </div>
            </>
    )}
    </>
  )
}

export default PostPage