import React, { Component } from 'react'
import GioHang from './GioHang'
import DanhSachSanPham from './DanhSachSanPham'


export default class BaiTapGioHang extends Component {
  state = {
    gioHang: [
      { maSP: 3, tenSP: "Iphone XS Max", giaBan: 27000000, hinhAnh: "./img/applephone.jpg", soLuong: 2 }
    ]
  }

  // XOÁ
  // State đặt tại đâu thì các hàm setState sẽ viết tại các components đó.

  xoaGioHang = (maSPClick) => {
    console.log(maSPClick);
    // Cách 1:
    // Lấy ra giỏ hàng
    // let gioHang = this.state.gioHang;
    // let index = gioHang.findIndex(sp => sp.maSP === maSPClick);
    // if(index !== -1){
    //   gioHang.splice(index,1)
    // }
    // // Cập nhật lại giỏ hàng
    // this.setState({
    //   gioHang: gioHang
    // })

    // Cách 2: dùng hàm filter
    this.setState({
      gioHang: this.state.gioHang.filter(sp => sp.maSP !== maSPClick)
    })
  }

  // TĂNG GIẢM SỐ LƯỢNG
  tangGiamSoLuong = (maSP, soLuong) => { //+: 1,1 -: -1,-1
    let gioHang = this.state.gioHang;
    let spGH = gioHang.find(sp => sp.maSP === maSP);
    if (spGH) {
      spGH.soLuong += soLuong;
      if (spGH.soLuong <= 0) {
        if (window.confirm("Bạn có muốn xoá sản phẩm")) {
          this.xoaGioHang(maSP);
          return;
        }
        spGH.soLuong -= soLuong;
        return;
      }
    }
    // Xử lý setState
    this.setState({
      gioHang: gioHang
    })
  }







  themGioHang = (spClick) => {
    const spGioHang = { ...spClick, soLuong: 1 };
    console.log(spClick);

    //setState...
    //Xử lý cập nhật state.gioHang khi click
    let gioHang = this.state.gioHang;
    //Kiểm tra sp vừa click đã có trong giỏ hàng hay chưa
    //find trả về object trong mảng 
    let spCheck = gioHang.find(sp => sp.maSP === spClick.maSP);
    if (spCheck) {
      spCheck.soLuong = spCheck.soLuong + 1;
    } else {
      gioHang.push(spGioHang);
    }
    //Cập nhật state
    this.setState({
      gioHang: gioHang
    })
  }

  render() {
    return (
      <div>
        <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
        <DanhSachSanPham themGioHang={this.themGioHang} />

      </div>
    )
  }
}
