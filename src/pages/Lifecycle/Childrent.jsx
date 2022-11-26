import React, { Component } from 'react'

export default class Childrent extends Component {

    // Được chạy mỗi khi state/props thay đội và chạy trước phương thức render
    // Nẻu return về false => không cho phép chạy phương thức render
    // shouldComponentUpdate: cung cấp 2 tham số lần lượt là giá trị sau khi thay đổi của props và state
    shouldComponentUpdate(nextProps, nextState) {
        // Chỉ cho phép render lại nếu props userId bị thay đổi
        if (nextProps.userId !== this.props.userId) {
            return true; //cho phép render
        }
        return false;
    }
    render() {
        console.log('ChildrentRender run');
        return (
            <div>
                <h1>Childrent - {this.props.userId}</h1>
            </div>
        )
    }
}
