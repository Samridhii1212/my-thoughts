import { FaPen } from "react-icons/fa";
import { Outlet, NavLink } from "react-router-dom";


const Belowheading=()=>
{
return(

<div className="large-container">

    <div className="left-container">
    <div className="above-icon">
    <NavLink to="/createquotes">createquotes</NavLink>
    </div>
    <div className="icon-container"><FaPen className="icon" /></div>
    </div>

        

    <div className="right-container">
    <div className="above-icon">
    <NavLink to="/watchquotes">some amazing quotes</NavLink>
    </div>
    <div className="icon-container"><FaPen className="icon" /></div>
    </div>
</div>
)
}
export default Belowheading;