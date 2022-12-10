// rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'
import KetQuaTroTroi from './KetQuaTroTroi'
import XucXac from './XucXac'
import './BaiTapGameXucXac.css'

class BaiTapGameXucXac extends Component {


    render() {
        return (
            <div className='bg-game'>
                <h3 className='display-4 text-center pt-5'>BÀI TẬP XÚC XẮC</h3>
               <XucXac/>
                <KetQuaTroTroi/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})



export default connect(mapStateToProps)(BaiTapGameXucXac)







