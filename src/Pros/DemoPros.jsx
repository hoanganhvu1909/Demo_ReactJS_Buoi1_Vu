// rcc
import React, { Component } from 'react'
import Car from './Car';
import Card from './Card'

const arrProduct = [
    { id: 1, name: 'red car', img: './img/red-car.jpg', price: 1000 },
    { id: 1, name: 'black car', img: './img/black-car.jpg', price: 2000 },
    { id: 1, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
    { id: 1, name: 'steel car', img: './img/steel-car.jpg', price: 4000 },
];

export default class DemoPros extends Component {

    renderCar =() => {
        return arrProduct.map((car,index)=>{
            return <div className='col-3 mt-2' key={index}>
            <Car prod={car} tagButton={<button className='btn btn-light'>Add to cart</button>}  />
        </div>
        })
    }

    render() {
        return (
            <div>
                <h3>Demo pros</h3>
                <div className="d-flex justify-content-center">
                    <div className='w-25'>
                        <Card name="Hoang" age="18" />
                    </div>
                    <div className='w-25'>
                        <Card name="Anh" age="20" />
                    </div>
                </div>
                <h3>Car list</h3>
                <div className='row mt-2'>
                    {this.renderCar()}
                </div>

            </div>
        )
    }
}














