import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() 
{
    
    const navigate = useNavigate();


    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    

    const userdata = useContext(Quotecontext)
    const {setuser} = userdata

    function submit(e) 
    {
        e.preventDefault();

        
    }


  return (
      <div className="background-img">
          <h1>SHAPE YOUR THOUGHTS!!!!</h1>

          <form className="container">
               <input type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => setemail(e.target.value)}
                required />
              

              <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setpassword(e.target.value)}
                  required />

              <button
                  type="button"
                  onClick={submit}
                  class="button">
                  Login
              </button>
          </form>
      </div>  
    
  )
}

export default Login