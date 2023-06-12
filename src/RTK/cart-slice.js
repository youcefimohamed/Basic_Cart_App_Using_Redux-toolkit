import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
   name: 'cartSlice',
   initialState : [],
   reducers: {
      AddToCart:(state,action)=>{
         const findProduct = state.find((product)=>product.id ===action.payload.id)
            if(findProduct){
               findProduct.quantity+=1
            }else{
               const productCLone = {...action.payload,quantity:1}
               state.push(productCLone)
            }
         
      },
      DeleteFromCart : (state,action)=>{
         return state.filter((product)=>product.id !== action.payload.id)
      },
      clear : (state,action)=>{
         return []
      }
      },
   
   },
) 

export const {AddToCart,DeleteFromCart,clear} = cartSlice.actions
export default cartSlice.reducer