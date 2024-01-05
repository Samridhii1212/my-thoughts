import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import Quotecontext from "../utils/context"
import { useContext } from "react"

const Header=()=>
{
    const storequotedata=useSelector((store)=>store.quotes.favourite)
    const userdata=useContext(Quotecontext)
    const {loggedinuser,setuser}=userdata
    console.log(userdata)

    return(
        <div className="header">
            <div className="logo">
            <img 
            src="https://media.istockphoto.com/id/1322631166/photo/top-down-view-black-fountain-ink-pen-with-gold-nib-opened-cap-empty-white-paper-pad-on-lilac.jpg?s=612x612&w=0&k=20&c=06ajEtpRGM8zfmzwtEc1zLNjNjzMIposQmMVC5llGmg="
            height="100px"
            >
            </img>
            </div>
            <div className="heading">shape your thoughts</div>
            <nav className="nav-cointainer">
            <ul className="list">
            <li><NavLink to="/logindone">Home</NavLink></li>
            <li><NavLink to="/viewquotes">View quotes</NavLink></li>
            <li><NavLink to="/favourite">Favourite({storequotedata.length})</NavLink></li>
            <li><NavLink to="/">Logout
            ({loggedinuser})
            </NavLink>
            </li>
            </ul>
            </nav>
        </div>
    )

}
export default Header