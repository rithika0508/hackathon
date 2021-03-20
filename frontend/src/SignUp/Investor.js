import React,{useState} from 'react'
import {useHistory} from  'react-router-dom'
import './Combine.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Navbar from './Navbar'


const Investor = () => {
    const history=useHistory()
    const[name,setname]=useState('')
    const[username,setusername]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[budget,setbudget]=useState('')
    const[country,setcountry]=useState('')
    const[bio,setbio]=useState('')
    const[portfolio,setportfolio]=useState('')
    const[confirm,setconfirm]=useState('')
    const SubmitHandler=()=>{
        if(password!==confirm)
        {
            alert("Password didn't match")
        }
        else if(username.length<3)
        {
            alert("username is too short")
        }
        else if(password.length<4)
        {
            alert("Password length is too short minimum 4 characters are required")
        }
        else if(email.length===0||budget.length===0||bio.length===0||name.length===0||username.length===0||password.length===0||confirm.length===0)
        {
            alert("Fill all the mandatory fields")
        }
        else
        {
            console.log({name:name,username:username,email:email,password:password,budget:budget,location:country,bio:bio,portfolio:portfolio})
            axios.post("/ins",{name:name,username:username,email:email,password:password,budget:budget,location:country,bio:bio,portfolio:portfolio}).then((response) => {
                console.log('checkin')
                console.log(response)
            })
            history.push('/login')
        }
    }
    return (
        <div id="signInvestor">
            <Navbar/>
        <div className="container">
            <div className="card">
                <p className="heading">SIGN UP AS Investor!</p>
                <form>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input value={name} onChange={e=>setname(e.target.value)} type="text" className="form-control" id="input" placeholder="Name"></input>
                            <br></br>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-10">
                            <input value={username} onChange={e=>setusername(e.target.value)} type="text" className="form-control" id="input" placeholder="Username"></input>
                            <br></br>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="col-sm-10">
                            <input value={email} onChange={e=>setemail(e.target.value)} id="input" className="form-control" type="text" class="form-control" name="email" placeholder="Email"></input>
                            <br></br>
                        </div>
                    </div><br></br>

                    <div class="input-group">
                        <div class="col-sm-10">
                            <input value={password} onChange={e=>setpassword(e.target.value)} id="input" type="password" class="form-control" name="password" placeholder="Password"></input>
                            <br></br>
                        </div>
                    </div><br></br>

                    <div class="input-group">
                        <div class="col-sm-10">
                            <input value={confirm} onChange={e=>setconfirm(e.target.value)} id="input" type="password" class="form-control" name="password" placeholder="Confirm Password"></input>
                            <br></br>
                        </div>
                    </div><br></br>
                    <div className="form-group">
                        <div class="col-sm-10">
                            <input value={budget} onChange={e=>setbudget(e.target.value)} type="text" class="form-control" id="input" placeholder="Budget"></input>
                        </div>
                    </div><br></br>

                    <div className="form-group">
                        <div class="col-sm-10">
                            <input value={country} onChange={e=>setcountry(e.target.value)} type="text" class="form-control" id="input" placeholder="Country(Optional)"></input>
                            <br></br>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-10">
                            <textarea value={bio} onChange={e=>setbio(e.target.value)} class="form-control" rows="5" id="input" placeholder="Bio"></textarea>
                            <br></br>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-10">
                            <textarea value={portfolio} onChange={e=>setportfolio(e.target.value)} class="form-control" rows="5" id="input" placeholder="Portfolio-Link(Optional)"></textarea>
                            <br></br>
                        </div>
                    </div>
                </form>
                <button type="submit" className="btn" onClick={SubmitHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> SIGN UP</button>
            </div>
        </div>
        </div>)

}
export default Investor