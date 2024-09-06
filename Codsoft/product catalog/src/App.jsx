import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar/Navbar'
import Product from './component/Product/Product'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import ProductDetail from './component/ProductDetail/ProductDetail'
import SearchItem from './component/SearchItem/SearchItem'
import Cart from './component/Cart/Cart'
import { items } from './component/Data'

function App() {
  // const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  const [data, setData] = useState([...items])



  return (

    <>
      <BrowserRouter>
        
      <Navbar cart={cart} setData={setData} />

          <Routes>

          <Route path='/' element={<Product cart={cart} setCart={setCart} items={data} />} />

            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/search/:term' element={<SearchItem />} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />

          </Routes>
      
      </BrowserRouter>
    </>

  )
}

export default App
