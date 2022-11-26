import React from 'react';
import ReactDOM from 'react-dom/client';
import BaiTapHomeLayout from './components/BaiTapHomeLayout/BaiTapHomeLayout';
import DataBingding from './components/DataBinding/DataBingding';
import Header from './components/Header';
import Product from './components/Product';
import HandleEven from './HandleEvent/HandleEven';
import DemoState from './State/DemoState';
import RenderList from './RenderList/RenderList';
import RenderFilm from './RenderList/RenderFilm';
// nhúng CSS
import './assets/css/style.css'
import DemoPros from './Pros/DemoPros';
import ShoesApp from './Pros/ShoesApp/ShoesApp';
import BaiTapXemChiTiet from './State/BaiTapXemChiTiet/BaiTapXemChiTiet';
import ExerciseCarStore from './Pros/ExerciseCarSore/ExerciseCarStore';
import DemoChildrentprops from './Pros/DemoChildrenPros/DemoChildrentprops';

// setup react router dom
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Detail from './pages/Detail';
import Register from './pages/Register';
import Hometemplates from './templates/Hometemplates';
import Page404 from './pages/Page404';
import FormCreateProduct from './pages/FormCreateProduct';
import BaiTapGioHang from './pages/BaiTapGioHang/BaiTapGioHang'
import Lifecycle from './pages/Lifecycle/Lifecycle';


const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX
root.render(

  <BrowserRouter>
    <Routes>
      <Route path='' element={<Hometemplates />}>
        <Route index path='Home' element={<Home />}></Route>
        <Route path='Login' element={<Login />}></Route>
        <Route path='Detail' element={<Detail />}></Route>
        <Route path='Register' element={<Register />}></Route>
        <Route path='Form' element={<FormCreateProduct />}></Route>
        <Route path='btgiohang' element={<BaiTapGioHang/>}></Route>
        <Route path='lifecycle' element={<Lifecycle/>}></Route>


        <Route path='*' element={<Navigate to="" />}></Route>
        
        {/* <Route path='*' element={<Page404/>}></Route> */}
      </Route>
    </Routes>

  </BrowserRouter>

)