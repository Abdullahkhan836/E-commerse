import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="navbar text-white bg-red-400">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link  to='/'>HOME</Link></li>
            <li><Link to="contact">CONTACT</Link></li>
            <li><Link to="about">ABOUT</Link></li>
            <li><Link  to='products'>PRODUCTS</Link></li>
              
          </ul>
        </div>
      </div>
    )
}

export default Navbar