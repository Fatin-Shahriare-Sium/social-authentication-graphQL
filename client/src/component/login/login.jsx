import React from 'react'
import FacebookLoginx from '../utils/facebookLogin';
import GoogleLoginx from '../utils/googleLogin';
import './login.css'
import loginSvg from '../../assets/login.svg'
import useLogin from '../hooks/useLogin';
const Login = () => {
    let { handleLogin, error } = useLogin()
    return (
        <div className='login'>
            <div className="login__wrapper">
                <div className="login__form">
                    <div className="login__form-wrapper">
                        <p style={{ fontSize: '2rem', fontWeight: '700', textDecoration: 'underline' }}>Login</p>
                        <form onSubmit={(event) => handleLogin(event)}>
                            <div className="single-input-form">
                                <p>Email Address</p>
                                <div className='single-input-form__input'>
                                    <input type="email" />
                                </div>
                            </div>
                            <div className="single-input-form">
                                <p>Password</p>
                                <div className='single-input-form__input'>
                                    <input type="password" />
                                </div>
                            </div>
                            <div className="login__btn">
                                <button type='submit'>Login</button>
                            </div>
                        </form>
                        <div style={{ marginTop: "3%" }} className='login__form-bottom'>
                            <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>or</p>
                            <GoogleLoginx btnText='Login with Google' />
                            <FacebookLoginx btnText='Login with Facebook' />
                        </div>
                    </div>
                </div>
                <div className="login__img">
                    <div className="login__img-wrapper">
                        <img src={loginSvg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
