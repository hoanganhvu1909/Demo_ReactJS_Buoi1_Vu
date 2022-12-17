// rface
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const UseRedux = () => {
    // useSelector: tương tự mapStateToProps
    const fontSize = useSelector(state=>state.fontSize);
    const imgSrc = useSelector(state=>state.imgSrc);
    const dispatch = useDispatch();
    console.log(fontSize);
    const changeColor = (color)=>{
        let newImgSrc = `./img/${color}-car.jpg`;
        const action = {
            type: 'CHANGE_COLOR',
            payload:newImgSrc
        }
        dispatch(action);
    }
  return (
    <div>
      <h3>Tăng giảm fontSize</h3>
      <p style={{fontSize:fontSize}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum laboriosam ea amet! Aspernatur vero exercitationem, porro eligendi placeat vel numquam laborum praesentium libero rem illum illo alias impedit, mollitia iure!
      </p>
      <button className='btn btn-success mx-2' onClick={()=>{
        const action = {
            type:'TANG_GIAM_FONSSIZE',
            payload: 1
        }
        dispatch(action);
      }}>+</button>
      <button className='btn btn-success mx-2' onClick={()=>{
        const action = {
            type:'TANG_GIAM_FONSSIZE',
            payload: -1
        }
        dispatch(action);
      }}>-</button>
      <hr />
      <br />
      <h3>Bài tập thay đổi màu xe</h3>
      <div className='row'>
        <div className="col-4">
            <img src={imgSrc} alt="..." className='w-100'/>
        </div>
        <div className="col-8">
            <button className='btn btn-danger mx-2' onClick={()=>{
                changeColor('red')
            }}>Red</button>
            <button className='btn btn-danger mx-2' onClick={()=>{
                changeColor('black')
            }}>Black</button>
            <button className='btn btn-danger mx-2' onClick={()=>{
                changeColor('steel')
            }}>Steal</button>
        </div>
      </div>
    </div>
  )
}

export default UseRedux
