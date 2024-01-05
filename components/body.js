import Header from "./header"
import Belowheading from "./belowheading"
import { useEffect, useState } from "react"
import Quotecontext from "../utils/context"

const Body=()=>
{
   useEffect(()=>{fetchdata()},[])
   const [user,setuser]=useState("samridhi")
   async function fetchdata()
   {
       const data = await fetch("https://api.rainviewer.com/public/weather-maps.json")
       //console.log(data)//response object is return

       const json=await data.json()//return a promise
       //console.log(json)
   }
    return(
       <div>
        <Header/>
        <Belowheading/>
       </div>
    )

}
export default Body