import React, { Component } from 'react'
import { connect } from 'react-redux'
class DemoTangGianFontSize extends Component {
    render() {
        console.log(this.props);
        return (
            <div >
                <h3>Ví dụ: Tăng giảm fontSize</h3>
                <p style={{ fontSize: this.props.fSize }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, magni ad! Temporibus obcaecati fugiat repudiandae sapiente. Neque placeat praesentium amet.
                </p>
                <button className='btn btn-success mx-2' onClick={() => {
                    // format data gửi lên redux (action)
                    const action = {
                        type: 'TANG_GIAM_FONSSIZE', //Nhãn để biết thay đổi state nào
                        payload: 1
                    };
                    // Dùng props.dispatch để đưa action lên redux
                    this.props.dispatch(action)
                }}>+</button>
                <button className='btn btn-success mx-2'
                    onClick={() => {
                        // format data gửi lên redux (action)
                        const action = {
                            type: 'TANG_GIAM_FONSSIZE', //Nhãn để biết thay đổi state nào
                            payload: -1
                        };
                        // Dùng props.dispatch để đưa action lên redux
                        this.props.dispatch(action)
                    }}>_</button>
            </div>
        )
    }
}



// return{} tương đương ()

const mapStateToProps = (state) => ({
    fSize: state.fontSize
})
// const mapStateToProps = (state) => {
//     return {
//         fSize: state.fontSize
//     }
// } 



// Lưu ý 2 dòng code này cần phải có 
const ComponentRedux = connect(mapStateToProps)(DemoTangGianFontSize);
export default ComponentRedux;
// giải thích
// function main(){
//     return function(){
//         console.log(123);
//     }
// }
// main()()