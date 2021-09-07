import React from 'react'
import useSignup from '../hooks/useSignup'
import googleSVG from '../../assets/google.svg'
const GoogleLoginx = ({ btnText }) => {
    let { signIn } = useSignup()
    return (
        <div>
            <div onClick={signIn} className='signup__bottom-btn'>
                <img style={{ width: '23px' }} src={googleSVG} alt="" />
                <p>{btnText}</p>
            </div>
        </div>
    )
}

export default GoogleLoginx;
