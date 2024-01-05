const { configureStore } = require("@reduxjs/toolkit");
import quotereducer from "./slice"

const store=configureStore(
    
    {
        reducer:
    {
       quotes:quotereducer
    }
   }
)
export default store;