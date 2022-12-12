// rafce

import React,{useState} from 'react'

const UseStateDemo = () => {

    const [number,setNumber] = useState(9);
    // phần tử thứ nhất state là number. Phần tử thứ 2 là setNumber là giá trị set lại giá trị thứ nhất và nó render lại giao diện
    

    // this.state = {like:1}
    const [state,setState] = useState({
        like:1,
        number: 1
    })

    const[fontSize, setFontSize] = useState(16);
    console.log(state);
  return (
    <div className='container'>
      <h3>Demo use state</h3>
      <h3>Number: {number}</h3>
      <button className='btn btn-success mx-2' onClick={()=>{
        setNumber(number + 1)
      }}>+</button>
      <button className='btn btn-success mx-2' onClick={()=>{
        setNumber(number - 1)
      }}>-</button>
      <hr />

      <h3>Like:{state.like}</h3>
      <button className='btn btn-danger' onClick={()=>{
        setState({
            ...state,
            like:state.like +1
        })
      }}>
        <i className='fa fa-heart'></i>
      </button>
      <hr />

      <h3>Tăng giảm fontSize</h3>
      <p style={{fontSize:fontSize}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, perferendis.
      </p>
      <button className='btn btn-warning mx-2' onClick={()=>{
        setFontSize(fontSize + 1)
      }}>+</button>
      <button className='btn btn-warning mx-2' onClick={()=>{
        setFontSize(fontSize - 1)
      }}>-</button>
    </div>
  )
}

export default UseStateDemo

