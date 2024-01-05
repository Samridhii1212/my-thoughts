import { useContext, useState } from "react"
import Viewquotes from "./viewquotes"
import {Quotecontext} from "../utils/context"
import { useDispatch } from "react-redux"
import { addtoview } from "../utils/slice"
import { nanoid } from "nanoid"
import Header from "./header"

const Createquotes=()=>
{
    
    const dispatch=useDispatch();
    const [category,setcategory]=useState("")
    const [writequotes, setwritequotes] = useState("")
    const initial = nanoid()
    const [id, setid] = useState(initial)
    const [quotelist, addquotetolist] = useState(
        [
        {

        category: category, 
        quotelist: writequotes

        }
        ]
        )


    function submitted(e)
    {
        e.preventDefault();
        const newid = nanoid()
        setid(newid)
        const obj={
            category:category,
            quotelist:writequotes,
            id:id
        }
        dispatch(addtoview(obj))
       
    }
  
    return(
        <div className="background-img-quotes">
            <Header/>
            
            <form className="container-quotes">
                
                <input 
                type="text" 
                placeholder="category"
                name="username"
                onChange={(e)=>setcategory(e.target.value)}
                />

                <input 
                type="text" 
                placeholder="write your thoughts"
                name="" 
                onChange={(e) => setwritequotes(e.target.value)}
                />

                <button
                type="button"
                onClick={submitted}
                className="button"
                >
                ADD
                </button>
                {/* {
                quotelist.map((element,id)=>
                <Viewquotes 
                id={id} 
                category={element.category} 
                quote={element.quotelist}
                />
                )} */}
            </form>
        </div>

    )

}
export default Createquotes