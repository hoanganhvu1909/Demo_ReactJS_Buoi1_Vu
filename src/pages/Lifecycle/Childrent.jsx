import React, { Component, PureComponent } from 'react'


// PureComponents: tự giúp components xử lý phương thức shouldComponentUpdate
// Nó sẽ đi so sánh toàn bộ props và state mới, nếu không có thằng nào thay đổi nó sẽ không render lại components
export default class Childrent extends PureComponent {

    // Được chạy mỗi khi state/props thay đội và chạy trước phương thức render
    // Nẻu return về false => không cho phép chạy phương thức render
    // shouldComponentUpdate: cung cấp 2 tham số lần lượt là giá trị sau khi thay đổi của props và state
    // shouldComponentUpdate(nextProps, nextState) {
    //     // Chỉ cho phép render lại nếu props userId bị thay đổi
    //     if (nextProps.userId !== this.props.userId) {
    //         return true; //cho phép render
    //     }
    //     return false;
    // }
    render() {
        console.log('ChildrentRender run');
        return (
            <div>
                <h1>Childrent - {this.props.userId}</h1>
            </div>
        )
    }
}
