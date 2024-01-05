import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import {removingfromfav } from "../utils/slice";

const Favourite=()=>
{
     const storequotedata=useSelector((state)=>state.quotes.favourite)
   
    const dispatch=useDispatch();

    function removefromfav(id)
    {
        dispatch(removingfromfav(id))
    }


    return(
        <div>
        <Header/>
        <div className="favouritelist">
        {storequotedata.map((item)=>
        (
        <div className="quote-card-fav">
        <h1>{item.category}</h1>
        <h1>{item.quotelist}</h1>
       
        <button className="removefav" onClick={()=>removefromfav(item.id)}>remove from favourite</button>
        </div>
        
        )
        )}
      
        
        </div>
        </div>
    )

}
export default Favourite;