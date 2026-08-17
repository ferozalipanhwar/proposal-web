import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Dashboard(){
  const [responses,setResponses]=useState([])
  useEffect(()=>{
    const t = async ()=>{
      const token = localStorage.getItem('token')
      if(!token) return window.location.href='/admin/login'
      const res = await axios.get('/api/proposal-response',{ headers: { Authorization: 'Bearer '+token } })
      setResponses(res.data)
    }
    t()
  },[])
  return (
    <div style={{padding:24}}>
      <h2>Admin Dashboard</h2>
      <h3>Proposal Responses</h3>
      <ul>
        {responses.map(r=> <li key={r._id}>{r.response} — {new Date(r.timestamp).toLocaleString()}</li>)}
      </ul>
    </div>
  )
}
