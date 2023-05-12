import React from 'react'
const Hero = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='border hero-skincare'>
          Skincare
        </div>
        <div className='col hero-hair border ms-5'>
            <h4>Hair Care</h4>
        </div>
        <div className='col border ms-5 hero-makeup'>
            <h4>Makeup</h4>
        </div>
        <div className='col border ms-5 hero-personal'>
        <div className='justify-content-center'>
          <button className='btn'>Makeup</button>
        </div>
        </div>
      </div>
    </div>

  )
}

export default Hero