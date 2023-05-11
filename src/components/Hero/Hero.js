import React from 'react'

const Hero = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col border'><h4>Skincare</h4></div>
        <div className='col border'>
          <div className='border'>
            <h4>Hair Care</h4>
          </div>
          <div className='border'>
            <h4>Makeup</h4>
          </div>
        </div>
        <div className='border'>
          <h4>Personal Care</h4>
        </div>
      </div>
    </div>

  )
}

export default Hero