

import React, { Component } from 'react'

export default class HeaderHome extends Component {
  //Không xét kích thước component bởi vì không tái sử dụng cho các component khác
  render() {
    return (
      <div className='bg-primary text-white text-center p-5'>
        HeaderHome
      </div>
    )
  }
}
