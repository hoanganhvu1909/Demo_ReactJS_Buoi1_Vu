// rafce
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const UseRefDemo = () => {
    const [number, setNumber] = useState(1);
    const commentRef = useRef('');
    const inputRef = useRef(null);
    // Dùng UseRef để thay thế dòng code dưới
    // const [comment, setComment] = useState('');

    console.log('render');
    const handleChange = (e) => {
        // setComment(e.target.value)
        commentRef.current = e.target.value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(commentRef.current);

        // document.getElementById('idComment').style.background
        inputRef.current.style.background='green'
    }
    return (
        <div className='container'>
            <button className='btn btn-info' onClick={()=>{
                setNumber(number + 1)
            }}>+</button>
            <div className="card">
                <div className="card-header">
                    <div className="comment pt-2" style={{ background: '#EEE' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint necessitatibus laborum commodi, harum temporibus in esse non sapiente nulla exercitationem sequi! Perspiciatis nostrum dolore commodi sit laborum voluptatum animi ducimus.
                    </div>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <input ref={inputRef} className='form-control' name='comment' onChange={handleChange} />
                        <button className='btn btn-success mt-2' type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UseRefDemo


// Công dụng của useRef thay thế useState lưu dữ liệu mỗi lần thay đổi nhưng không render lại giao diện.
// Ngoài ra có tác dụng dùng để DOM (tuy nhiên ít dùng). Nó có thể DOM tới một component.






