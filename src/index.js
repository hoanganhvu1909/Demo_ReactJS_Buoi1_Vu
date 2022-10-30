import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Product from './components/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX
root.render(
 
  <div>
    <Header></Header>
    <div className='w-25 mt-2'>
      <Product></Product>
    </div>
  </div>

  
)