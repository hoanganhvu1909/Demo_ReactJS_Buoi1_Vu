// rcc

import React, { Component } from 'react'
const arrProduct = [
    { id: 1, name: 'red car', img: './img/red-car.jpg', price: 1000 },
    { id: 1, name: 'red car', img: './img/black-car.jpg', price: 2000 },
    { id: 1, name: 'red car', img: './img/silver-car.jpg', price: 3000 },
    { id: 1, name: 'red car', img: './img/steel-car.jpg', price: 4000 },
];
export default class RenderList extends Component {

    renderProduct = () => {

        let output = [];
        for (let prod of arrProduct) {
            let tr = <tr>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td><img src={prod.img} alt="..." width={50} height50 /></td>
                <td>{prod.price}</td>
            </tr>;
            output.push(tr)
        }
        return output; // [<tr></tr>, <tr></tr>]
        // cach2: dung ham map. Khi su dung ham map se hien len warning nen can mot key de phan biet giua cac the(co the la id, index...)
        /**
         * let arrTr = arrProduct.map((prod, index) =>{
         * return <tr key={index}>
         * <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td><img src={prod.img} alt="..." width={50} height50/></td>
                <td>{prod.price}</td>
         * </tr>;
            });
            return arrTr;
         */
    }

    renderCarProduct = () => {
        return arrProduct.map((prod, index) => {
            return <div className="col-3" key={index}>
                <div className="card">
                    <img src={prod.img} alt="..." />
                    <div className="card-body">
                        <p>{prod.name}</p>
                        <p>{prod.price}</p>
                        <button className='btn btn-success'>Add to cart</button>
                    </div>
                </div>
            </div>
        });
    }




    render() {
        return (
            <div className='container'>
                <h3>Car list</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>img</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct()}
                        {/* <tr>
                            <td>1</td>
                            <td>red car</td>
                            <td><img src="./img/red-car.jpg" alt="..." width={50} height50 /></td>
                            <td>1000</td>
                        </tr> */}

                    </tbody>
                </table>

                <h3 className='mt-2'>Card Product</h3>
                <div className='row mt-2'>
                    <div className="row">
                        {this.renderCarProduct()}
                        {/* <div className="col-3">
                        <div className="card">
                            <img src="./img/red-car.jpg" alt="..." />
                            <div className="card-body">
                                <p>Product name</p>
                                <p>Product price</p>
                                <button className='btn btn-success'>Add to cart</button>
                            </div>
                        </div>
                    </div> */}
                    </div>

                </div>
            </div>
        )
    }
}
