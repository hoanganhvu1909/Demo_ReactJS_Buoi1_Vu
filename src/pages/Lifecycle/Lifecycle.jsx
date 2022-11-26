import React, { Component } from 'react';
// Muốn xài axios phải import
import axios from "axios";
import Childrent from './Childrent';


export default class Lifecycle extends Component {
    // rconst tạo nhanh constructor
    constructor(props) {
        super(props)

        this.state = {
            // Tạo state posts để chứa data trả về từ API
            posts: [],

            // Tạo state userId để chứa Id của user muốn lọc ra danh sách posts
            userId: null,

        }
        console.log('constructor run');
    }

    fetchPosts = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`, {
                params: {
                    userId: this.state.userId
                }
            })
            .then((respone) => {
                // Call Api thành công
                console.log(respone.data);
                // Goi setState để gán data cho posts
                this.setState({ posts: respone.data })
            })
            .catch((erros) => {
                console.log(erros);
            });
    }

    handleMouseMove = () => {
    console.log("Mouse Moving");
    }
    // Chạy một lần duy nhất sau lần render đầu tiên
    // Thường dùng để xử lý call API, setState, setTimeout...
    componentDidMount() {
        console.log(' componentDidMount run');
        this.fetchPosts();

        document.addEventListener('mousemove', this.handleMouseMove)
    }

    // Chạy sau mỗi lần render (từ lần render thứ 2 trở đi)
    // Thường dùng: sử dụng giá trị state, props mới để thực hiện một hành động nào đó như:
    // - Sử dụng giá trị props mới để setState 
    // - Sử dụng giá trị state/props mới để call API
    // *** Nếu setState trong componentDidUpdate bắt buộc phải có điều kiện (Lưu ý quan trọng: Nếu không có điều kiện sẽ bị lặp vô tận)
    // componentDidUpdate cung cấp hai tham số lần lượt là giá trị trước khi thay đổi của props và state 
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate run", this.state);
        // Nếu state userId bị thay đổi => gọi lại hàm fetchPosts
        // Nếu viết fetchPost() hàm sẽ bị lặp vô tận
        // ??làm sao để kiểm tra chỉ duy nhất state userId bị thay đổi 
        if (prevState.userId !== this.state.userId) {
            this.fetchPosts()
        }

    }

    // Chạy một lần duy nhất trước khi components bị huỷ bỏ
    componentWillUnmount() {
        console.log('componentWillUnmount run');
        document.removeEventListener("mousemove", this.handleMouseMove)
    }

    // handleSelect(postsId){} nếu viết theo cách này thì không dùng được con trỏ this nên viết theo cách dưới
    handleSelect = (postsId) => {
        // userId: id của user muốn lấy thông tin chi tiết
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${postsId}`)
            .then((respone) => {
                console.log(respone.data);
            })
            .catch((erros) => {
                console.log(erros);
            })
    }

    changeUser = (evt) => {
        const { value } = evt.target;
        // Gọi setState để lưu value này vào state userId
        this.setState({ userId: value })
    }
    render() {
        console.log('render run', this.state);

        return (
            <div>
                <Childrent userId={this.state.userId}/>
                {/* Select user */}
                <select name="" id="" onChange={this.changeUser}>
                    <option value="">Select user</option>
                    <option value="1">User 1</option>
                    <option value="2">User 2</option>
                    <option value="3">User 3</option>
                    <option value="4">User 4</option>
                    <option value="5">User 5</option>
                    <option value="6">User 6</option>
                    <option value="7">User 7</option>
                    <option value="8">User 8</option>
                    <option value="9">User 9</option>
                    <option value="10">User 10</option>
                </select>

                {/* Danh sách bài posts */}
                <ul>
                    {this.state.posts.map((posts) => {
                        return (
                            <li key={posts.id}>
                                <span className='me-2'>{posts.title}</span>
                                <button onClick={() => this.handleSelect(posts.id)}>Chi tiết</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}
