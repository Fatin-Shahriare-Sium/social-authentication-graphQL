import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React, { useState } from 'react'
import { useGoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router';

let CREATE_USER = gql`

mutation ($name:String,$email:String,$password:String,$img:String){
    createUser(name:$name,email:$email,password:$password,img:$img){
        token,
        text,
        color
    }
}

`

const useSignup = () => {
    let [createUser] = useMutation(CREATE_USER)
    let history = useHistory()
    let [error, setError] = useState()

    async function success(x) {
        let { name, email, imageUrl } = x.profileObj

        let responses = await createUser({ variables: { name, email, password: '', img: imageUrl } })
        console.log(responses);
        if (responses.success) {
            history.pushState('/dasboard')
        }
    }

    const { signIn, loaded } = useGoogleLogin({
        onSuccess: success,
        clientId: '767133034347-bfrqop8lch9i8rth55t8abk4m0p1lk71.apps.googleusercontent.com',
        isSignedIn: false,
        onFailure: (x) => {
            console.log(x);
        }


    })

    async function handleCustomSignup(e) {
        e.preventDefault()
        console.log(e);
        let name = e.target[0].value
        let email = e.target[1].value
        let password = e.target[2].value
        let conPass = e.target[3].value

        if (name && email && password && conPass && conPass == password) {
            let gmailRegex = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g
            let responses = await createUser({ variables: { name, email, password: '', img: '' } })
            console.log(responses);
            if (responses.success) {
                history.pushState('/dasboard')
            }
        } else {
            return setError({
                msg: 'Fill in the gaps',
                color: 'warning'
            })
        }
    }
    // /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g



    return { signIn, handleCustomSignup, error }
}

export default useSignup
