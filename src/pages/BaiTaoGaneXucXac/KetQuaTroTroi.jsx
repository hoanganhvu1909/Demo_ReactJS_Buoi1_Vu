// reredux

import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroTroi extends Component {


    render() {
        return (
            <div className='text-center'>
                <div className="display-4">
                    <span>Bạn đặt cược:</span>
                    <span className='text-danger'>Tài</span>
                </div>
                <div className="display-4">
                    <span>Tổng số bàn thắng:</span>
                    <span className='text-success'>10</span>
                </div>
                <div className="display-4">
                    <span>Tổng số bàn cược:</span>
                    <span className='text-warning'>10</span>
                </div>
                <div className="display-4">
                    <button className='btn btn-success p-3'>Play Game</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})



export default connect(mapStateToProps)(KetQuaTroTroi)
