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
import Store from './pages/StoreApi/Store';
// Setup redux store
import { Provider } from 'react-redux'
import { store } from './redux/configStore';
import ReduxDemo from './ReduxDemo/ReduxDemo';
import BaiTapGameXucXac from './pages/BaiTaoGaneXucXac/BaiTapGameXucXac';
import UseStateDemo from './pages/HookDemo/UseStateDemo';
import UseEffectDemo from './pages/HookDemo/UseEffectDemo/UseEffectDemo';
import DemoCategory from './pages/HookDemo/UseEffectDemo/DemoCategory';
import UseCallBackDemo from './pages/HookDemo/UseCallBackDemo/UseCallBackDemo';
import UseMemoDemo from './pages/HookDemo/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/HookDemo/UseRefDemo/UseRefDemo';
import UseRedux from './pages/UseRedux/UseRedux';
import DemoNavigate from './pages/HookRouter/DemoNavigate';
import DemoUseparam from './pages/HookRouter/DemoUseparam';
import DemoUseSearchParams from './pages/HookRouter/DemoUseSearchParams';
import DemoCustom from './pages/HookRouter/DemoCustom';


const root = ReactDOM.createRoot(document.getElementById('root'));





//JSX
root.render(

  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Hometemplates />}>
          <Route index path='Home' element={<Home />}></Route>
          <Route path='Login' element={<Login />}></Route>
          <Route path='Detail' element={<Detail />}></Route>
          <Route path='Register' element={<Register />}></Route>
          <Route path='Form' element={<FormCreateProduct />}></Route>
          <Route path='btgiohang' element={<BaiTapGioHang />}></Route>
          <Route path='lifecycle' element={<Lifecycle />}></Route>
          <Route path='store' element={<Store />}></Route>
          <Route path='reduxdemo' element={<ReduxDemo />} ></Route>
          <Route path='bt-game' element={<BaiTapGameXucXac />}></Route>
          <Route path='hook-use-state' element={<UseStateDemo />} ></Route>
          <Route path='hook-use-effect' element={<UseEffectDemo />}></Route>
          <Route path='hook-use-effect-update' element={<DemoCategory />}></Route>
          <Route path='hook-use-callback' element={<UseCallBackDemo />}></Route>
          <Route path='hook-use-memo' element={<UseMemoDemo />}></Route>
          <Route path='hook-use-ref' element={<UseRefDemo />}></Route>
          <Route path='hook-use-redux' element={<UseRedux />}></Route>
          <Route path='hook-use-navigate' element={<DemoNavigate />}></Route>
          <Route path='detail-params' >
            <Route path=':id' element={<DemoUseparam />}></Route>
          </Route>
          <Route path='hook-use-search-params' element={<DemoUseSearchParams/>}></Route>
          <Route path='demo-custom-hook' element={<DemoCustom/>}></Route>








          <Route path='*' element={<Navigate to="" />}></Route>

          {/* <Route path='*' element={<Page404/>}></Route> */}
        </Route>
      </Routes>

    </BrowserRouter>
  </Provider>
)