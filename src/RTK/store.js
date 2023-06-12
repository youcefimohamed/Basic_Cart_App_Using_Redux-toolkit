import { configureStore } from '@reduxjs/toolkit'
import Products_Slice from './Products_Slice'
import cartSlice  from './cart-slice'

export const store = configureStore({
  reducer: {
   products:Products_Slice,
   cart :cartSlice
},
  
})