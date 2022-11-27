import React, { Component } from 'react'
import axios from 'axios'
import ProductFilter from './ProductFilter'
import ProductList from './ProductList'

export default class Store extends Component {
    constructor(props) {
      super(props)
    
    //   State này dùng để request API, dùng để đổ dữ liệu API vào state Products vùa tạo. 
      this.state = {
         products: [],
         searchTerm : "",
         category: "",
      }
    }

    fetchProducts = async () => {
        let url = "https://dummyjson.com/products";
        if(this.state.searchTerm){
            //Nếu có giá trị this.state.searchTerm thì sẽ nối chuỗi tạo ra đường dẫn mới. BE sẽ trả về dữ liệu.
            url += `/search?q=${this.state.searchTerm}`
        }else if(this.state.category){
            url += `/category/${this.state.category}`
        }
        try {
            const response = await axios.get(url)
            // Call Api thành công
            this.setState({products:response.data.products})
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount(){
        // Thường không gọi aixos trực tiếp ở đây mà viết một hàm riêng sau đó gọi lại tại đây
        this.fetchProducts();
    }

    // Để trả về dữ liệu API sau khi search cần gọi lại hàm fetchProducts. Để làm điều này tạo component componentDidUpdate()
    componentDidUpdate(prevProps, prevState){
        if(prevState.searchTerm !== this.state.searchTerm){
            this.fetchProducts()
        }else if(prevState.category !== this.state.category){
            this.fetchProducts()
        }
    }
    // Truyền từ con lên cha (viết một hàm function)
    handleSearch = (searchTerm) =>{
        // Để sử dụng được giá trị searchTerm cần đưa nó thành state. Ở mục this.state tạo searchTerm : "",
        this.setState({searchTerm, category:""})
    }
    handleChangeCategory = (category) =>{
        this.setState({category, searchTerm:""})
        // Việc thêm searchTerm:"" để giúp chỉ xài một trong 2 chức năng một lần.Tương tư thêm category như trên
    }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center text-primary'>Store</h1>
        <div className="row">
            <div className="col-3">
                <ProductFilter onSearch={this.handleSearch} onChangeCategory={this.handleChangeCategory}/>
            </div>
            <div className="col-9">
                <ProductList products={this.state.products}/>
            </div>
        </div>
      </div>
    )
  }
}
