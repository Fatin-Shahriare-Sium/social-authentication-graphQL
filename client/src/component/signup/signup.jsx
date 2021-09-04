import React from 'react'
import './signup.css'
import googleSVG from '../../assets/google.svg'
import GoogleLogin, { useGoogleLogin } from 'react-google-login'
import useSignup from '../hooks/useSignup'
const Signup = () => {

    let { signIn } = useSignup()
    return (
        <div className='signup'>


            <div className="signup__wrapper">

                <div className="signup__form">

                    <div className="singup__form-wrapper">
                        <p style={{ fontSize: '2rem', fontWeight: '700', textDecoration: 'underline' }}>Create Account</p>
                        <form style={{ marginTop: '7%' }}>
                            <div className="single-input-form">
                                <p>Name</p>
                                <div className='single-input-form__input'>
                                    <input type="text" />
                                </div>
                            </div>
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
                            <div className="single-input-form">
                                <p>Confrim Password</p>
                                <div className='single-input-form__input'>
                                    <input type="password" />
                                </div>
                            </div>
                            <div className='signup__btn'>
                                <button>Login</button>
                            </div>
                        </form>
                        <div className='signup__form-bottom'>
                            <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>or</p>

                            <div onClick={signIn} className='signup__bottom-btn'>
                                <img style={{ width: '23px' }} src={googleSVG} alt="" />
                                <p>Signup with Google</p>
                            </div>


                            <div className='signup__bottom-btn'>
                                <img style={{ width: '23px' }} src={googleSVG} alt="" />
                                <p>Signup with Facebook</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="signup__img">

                </div>
            </div>

        </div>
    )
}

export default Signup
