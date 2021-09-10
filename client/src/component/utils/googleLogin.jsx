import React from 'react'
import useSignup from '../hooks/useSignup'
import googleSVG from '../../assets/google.svg'
import GoogleLogin from 'react-google-login'
import useLogin from '../hooks/useLogin'
const GoogleLoginx = ({ btnText, type }) => {
    let { googleSignup } = useSignup()
    let { login } = useLogin()
    return (
        < GoogleLogin
            clientId="767133034347-bfrqop8lch9i8rth55t8abk4m0p1lk71.apps.googleusercontent.com"
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
