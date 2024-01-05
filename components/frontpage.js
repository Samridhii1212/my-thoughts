import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Quotecontext from "../utils/context";
import { useContext } from "react";

const Frontpage=()=>
{
   const [login,setstate]=useState(false);
   const navigate=useNavigate();

   const [username,setusername]=useState("")
   const [email,setemail]=useState("")

   const [password,setpassword]=useState("")
   const [repassword, setrepassword] = useState("")
   
   const userdata = useContext(Quotecontext)
   const {setuser} = userdata

   function submit(e)
   {
      //e.preventDefault();
      console.log(username)
      setuser(username)
      setstate(!login)
      //console.log(login)
      if(login)navigate("/logindone")
     else
     {
     setemail("")
     setpassword("")
     }
   }

   
   return(
      <div className="background-img">
         <h1>SHAPE YOUR THOUGHTS!!!!</h1>

         <form className="container">
            {!login && 
            <input type="text" 
            placeholder="Email"
            name="email" 
            onChange={(e) => setemail(e.target.value)}
            required />
            }
            <input 
            type="text" 
            placeholder="Username"
            name="username" 
            onChange={(e)=>setusername(e.target.value)}
            required/>

            <input 
            type="password" 
            placeholder="Password"
            name="password" 
            onChange={(e) => setpassword(e.target.value)}
            required/>
               
            {!login &&
               <input type="password"
               placeholder="Re-enter password"
               onChange={(e) => setrepassword(e.target.value)}

               name="username" required />
            }

               <button 
               type="button" 
               onClick={submit}
               class="button">
               {login?"Login":"Sign up"}
               </button>
               </form>
            </div>  
     
   )
}

export default Frontpage