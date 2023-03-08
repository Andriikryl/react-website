import React from 'react'

const HeroContent = () => {
  return (
    <div className='Content-box'>
        <div className='Hero-info'>
            <h2 className='Hero-sub-title'>Bring power to your steps.</h2>
            <h1 className='Hero-main-title'>Walk the line.</h1>
            <p className='Hero-text'>Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
            <p className='Hero-text'>Now that you have a <span>ready strategy</span> to move forward, </p>
            <div className='Hero-box-price'>
                <p className='Price'>Price : $125 </p>
                <p className='Price-sale'>$169 </p>
            </div>
            <div className='btn-group'>
                <button className='main-btn'>Shpo now</button>
                <button className='sub-btn'>Learn More</button>
            </div>
            <div className='stut-box'>
                <div className='stut-info'>
                    <p className='stut-info-num'>70k</p>
                    <p className='stut-info-text'>CUSTOMERS</p>
                </div>
                <div className='stut-info'>
                    <p className='stut-info-num'>17k</p>
                    <p className='stut-info-text'>REVIEW</p>
                </div>
            </div>
        </div>

        <div className='Hero-img'>
                <img src="/public/img/nike-sho.png" alt="nike-sho" />
        </div>
    </div>
  )
}

export default HeroContent