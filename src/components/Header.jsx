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
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active bg-warning text-white' : 'nav-link'} style={({ isActive }) => isActive ? { fontSize: 20, borderRadius: '10px' } : {}} to="/home" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active bg-warning text-white' : 'nav-link'} style={({ isActive }) => isActive ? { fontSize: 20, borderRadius: '10px' } : {}} to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active bg-warning text-white' : 'nav-link'} style={({ isActive }) => isActive ? { fontSize: 20, borderRadius: '10px' } : {}} to="/register">register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active bg-warning text-white' : 'nav-link'} style={({ isActive }) => isActive ? { fontSize: 20, borderRadius: '10px' } : {}} to="/Detail">Detail</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active bg-warning text-white' : 'nav-link'} style={({ isActive }) => isActive ? { fontSize: 20, borderRadius: '10px' } : {}} to="/Form">React Form</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active bg-warning text-white' : 'nav-link'} style={({ isActive }) => isActive ? { fontSize: 20, borderRadius: '10px' } : {}} to="/reduxdemo">Redux</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active bg-warning text-white' : 'nav-link'} style={({ isActive }) => isActive ? { fontSize: 20, borderRadius: '10px' } : {}} to="/bt-game">Bài tập game xúc xắc</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <NavLink className="dropdown-item" to="/hook-use-state">useState</NavLink>
                                    <NavLink className="dropdown-item" to="/hook-use-effect">useEffect</NavLink>
                                    <NavLink className="dropdown-item" to="/hook-use-effect-update">useEffect(update)</NavLink>
                                    <NavLink className="dropdown-item" to="/hook-use-callback">UseCallBack</NavLink>
                                    <NavLink className="dropdown-item" to="/hook-use-memo">UseMemo(Update)</NavLink>
                                    <NavLink className="dropdown-item" to="/hook-use-ref">UseRef</NavLink>
                                    <NavLink className="dropdown-item" to="/hook-use-redux">UseRedux(update)</NavLink>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks Router</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <NavLink className="dropdown-item" to="/hook-use-navigate">useNavigate</NavLink>
                                    <NavLink className="dropdown-item" to="/hook-use-search-params">Search</NavLink>
                                    <NavLink className="dropdown-item" to="/demo-custom-hook">Custom Hook</NavLink>
                                </div>
                            </li>


                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                 <NavLink className="dropdown-item" to="/hook-use-state">useState</NavLink>
                                </div>
                            </li> */}
                        </ul>
                        <div className='d-flex my-2 my-lg-0 '>
                            <NavLink to={'/btgiohang'}>
                                <i className='fa fa-cart-plus' style={{ fontSize: 20 }}></i>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </nav>


        )
    }
}


