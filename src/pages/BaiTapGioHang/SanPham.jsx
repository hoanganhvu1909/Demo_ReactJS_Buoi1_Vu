import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    return (
      <div className="card">
        <img src="./img/meizuphone.jpg" className='w-100' height={350} style={{ objectFit: 'contain' }} alt="..." />
        <div className="card-body">
          <h3>Tên sản phẩm</h3>
          <p>1.000</p>
          <button className='btn btn-danger'>
            Thêm vào giỏ hàng
            <i className='fa fa-cart-plus'></i>
          </button>
        </div>
      </div>
    )
  }
}
