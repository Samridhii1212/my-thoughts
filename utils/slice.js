import { createSlice } from "@reduxjs/toolkit";

const quoteslice=createSlice(
    {
        name:"quotes",
        initialState:
        {
          items:[],
          favourite:[]
        },
        reducers:
        {
            addtoview:(state,action)=>
            {
                state.items.push(action.payload)
            },

            // addtofav:(state,action) =>
            //  {
            //    let uid=action.payload;
            //    console.log(state.items)
            //   const filteredlist=state.items.filter(item=>item.id!==uid)
            //   console.log(filteredlist)

            // }
            addtofav:(state, action) => 
            {
                const id=action.payload;
                let arr=state.items
                arr = JSON.parse(JSON.stringify(state.items))
               

                arr.map((item)=>
                {
                 if(item.id===id)state.favourite.push(item)
                })
               
               
            },
            removingfromfav:(state,action)=>
            {
                const id = action.payload;
                let arr = state.favourite
                arr = JSON.parse(JSON.stringify(state.favourite))


                let ind = -1;
                for (let i = 0; i < arr.length; i++) 
                {
                    let iid = arr[i].id;
                    if (iid === id) ind = i;

                }
                state.favourite.splice(ind,1);
            },
             removingfromview: (state, action) => {
                const id = action.payload;
                let arr = state.items
                arr = JSON.parse(JSON.stringify(state.items))
                 
                let ind=-1;
                for(let i=0;i<arr.length;i++)
                {
                    let iid=arr[i].id;
                    if(iid===id)ind=i;

                }
                
                state.items.splice(ind,1);
            }
        }
       
    }
)
//console.log(quoteslice.reducer)

export const {addtoview,addtofav,removingfromfav,removingfromview}= quoteslice.actions;
export default quoteslice.reducer
