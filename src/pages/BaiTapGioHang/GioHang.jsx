import React, { Component } from 'react'

export default class GioHang extends Component {
  render() {
    return (
      <div>
        <div className="card mt-2">
            <div className="card-header">Giỏ hàng</div>
            <div className="card-body">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Mã sp</th>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá bán</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src="https://picsum.photos/200/200" width={50} height={50} alt="..." />
                            </td>
                            <td>Iphone</td>
                            <td>1.000</td>
                            <td>
                                <button className='btn btn-dark' mx-2>+</button>
                                <button className='btn btn-dark mx-2'>+</button>
                            </td>
                            <td>1000</td>
                            <td>
                                <button className='btn btn-danger'>Xoá</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src="https://picsum.photos/200/200" width={50} height={50} alt="..." />
                            </td>
                            <td>Macbook</td>
                            <td>2.000</td>
                            <td>
                                <button className='btn btn-dark' mx-2>+</button>
                                <button className='btn btn-dark mx-2'>+</button>
                            </td>
                            <td>2000</td>
                            <td>
                                <button className='btn btn-danger'>Xoá</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
}
