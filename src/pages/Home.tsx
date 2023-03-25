import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { products } from '../mock/products'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@mui/material';
import Modal from '../components/Modal';
import { DTCart } from '../assets/DataTypes/DTCart';
import Navbar from '../components/Navbar';
const Home = () => {
  const [modal, showModal] = React.useState(false)
  const [product, setProduct] = React.useState(undefined)

  const addProduct = (id: string) => {
    showModal(true)
    let aux = products.find((product) => product._id === id)
    setProduct(aux as any)
  }

  const closeModal = () => {
    setProduct(undefined)
  }
  useEffect(() => {
    product ? showModal(true) : showModal(false)
  }, [product])

  const addToCart = (cart: DTCart): void => {
    console.log(cart)
    closeModal()
  }
  return (
    <div className='p-1'>
      {products.map((product) => (
        <Card key={product._id} product={product} action={addProduct} />
      ))}
      <Modal open={modal} closeModal={closeModal} product={product} addToCart={addToCart} />
    </div>
  )
}

export default Home