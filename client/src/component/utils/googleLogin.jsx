import React from 'react'
import useSignup from '../hooks/useSignup'
import googleSVG from '../../assets/google.svg'
import GoogleLogin from 'react-google-login'
import useLogin from '../hooks/useLogin'
const GoogleLoginx = ({ btnText, type }) => {
    let { googleSignup } = useSignup()
    let { login } = useLogin()
    console.log('process.env.REACT_APP_GOOGLE_CLIENT_ID', process.env.REACT_APP_GOOGLE_CLIENT_ID);
    return (
        < GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={renderProps => (
                <div>
                    <div onClick={renderProps.onClick} className='signup__bottom-btn'>
                        <img style={{ width: '23px' }} src={googleSVG} alt="" />
                        <p>{btnText}</p>
                    </div>
                </div>
            )}
            buttonText="Login"
            onSuccess={type == 'signup' ? googleSignup : login}
            cookiePolicy={'single_host_origin'}

        />

    )
}

export default GoogleLoginx;
