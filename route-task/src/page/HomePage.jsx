import React from 'react'
import {useNavigate} from 'react-router-dom'

export const HomePage = ({logout}) => {
  const navigate = useNavigate()
  const onClick = () => {
     logout();
     navigate("auth")
  }
  return (
    <div className="login">
      <h1>Hi you are logged in</h1>
      <button onClick={onClick}> logout</button>
    </div>
  )
}
