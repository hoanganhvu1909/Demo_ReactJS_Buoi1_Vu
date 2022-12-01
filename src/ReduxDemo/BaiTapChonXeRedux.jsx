// Snipet nhanh: rcredux. Sau đó xoá chữ export và xoá hàm mapDispatchToProps

import React, { Component } from 'react'
import { connect } from 'react-redux'

 class BaiTapChonXeRedux extends Component {
  handleChangColor = (color) =>{
    let newimgSrc = `./img/${color}-car.jpg`;
    const action = {
      type: 'CHANGE_COLOR',
      payload: newimgSrc
    }
    // Sử dụng this.props.dispatch gửi action lên reducer
    this.props.dispatch(action)
  }
  render() {
    console.log(this.props);
    let {imgSrc} = this.props;
    return (
      <div>
        <hr />
        <h3>Bài tập chọn xe hơi</h3>
        <div className="row">
            <div className="col-6">
                <img src={imgSrc} alt="..." className='w-100'/>
            </div>
            <div className="col-6">
                <button className='btn btn-danger mx-2' onClick={()=>{
                  this.handleChangColor('red')
                }}>Red</button>
                <button className='btn btn-secondary mx-2' onClick={()=>{
                  this.handleChangColor('steel')
                }}>Steel</button>
                <button className='btn btn-dark mx-2' onClick={()=>{
                  this.handleChangColor('Black')
                }}>Black</button>
                <button className='btn btn-info mx-2' onClick={()=>{
                  this.handleChangColor('Silver')
                }}>Silver</button>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  imgSrc:state.imgSrc
})

export default connect(mapStateToProps)(BaiTapChonXeRedux)
