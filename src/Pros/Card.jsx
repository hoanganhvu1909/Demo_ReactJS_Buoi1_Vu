// rccc
import React, { Component } from 'react'

export default class Card extends Component {


    render() {
        // this.pros: thuộc tính có sẵn của react class components dùng để nhận giá trị từ components cha truyền vào
        // pros sẽ không được gán lại giá trị mới
        
        // Cách 2:
        // const { name, age } = this.props;
        return (
            <div className='card'>
                <img src="https://i.pravatar.cc?u=1" alt="..." />
                <div className='card-body'>
                    {/* Cách 1 */}
                    <h3>{this.props.name}</h3>
                    <p>{this.props.age}</p>

                    {/* Cách 2:
            <h3>{name}</h3>
            <p>{age}</p>
            */}
                </div>
            </div>
        )
    }
}
