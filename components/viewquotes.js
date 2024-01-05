import { useSelector } from "react-redux"
import Header from "./header"
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import Quotecard from "./quotecard";


const Viewquotes=(props)=>
{
    //console.log(props)
    
    // const [heart,setheart]=useState(false)
    const storedata=useSelector((store)=>store.quotes.items)
    
    // console.log(storedata)

   
    return(
    <div>
    <Header/>
    <div className="quoteslist">
       {
        storedata.map((item,index)=>
        <Quotecard id={index} item={item}/>
        )
        }
    
    </div>
    </div>
    )

}
export default Viewquotes;
