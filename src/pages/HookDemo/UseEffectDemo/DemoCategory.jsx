// rafce

import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'

const DemoCategory = () => {
    const [arrCategory, setArrCategory] = useState([]);
    const [arrProduct, setArrProduct] = useState([]);
    const [categoryId, setCategoryId] = useState(null);
    const getAllCategoryApi = async () => {
        const result = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product/getAllCategory',
            method: 'GET'
        });
        // Sau khi lấy dữ liệu api về thi state cho arrCategory
        setArrCategory(result.data.content);
    }

    useEffect(() => {
        // Gọi APi load danh mục
        getAllCategoryApi();
        return()=>{
            console.log('componentWillunmount');
            /*
            callback mà các useEffect return sẽ thực thi khi:
            + coponent mất khỏi react dom (ví dụ chuyển hướng trang hoặc if else...)

             */
        }
    }, [])

    const getProductByCategoryId = async (id) => {
        const result = await axios({
            url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${id}`,
            method: 'GET'
        });
        // Sau khi lấy dữ liệu api về thi state cho arrCategory
        setArrProduct(result.data.content);
    }
    useEffect(() => {
        if (categoryId) {
            // Nếu categoryId khác null => chạy
            // call api
            getProductByCategoryId(categoryId);
            // Tương tự componentDidUpdate có if bên reactClass (khi tham số dependency thay đổi thì hàm này mới chạy)
            // Sử dụng khi cần thực thi 1 logic nào đó bởi 1 state thay đổi state (tham số dependency)
        }
        return()=>{
            console.log('componentWillunmount');
            /*
            callback mà các useEffect return sẽ thực thi khi dependency thay đổi giá trị           
             */
        }
    }, [categoryId])
    console.log('arrCategory', arrCategory);
    return (
        <div className='mt-5'>
            <div className="d-flex">
                <div className="w-25">
                    <nav className='d-flex flex-column'>
                        <h3>Product Category</h3>
                        {arrCategory.map((item, index) => {
                            return <a className='mt-2 nav-link' href="#" key={index} onClick={() => {
                                setCategoryId(item.id)
                            }}>{item.category}</a>
                        })}

                    </nav>
                </div>
                <div className="w-75">
                    <h3>Product List</h3>
                    <div className="row">
                        {arrProduct.map((prod, index) => {
                            return <div className="col-4" key={index}>
                                <div className="card">
                                    <img src={prod.image} alt="" />
                                    <div className="card-body">
                                        <h3>{prod.name}</h3>
                                        <p>{prod.price}$</p>
                                        <button className='btn btn-danger'>
                                            <i className='fa fa-cart-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoCategory



// Tổng kết lại 4 cách xài của useEffect
/** 
 1: Không có dependency => Luôn luôn chạy sau khi render
 2: Có dependency nhưng [] (mảng rỗng) => chạy một lần duy nhất sau khi render
 2: Có dependency và có giá trị => sẽ chạy mỗi khi giá trị thay đổi
 3: Return => dùng để clear các giá trị mỗi khi Unmount
*/

// Quy tắc sử dụng hook
/**
    Gọi bên ngoài cùng KHÔNG ĐẶT TRONG IF ELSE HAY SWITCH CASE, FOR... 
    Chỉ dùng hook với react function component
    (Đọc trong slide)
 */



