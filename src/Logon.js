import React, { useState  } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Logon() {
  const [username ,setUsername]=useState('')
  const [Password ,setPassword]=useState('')
  const [error, setError]=useState('')
const navigate=useNavigate();
  const Login=()=>{
    if(username==='admin'&& Password==='12345'){
      // navigate(`/Home?username=${username}`);
      navigate(`/WebPage`);
    }
    else{
      setError("invalid roote")
    }
  }
  return (
    <div style={{background:"red"}}>
    <div>
    <label>email</label>
      <input type='email' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
      </div>
    <div>
    <label>password</label>
      <input type='password'placeholder='password' value={Password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
      </div>
      {error &&<p style={{color:"red"}}>{error}</p>}
      {/* {success &&<p style={{color:"red"}}>{successfull}</p>} */}
      <button onClick={Login}>logon</button>
      <button>
        <Link className='link' to="/Home">Home</Link>
      </button>
    </div>
  )
}

export default Logon
