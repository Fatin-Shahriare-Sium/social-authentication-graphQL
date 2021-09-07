import React from 'react'
import facebookSvg from '../../assets/facebook.svg'
const FacebookLoginx = ({ btnText }) => {
    return (
        <div>
            <div className='signup__bottom-btn'>
                <img style={{ width: '23px' }} src={facebookSvg} alt="" />
                <p>{btnText}</p>
            </div>
        </div>
    )
}

export default FacebookLoginx
