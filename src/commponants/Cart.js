import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteFromCart } from '../RTK/cart-slice';
import  {clear}  from '../RTK/cart-slice';
function Cart() {
   const dispatch = useDispatch()
   const cart = useSelector(store => store.cart)
   const totalPrice = cart.reduce((acc,product)=>{
      acc = acc +(product.price *product.quantity)
      return acc
   },0)
   return (
      <>
      <h3>Total Price : {totalPrice.toFixed(2)}</h3>
         <Table striped bordered hover>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Quantity</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th><button className='btn btn-danger' onClick={()=>dispatch(clear())}>Clear</button></th>
               </tr>
            </thead>
            <tbody>
               {cart.map((product) => {
                  return (
                     <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.quantity}</td>
                        <td>{product.title}</td>
                        <td>{product.price}$</td>
                        <td ><img src={product.image} className='img-thumbnail' style={{ width: "100px", height: "100px" }} alt="" /></td>
                        <td><button className='btn btn-danger' onClick={() => { dispatch(DeleteFromCart(product)) }}>Delete</button></td>
                     </tr>
                  )
               })}
            </tbody>
         </Table>
         
      </>
   )
}

export default Cart