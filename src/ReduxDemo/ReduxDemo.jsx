import React, { Component } from 'react'
import BaiTapChonXeRedux from './BaiTapChonXeRedux'
import DemoTangGianFontSize from './DemoTangGianFontSize'
import QuanLyNguoiDung from './QuanLyNguoiDung/QuanLyNguoiDung'

export default class ReduxDemo extends Component {
  render() {
    return (
      <div className='container'>
        <DemoTangGianFontSize/>
        <BaiTapChonXeRedux/>
        <QuanLyNguoiDung/>
      </div>
    )
  }
}



