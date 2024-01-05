import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { addtofav } from "../utils/slice";
import { useDispatch } from "react-redux";
import { removingfromfav } from "../utils/slice";
import { useSelector } from "react-redux";
import { removingfromview } from "../utils/slice";


const Quotecard=(props)=>
{
    
    const [heart, setheart] = useState(false)
    const dispatch=useDispatch();
    const storequotedata = useSelector((state) => state.quotes.favourite)
    const heartclick =(id) => 
    {
        //setheart(!heart)
       let arr =storequotedata
       const element= arr.filter((item)=>item.id===id);

       
        if(element.length===0)
        {
            dispatch(addtofav(id))
            setheart(false)
        }
        else setheart(true)

    }

    const removeview= (id) => 
    {
       dispatch(removingfromview(id))
       dispatch(removingfromfav(id))
    }


  
   
    return(
        <div className="quote-card">
            <h1>{props.item.category}</h1>
            <h1>{props.item.quotelist}</h1>
            <div className="content">
            <CiHeart 
            className={heart ? "hearttrue" : "heartfalse"} 
            onClick={()=>heartclick(props.item.id)} />
            <button className="remove" onClick={()=>removeview(props.item.id)}>remove</button>
            </div>

        </div>
    )

}
export default Quotecard