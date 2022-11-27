import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const { thumbnail, title, price } = this.props.product
        return (
            <div>
                <img className='card-img' src={thumbnail} alt={title} height={250}/>
                <div className="card-body">
                    <h3 className='card-title'>{title}</h3>
                    <p className='card-text'>{price}</p>
                    <button className='btn btn-success'>Detail</button>
                </div>
            </div>
        )
    }
}
