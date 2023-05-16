import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@mui/material';
import Modal from '../components/Modals/Modal';
import { DTCart } from '../assets/DataTypes/DTCart';
import Navbar from '../components/Navbar';
import { getProducts } from '../api/product';
import { DTProduct } from '../assets/DataTypes/DTProduct';

const Home = () => {

  return (
    <div className='p-1'>

    </div>
  )
}

export default Home