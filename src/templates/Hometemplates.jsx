import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default class Hometemplates extends Component {
  render() {
    return (
      <div>
                <Header/>
                <div style={{ minHeight: 650 }}>
                    {/* Outlet là vị trí hiển thị component root con */}
                <Outlet/>
                </div>
                <footer className='text-center p-5 bg-dark text-white'>footer</footer>
      </div>
    )
  }
}
