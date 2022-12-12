// rafce
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const UseEffectDemo = () => {

    const [number, setNumber] = useState(1);
    const [arrProduct, setArrProduct] = useState([]);
    useEffect(() => {
        // Trường hợp 1: Không có tham số dependency, luôn thực thi mỗi lần component render => nên ít được dùng 
        console.log('thuc thi sau khi render');
    })

    const getAllProduct = async () => {
        const result = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method: 'GET'
        });
        // Sau khi lấy dữ liệu từ API đưa vào state của arrProduct
        setArrProduct(result.data.content)
    }
    useEffect(() => {
        // Trường hợp 2: Có tham số thứ 2 là dependency [], chỉ thực thi một lần duy nhất sau lần render đầu tiên của component (Giống componentDidMount) => thường được dùng để call API...
        console.log('didMount');
        getAllProduct();
    }, [])

    


    return (
        <div className='container'>
            <h3>Number: {number}</h3>
            <button className='btn btn-success' onClick={() => {
                setNumber(number + 1);
            }}>+</button>
            <hr />
            <h3>Product List</h3>
            <div className="row">
                {arrProduct.map((prod, index) => {
                    return <div className='col-4 mt-2' key={index}>
                        <div className='card'>
                            <img src={prod.image} alt="..." />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default UseEffectDemo
