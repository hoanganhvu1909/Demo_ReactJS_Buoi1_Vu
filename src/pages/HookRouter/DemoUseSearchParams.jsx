// rafce
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import axios from 'axios';

const DemoUseSearchParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [arrProduct, setArrProduct] = useState([]); //state chứa kết quả
    let keyword = searchParams.get('k'); // khi đường dẫn url không có tham số keyword => null 
    const frm = useFormik({
        initialValues: {
            keyword: ''
        },
        onSubmit: (values) => {
            console.log(values);
            // Khi người dùng gõ từ khoá và submit => đưa từ khoá lên url
            setSearchParams({
                k: values.keyword
            })
        }
    });

    const getProductKeyWord = async()=>{
        if(keyword){ //Nêu keyword khác null => call api 
            const result = await axios({
                url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
                method: 'GET'
            });
            setArrProduct(result.data.content);
            console.log(result.data.content);
        }
    }

    useEffect(() => {
        // call Api
        getProductKeyWord();
    }, [keyword])


    return (
        <div className='container'>
            <h3>Search</h3>
            <form className="form-group" onSubmit={frm.handleSubmit}>
                <p>Nhập vào tên sản phẩm</p>
                <input className='form-control' name='keyword' onChange={frm.handleChange} />
                <button className='btn btn-success m-2'>Search</button>
            </form>
            <h3>Kết quả tìm kiếm ({arrProduct.length})</h3>
            <div className="row">
                {arrProduct.map((item,index)=>{
                    return <div className="col-3" key={index}>
                    <div className="card">
                        <img src={item.image} alt="..." />
                    </div>
                    <div className="card-body">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <NavLink to={`/detail-params/${item.id}`} className="btn btn-danger">View Detail</NavLink>
                    </div>
                    </div>
                })}
            
            </div>
        </div>
    )
}

export default DemoUseSearchParams
