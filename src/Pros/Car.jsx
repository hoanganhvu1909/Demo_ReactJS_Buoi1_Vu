// rcc

import React, { Component } from 'react'

export default class Car extends Component {


  render() {

    /**
     Khác biệt giữa this.state và this.pros:
     Giống: đều là thuộc tính có sẵn từ react class components, dùng để blingding dữ liệu lên giao diện
     Khác nhau: state dùng để chứa dữ liệu thay đổi trên giao diện và có thể gán lại được thông qua phương thức setState.
     Pros dùng để nhận dữ liệu từ components cha truyền vào và không được gán lại giá trị đó.
     */


    const {img, name, id, price} = this.props.prod;
    return (
      <div>
        <div className="card">
            <img src={img} alt="..." />
            <div className="card-body bg-dark text-white">
                <h3>{name} </h3>
                <p>{price}</p>
                {this.props.tagButton}
            </div>
        </div>
      </div>
    )
  }
}







