import React, { Component } from 'react'
import BaiTapXemChiTiet from '../../State/BaiTapXemChiTiet/BaiTapXemChiTiet'
import ExerciseCarStore from '../ExerciseCarSore/ExerciseCarStore'
import ChildrentComponents from './ChildrentComponents'

export default class DemoChildrentprops extends Component {
  render() {
    return (
      <div className='container'>
        <ChildrentComponents>
          <BaiTapXemChiTiet/>
          <ExerciseCarStore/>
        </ChildrentComponents>
      
      </div>
    )
  }
}
