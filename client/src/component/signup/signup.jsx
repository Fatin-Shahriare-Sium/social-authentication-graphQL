import React from 'react'
import './signup.css'
import useSignup from '../hooks/useSignup'
import createAccountSVG from '../../assets/create-account.svg'
import Alert from '../alert/alert'

// import FacebookLogin from 'react-facebook-login';
import GoogleLoginx from '../utils/googleLogin'
import FacebookLoginx from '../utils/facebookLogin'
const Signup = () => {
    const responseFacebook = (response) => {
        console.log(response);
    }
    let { signIn, handleCustomSignup, error } = useSignup()
    return (
        <div className='signup'>

            <div className="signup__wrapper">

                <div className="signup__form">

                    <div className="singup__form-wrapper">

                        <p style={{ fontSize: '2rem', fontWeight: '700', textDecoration: 'underline' }}>Create Account</p>
                        {error && <Alert text={error.msg} color={error.color} />}
                        <form onSubmit={(event) => handleCustomSignup(event)} style={{ marginTop: '7%' }}>
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
                                <button type="submit">Login</button>
                            </div>
                        </form>
                        <div className='signup__form-bottom'>
                            <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>or</p>
                            <GoogleLoginx btnText={'Signup with Google'} />
                            <FacebookLoginx btnText='Signup with Facebook' />


                            {/* <GitHubLogin clientId="47fa771c91e41cbf6c7c"
                                onSuccess={(res) => { console.log(res) }}
                                redirectUri='http://localhost:3000/login/oauth2/code/github'
                                scopes={'user:email,repo'}
                                onFailure={(x) => { console.log('x', x) }} />
                            <FacebookLogin
                                appId="1167881493621700"
                                autoLoad={true}
                                fields="name,email,picture"
                                callback={responseFacebook} />, */}

                        </div>
                    </div>
                    {/* */}

                </div>
                <div className="signup__img">
                    <div className='signup__img-wrapper'>
                        <img src={createAccountSVG} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup
