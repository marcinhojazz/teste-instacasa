import React from 'react'

interface Props {
  
}

const Login = (props: Props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <label for="email">Email</label>
      <input id="email" type="email" />
      <label for="password">Password</label>
      <input id="password" type="password" />
      <button>
        <a href="/">Button</a>
      </button>
      
      
    </div>
  )
}

export default Login
