import React from 'react'
import {useHistory} from  'react-router-dom';
function Buttons(){
    const history=useHistory();
    /*const SignUpInvestor=()=>
    {
        return(
            <Link to="/signup-investor"></Link>
        )
    }
    const SignUpStartUp=()=>{
        return(
            <Link to="/signup-startup"></Link>
        )
    }
    const Login=()=>{
        return(
            <Link to="/login"></Link>
        )
    }*/
    return(
        <div>
        <button onClick={() => history.push('/signup-investor')} type="Submit">Sign Up as Investor</button>
        <button onClick={() => history.push('/signup-startup')} type="Submit">Sign Up as Start Up</button>
        <button onClick={() => history.push('/login')} type="Submit">Login</button>
        </div>
    )
}
export default Buttons