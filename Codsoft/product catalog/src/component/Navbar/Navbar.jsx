import React from 'react'
import './navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { items } from '../Data'


function Navbar({ setData, cart }) {
  const location = useLocation

  const filterByCotgory = (category) => {
    const element = items.filter((product) => product.category === category)

    setData(element)
  }

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price)

    setData(element)
  }
  return (
    <div>

      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={'/'} className="brand">Product Catalog</Link>
          <div className="search-bar">
            <input type="text" placeholder='Search Products' />
          </div>

          <Link to={'cart'} className="cart">

            <button type="button" className="btn btn-primary position-relative">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>


          </Link>

        </div>


        {
          location.pathname == '/' && (
            <div className="nav-bar-wrapper">
              <div className="items">Filter by {"->"}</div>
              <div className="items" onClick={() => setData(items)}>No Filter</div>
              <div className="items" onClick={() => filterByCotgory('mobiles')}>Mobiles</div>
              <div className="items" onClick={() => filterByCotgory('laptops')}>Laptops</div>
              <div className="items" onClick={() => filterByCotgory('tablets')}>Tablets</div>
              <div className="items" onClick={() => filterByPrice(29999)}>{">="}29999</div>
              <div className="items" onClick={() => filterByPrice(49999)}>{">="}49999</div>
              <div className="items" onClick={() => filterByPrice(59999)}>{">="}59999</div>
              <div className="items" onClick={() => filterByPrice(69999)}>{">="}69999</div>

            </div>
          )
        }


      </header>

    </div>
  )
}

export default Navbar