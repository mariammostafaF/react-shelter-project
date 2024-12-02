import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp=()=>{
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const handleSubmit= async(e)=>{
    e.preventDefault()
    try{
      await createUserWithEmailAndPassword(auth,email,password)
      console.log("account created")
    }catch(err){
      console.log(err)
    }
  }
  return(
    <div>
      <form>
        <h2>
          sign up
        </h2>    
        <label htmlFor="email">
          Email:
          <input type="email" onChange={(e)=>setEmail(e.target.value)}></input>
        </label>  
        <label htmlFor="password">
          Password:
          <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
        </label>
        <button>Sign up</button>
        <p>have an account <a>login</a></p>
      </form>
    </div>
  )

}

export default SignUp