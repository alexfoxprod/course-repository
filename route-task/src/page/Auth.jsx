import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Auth = ({authenticate}) => {
  const navigate = useNavigate()
  const onClick = () => {
     authenticate();
     navigate("about")
  }
  return (
    <div className="login">
      <h2>Please authenticate to continue</h2>
      <button onClick={onClick}>Authenticate</button>
    </div>
  )
}
