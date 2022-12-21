import React, { Component } from 'react'
import useFetch from '../hooks/useFetch'
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Home =() =>{
  const {data,error,loading} = useFetch('https://shop.cyberlearn.vn/api/Product');
console.log('data',data);
    return (
      <div className='container'>
        <div className='loading' style={{display:loading?'flex':'none'}}>
          <span className='display-4'>Loading...</span>
        </div>
        <h3>Product List</h3>
        <div className="row">
          {data?.content?.map((item,index)=>{
            return <div className='col-4' key={index}>
              <div className="card">
                <img src={item.image} alt="..." />
                <div className="card-body">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <NavLink to={`/detai-params${item.id}`} className="btn btn-danger">View detail</NavLink>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  
}   
export default Home