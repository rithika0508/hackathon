import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'

const Login1 = () => {
  const history=useHistory()
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const[next,usenext]=useState('')
  const SubmitHandler=()=>{

    if(username.includes(".com")||username.includes(".in"))
    {
      axios.get(`/login/verify?email=${username}&password=${password}`)
        .then((res)=> {
          console.log(res) 
          if(res.data.message)
          {
            return(
              alert("Invalid Login Credentials")
            )
          }
          else{
            if(res.data.SI==="startup")
            {
              history.push(`/login/allinvestors`)
            }
           else if(res.data.SI==="investor")
           {
             history.push('/login/allstartups')
           }
          }
        })
    }
    else{
      axios.get(`/login/verify?username=${username}&password=${password}`)
        .then(res=>{
          console.log(res)
          if(res.data.message)
          {
            return(
              alert("Invalid Login Credentials")
            )
          }
          else{
            console.log("succes")
            if(res.data.SI==="startup")
            {
              console.log(res.data.SI)
              history.push(`/login/allinvestors`)
            }
           else if(res.data.SI==="investor")
           {
            console.log(res.data.SI)
             history.push('/login/allstartups')
           }
          }
        })
    }

  }
  return (
    <div id="login">
      <Navbar />
    <div className="card-l">
      <p className="heading-l">Login</p>
      <form>
        <div className="form-group login-form-group">
          <div class="col-sm-10 login">
            <input value={username} onChange={e => { setusername(e.target.value) }} type="text" className="form-control login-form-control" id="input-l" placeholder="Username"></input>
            <br></br>
          </div>
        </div>
        <div className="input-group login-input-group">
          <div className="col-sm-10 login">
            <input id="input-l" value={password} onChange={e => { setpassword(e.target.value) }} type="password" className="form-control login-form-control" name="password" placeholder="Password"></input>
            <br></br>
          </div>
        </div>
      </form>
      <button onClick={SubmitHandler} type="submit login-submit" className="btn-l">
        <span></span>
        <span></span>
        <span></span>
        <span></span>Login</button>
    </div>
    </div>)

}
export default Login1