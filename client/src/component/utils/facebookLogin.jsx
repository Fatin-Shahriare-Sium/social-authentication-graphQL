import React from 'react'
import facebookSvg from '../../assets/facebook.svg'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
const FacebookLoginx = ({ btnText }) => {
    const responseFacebook = (response) => {
        console.log(response);
    }
    return (
        <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
            callback={responseFacebook}
            render={renderProps => {
                return (
                    <div onClick={renderProps.onClick}>
                        <div className='signup__bottom-btn'>
                            <img style={{ width: '23px' }} src={facebookSvg} alt="" />
                            <p>{btnText}</p>
                        </div>
                    </div>
                )
            }}
        />

    )
}

export default FacebookLoginx
