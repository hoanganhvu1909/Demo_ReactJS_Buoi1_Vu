// React class component, rcc

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    
    //Phương thức render: Chứa giao diện html của component
    //Nội dung component phải được bao phủ bởi một thẻ



    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="">Anh Vũ</NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive ? 'nav-link active bg-warning text-white' : 'nav-link' } style={({isActive})=> isActive ? {fontSize:20, borderRadius:'10px'} : {}  } to="/home" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive ? 'nav-link active bg-warning text-white' : 'nav-link' } style={({isActive})=> isActive ? {fontSize:20, borderRadius:'10px'} : {}  }  to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive ? 'nav-link active bg-warning text-white' : 'nav-link' } style={({isActive})=> isActive ? {fontSize:20, borderRadius:'10px'} : {}  } to="/register">register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive ? 'nav-link active bg-warning text-white' : 'nav-link' } style={({isActive})=> isActive ? {fontSize:20, borderRadius:'10px'} : {}  } to="/Detail">Detail</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive ? 'nav-link active bg-warning text-white' : 'nav-link' } style={({isActive})=> isActive ? {fontSize:20, borderRadius:'10px'} : {}  } to="/Form">React Form</NavLink>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li> */}
                        </ul>
                        
                    </div>
                </div>
            </nav>


        )
    }
}
