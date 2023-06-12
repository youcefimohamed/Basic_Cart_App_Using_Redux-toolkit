import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../RTK/Products_Slice';
import { AddToCart } from '../RTK/cart-slice';

function Products() {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchProducts())
   }, [])
   const products = useSelector((store) => store.products)
   return (
      <>
         <Container>
            <div className='row '>
               {products.map((product) => {
                  return (
                     <div className='col' key={product.id}>
                        <Card style={{ width: '18rem' }}>
                           <Card.Img variant="top" src={product.image} />
                           <Card.Body>
                              <Card.Title>{product.title}</Card.Title>
                              <Card.Text>
                                 {product.description}
                              </Card.Text>
                              <Card.Text className='text-danger fw-bolder'>
                                 {product.price} $
                              </Card.Text>
                              <Button variant="primary" onClick={() => { dispatch(AddToCart(product)) }}>Add To Cart</Button>
                           </Card.Body>
                        </Card>
                     </div>

                  )
               })}
            </div>

         </Container>
      </>
   )
}

export default Products