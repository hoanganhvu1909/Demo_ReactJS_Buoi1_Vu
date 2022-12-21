// rafce
import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const DemoUseparam = () => {

  const [proDetail, setProDetail] = useState({});

  const params = useParams();
  console.log(proDetail);
  const getProductsById = async(id) => {
    // call Api
    const result = await axios({
      url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method:'GET'
    });
    //Sau khi lấy dữ liệu từ api vè set vào state
    setProDetail(result.data.content);
  }

  useEffect(() => {
    // call APi
    getProductsById(params.id)
  }, [params.id])

  return (
    <div className='container'>
      <div className="row mt-3">
        <div className="col-4">
          <img src={proDetail.image} alt="..." className='w-100'/>
        </div>
        <div className="col-8">
          <h3>{proDetail.name}</h3>
          <p>
            {proDetail.description}
          </p>
        </div>
      </div>
      <h3 className='mt-2 text-center'>Related products</h3>
      <div className="row">
        {/*proDetail.relatedProducts?.map() : Ta thêm ? sau relatedProducts vì lần đầu tiên gia diện chưa call Api useState({}) chưa có thuộc tính relatedProducts. Nên khi .map thì sẽ bị báo lỗi map không có. Thêm ? để có thuộc tính relatedProducts thì sẽ thực hiện, không có thì bỏ qua chạy useEffect render lại khi đó đã có thuộc tính thì sẽ thực hiện.   */}
        {proDetail.relatedProducts?.map((item,index)=>{
          return <div className="col-4" key={index}>
          <div className="card">
            <img src={item.image} alt="..." />
          </div>
          <div className="card-body">
            <h3>{item.name}</h3>
            <p>
              {item.price}
            </p>
            <NavLink to={`/detail-params/${item.id}`} className={"btn btn-success"}>View Detail</NavLink>
          </div>
        </div>
        })}
      </div>
    </div>
  )
}

export default DemoUseparam

// Khi dùng thẻ Navlink ta truyền vào tham số id đường dẫn thay đổi nhưng dữ liệu không thay đổi. Nó không render lại như thẻ a lúc trước ta làm. Lý do: Khi ta nhấn Navlink nó render lại component const params = useParams();. Khi render lại component   
// useEffect(() => {
    
//     getProductsById(params.id)
//   }, [])
// useEffect chỉ chạy một lần do có []. Trong trường hợp này để thay đổi ta truyền vào [] giá trị thay đổi [params.id]




