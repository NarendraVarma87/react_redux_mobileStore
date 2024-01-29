import React from 'react' 
import { useSelector } from 'react-redux'
import './Style.css'

export default function Navbar() {
  const cartCount  = useSelector((state) => state.cartReducer.cartValue.length)
  const price = useSelector((state) => state.cartReducer.totalPrice)
  return (
    <div className='navbar'>
    <nav className="navbar navbar-expand-md  fixed-top mx-5" id='first'>
    <a href="#" className="navbar-brand h1"> Mobile Store</a>
    <button type="button" data-bs-toggle ="collapse" data-bs-target='#collapsenavbar'
    className="navbar-toggler" aria-aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigator'>
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsenavbar">
        <ul className='navbar-nav mx-auto'>
            <li className="nav-item text-center mx-5"><a href='#' className="nav-link active btn btn-primary">Cart Items : {cartCount}</a></li>
            <li className="nav-item text-center mx-5"><a href='#' className="nav-link active btn btn-primary">Total Price : {price}</a></li>
        </ul>
        </div>
        </nav>
        </div>
  )
}
