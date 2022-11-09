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

const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX
root.render(
 
  // <div>
  //   <Header></Header>
  //   <div className='w-25 mt-2'>
  //     <Product></Product>
  //   </div>
  // </div>
  <div>
    {/* <BaiTapHomeLayout/> */}
    {/* <DataBingding/> */}
    {/* <HandleEven/> */}
    {/* <DemoState/> */}
    {/* <p className='color-red'>abc</p> */}
    {/* <RenderList/> */}
    {/* <RenderFilm/> */}
    {/* <DemoPros/> */}
    {/* <ShoesApp/> */}
    <BaiTapXemChiTiet/>
  </div>

  
)