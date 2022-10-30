// rcc

import React, { Component } from 'react'
import BaitTapState from './BaitTapState';
import style from './DemoState.module.css'
export default class DemoState extends Component {
    username = 'Vũ';
    // login = false; // false chưa đăng nhập

    state = {
        login: false // this.state là thuộc tính có sẵn của react class component chứa các giá trị làm thay đổi giao diện
    }

    renderLogin = () => {
        if (this.state.login) {
            return <span>
                Hello !{this.username}
            </span>
        }
        return <button className='btn btn-info' onClick={() => {
            this.handleLogin();
        }}>
            login
        </button>
    }

    handleLogin = () => {
        // this.setState là phương thức có sẵn react class component, dùng để thay đổi giá trị state. Sau khi giá trị state được thay đổi => giao diện tự động render
        // Phương thức setState là phương thức bất đồng bộ
        // Xử lý vấn đề bất đồng bộ có thể dung asyn await hoặc thêm một funnction
        this.setState({
            login: true
        }, () => {
            // function xử lý sau khi setState thực thi xong
            console.log(this.state.login);
        });

    }

    render() {
        return (
            <div>
                <nav class="nav justify-content-end text-white bg-dark ">
                    <div class="nav-link text-light" href="#">
                        {/* {this.login ? <span>Hello! {this.username}</span> : <button>Login</button>} */}
                        {this.renderLogin()}
                    </div>

                </nav>
                <p style={{
                    backgroundColor:'purple',
                    color:'white',
                    margin:'10px',
                    padding:'15px'
                }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum possimus in accusamus. Nam vitae, non asperiores laboriosam nemo provident, eos, fugit aliquid quasi doloremque expedita obcaecati? Repudiandae facere quas officia.
                </p>
                <div className={`${style['fz-5xl']} bg-primary`}>
                        abc
                </div>
                <br />
                <hr />
                <h3>Bài Tập State</h3>
                <BaitTapState/>
            </div>

        )
    }
}
