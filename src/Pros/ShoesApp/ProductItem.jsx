// rcc

import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {prod} = this.props;
    return (
      <div className='card'>
        <img src={prod.image} alt="" />
        <div className="card-body">
            <p>{prod.name}</p>
            <p>{prod.price}</p>
            <button className='btn btn-dark'> Add to cart</button>
        </div>
      </div>
    )
  }
}






