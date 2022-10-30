//rcc

import React, { Component } from 'react'

export default class HandleEven extends Component {


    handleClick = (name,e) =>{
        alert('say Hi'+ name)
    }
    
    sayHello = (name) =>{
        alert(name)
    }

    render() {
        return (
            <div className='container'>
                <button className='btn btn-dark' onClick={this.handleClick.bind(this,'Anh Vũ')}>
                    button
                </button>
                <input id='text' className='w-25 form-control' onKeyUp={(e)=> { //onInput hoặc onChange đều được nó tương tự nhau
                    let tagInput = e.target; //document.getElementById('text);
                    console.log(tagInput.value);
                }} />
                <button className='btn btn-warning' onClick={(e)=>{
                    // Định nghĩa sự kiện = arrow function => Thực thi hàm gì thì gọi hàm đó bên trong
                    this.sayHello('Hoàng Anh Vũ')
                }}>Hi Vũ</button>

                <div className="h-25 bg-dark p-5" onMouseEnter={(e)=>{
                    e.target.innerHTML = 'onMouseEnter';
                    e.target.className = 'h-25 bg-primary content p-5';
                }} onMouseLeave={(e)=>{
                    e.target.innerHTML = 'onMouseLeave';
                    e.target.className = 'h-25 bg-danger content p-5';
                }}>

                vu
                </div>
            </div>
        )
    }
}
