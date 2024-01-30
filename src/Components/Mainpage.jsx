import React from 'react';
import Data from './Data';
import './Style.css';
import { useDispatch } from 'react-redux';
import { decrementCart, incrementCart } from '../Redux/CartReducer';

export default function Mainpage() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className='mt-5 text-center'>Available Mobile Phones List</h1>
      <div className='main1 m-3 mt-5 container'>
        {Data.map((value, index) => (
          <ul key={index} className='product-item col-md-3 mb-3'>
            <img src={value.src} alt={`Product ${value.brandName} ${value.model}`} width={320} height={300} />
           <li className='d-inline mx-4 mb-1'> <strong>{`Brand: ${value.brandName} ${value.model}`}</strong> </li>
           <br/>
            <li className='d-inline mx-5'> <strong>{`Price: $${value.price}`}</strong> </li>
            <div className="buttons-container">
              <button className='btn btn-outline-primary my-2 mx-4'
              onClick={()=>{
                dispatch(incrementCart(
                  {productName : value.brandName +" "+ value.model,
                  productPrice : value.price
                  }
                ))
              }}>Add</button>
              <button className='btn btn-outline-warning my-2 mx-4' onClick={()=>{
                dispatch(decrementCart(
                  {
                    productName : value.brandName +" "+value.model,
                    productPrice : value.price
                  }
                ))
              }}>Remove</button>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}
