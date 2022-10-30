import React, { Component } from 'react'

export default class DataBingding extends Component {

     product={
        id:1,
        name: 'Product 1',
        price: 1000,
        image: 'http://i.pravatar.cc'
     }
    tong2So = (a, b) => {
        // Dữ liệu trả về phương thức: string, number, boolean, jsx component (<div>....</div>) không return về Object hoặc array
        return a + b;
    }

    renderProduct = () => {
        return <div className='card'>
            <img src={this.product.image} />
            <div className="card-body">
                <h3>{this.product.name}</h3>
                <p>{this.product.price}</p>
                <button className='btn btn-dark'>Add to cart</button>
            </div>
        </div>
    }

    render() {
        let title = 'Anh Vũ'

        return (
            <div className="container">
                <h3>Title:{title}</h3>
                <h3>Tổng: {this.tong2So(5, 10)}</h3>
            <div className="w-25">
                {this.renderProduct()}
            </div>
            </div>
        )
    }
}
