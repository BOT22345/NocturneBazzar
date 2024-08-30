import { useState } from 'react';
import './CSS/LoginSignup.css';
function LoginSignup(){
    const [state,setState]=useState("Login");
    const [formData,setFormData]=useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login =async ()=>{
        console.log("login done",formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData)
        }).then((response)=>response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors);
        }
    }
    const signup  =async ()=>{
        console.log("sign up done",formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData)
        }).then((response)=>response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors);
        }
    }

    return <div className="loginSignup">
        <div className="LoginSignupContainer">
            <h1>{state}</h1>
            <div className="LoginSignupFields">
                {state==="Sign Up"?
                <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name"></input>:<></>}
                <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address"></input>
                <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Your Password"></input>
            </div>
            {state==="Sign Up"
            ?
            <p className="LoginSignupLogin">
                Already have an account? <span onClick={()=>{setState("Login")}}>login here</span>
            </p>
            :
            <p className="LoginSignupLogin">
                Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span>
            </p>
        }
            <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
            <div className="LoginSignupAgree">
                <input type="checkbox" name='' id=''></input>
                <p>By Continuing, I agree to use the terms of use & privacy policy</p>
            </div>
        </div>
    </div>
}

export default LoginSignup;