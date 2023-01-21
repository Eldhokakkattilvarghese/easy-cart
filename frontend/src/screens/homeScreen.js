import React from 'react';
import Product from '../components/Product';
import './cartScreen.css'

function homeScreen() {
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        <Product/>
      </div>
    </div>
  )
}

export default homeScreen;