// Snipet nhanh: rcredux. Sau đó xoá chữ export và xoá hàm mapDispatchToProps

import React, { Component } from 'react'
import { connect } from 'react-redux'

 class BaiTapChonXeRedux extends Component {
  render() {
    return (
      <div>
        <hr />
        <h3>Bài tập chọn xe hơi</h3>
        <div className="row">
            <div className="col-6">
                <img src="./img/red-car.jpg" alt="..." className='w-100'/>
            </div>
            <div className="col-6">
                <button className='btn btn-danger mx-2'>Red</button>
                <button className='btn btn-secondary mx-2'>Steel</button>
                <button className='btn btn-dark mx-2'>Black</button>
                <button className='btn btn-info mx-2'>Silver</button>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  


})



export default connect(mapStateToProps)(BaiTapChonXeRedux)
