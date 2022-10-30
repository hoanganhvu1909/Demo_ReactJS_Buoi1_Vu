

import React, { Component } from 'react'

export default class BaitTapState extends Component {

    state = {
        fz: 16, //state default
        img: 'https://i.pravatar.cc?u=1'
    }
  render() {
    return (
      <div className='container'>
        <h3>Tăng giảm fontsize</h3>
        <p style={{fontSize:`${this.state.fz}px`}}> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at, dolor ex nulla error laudantium voluptatibus nemo id, quibusdam, natus voluptas placeat ducimus vero voluptate cumque minus numquam quia eligendi!
        </p>
        <button className='btn btn-dark mx-2' onClick={()=>{
            this.setState({
                fz: this.state.fz + 5
            })
        }}>+</button>

        <button className='btn btn-dark mx-2' onClick={()=>{
            this.setState({
                fz: this.state.fz -5
            })
        }}>-</button>

        <hr/>
        <div className="card">
            <img src={this.state.img} alt="..." />
            <div className="card-body">
                <button className='btn btn-success' onClick={()=>{
                    let randomNumber = Math.floor(Math.random()*100);
                    let newImgSrc = 'https:i.pravatar.cc?u=' + randomNumber;
                    this.setState({
                        img:newImgSrc
                    })
                }} >
                    Random
                </button>
            </div>
        </div>
      </div>
    )
  }
}
