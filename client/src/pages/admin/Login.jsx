import axios from 'axios'
import { useState } from 'react'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handle=async e=>{
    e.preventDefault();
    const res = await axios.post('/api/auth/login',{email,password})
    localStorage.setItem('token',res.data.token)
    window.location.href = '/admin/dashboard'
  }
  return (
    <div style={{padding:40}}>
      <h2>Admin Login</h2>
      <form onSubmit={handle}>
        <div><input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div><input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /></div>
        <button>Login</button>
      </form>
    </div>
  )
}
