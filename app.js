import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/body"
import Createquotes from "./components/createquotes"
import Watchquotes from "./components/watchquotes"
import Favourite from "./components/favourite"
import Viewquotes from "./components/viewquotes"
import Frontpage from "./components/frontpage"
import Quotecontext from "./utils/context";
import { useState } from "react";

const App = () => 
{
    const [user,setuser]=useState("default")
   
    return (
        <div>
            <Quotecontext.Provider value={{ loggedinuser:user,setuser}}>
            <Routes>
                <Route exact path="/" element={<Frontpage />}></Route>
                <Route exact path="/logindone" element={<Body />}></Route>
                <Route exact path="/watchquotes" element={<Watchquotes />}></Route>
                <Route exact path="/createquotes" element={<Createquotes />}></Route>
                <Route exact path="/favourite" element={<Favourite />}></Route>
                <Route exact path="/viewquotes" element={<Viewquotes />}></Route>
            </Routes>

            </Quotecontext.Provider>
        </div>
    )

}
export default App;