// rafce
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DemoUseparam = () => {
    const params = useParams();
    useEffect(()=>{
        // call APi
    }, [])
  return (
    <div>
      Detail:{params.id}
    </div>
  )
}

export default DemoUseparam
