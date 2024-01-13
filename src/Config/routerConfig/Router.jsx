import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/home/Home'
import About from '../../screens/about/About'
import Contact from '../../screens/contacts/Contact'
import Navbar from '../../Components/Navbar/Navbar'
import Product from '../../screens/products/Product'
import SingleProduct from '../../Screens/Singleproduct/SingleProduct'


const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='products' element={<Product />} />
                    <Route path='singleproduct/:id' element={<SingleProduct />} />
                </Routes>
                
            </BrowserRouter>
        </>
    )
}

export default Routers