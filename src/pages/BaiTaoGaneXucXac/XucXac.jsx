// reredux

import React, { Component } from 'react'

import { connect } from 'react-redux'

export class XucXac extends Component {


    render() {
        return (
            <div className='container-fluid'>
                <div className="row text-center pt-5">
                    <div className="col-4">
                        <button className='btn btn-danger'>
                            <div className="p-5 bg-danger text-white rounded display-4">
                                Tài
                            </div>
                        </button>
                    </div>
                    <div className="col-4">
                        <img src="./img/1.png" alt="..." width={50} height={50} />
                        <img src="./img/1.png" alt="..." width={50} height={50} />
                        <img src="./img/1.png" alt="..." width={50} height={50} />
                    </div>
                    <div className="col-4">
                        <button className='btn btn-danger'>
                            <div className="p-5 bg-danger text-white rounded display-4">
                                Xỉu
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(XucXac)







