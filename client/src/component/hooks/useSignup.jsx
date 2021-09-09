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
        success
    }
}

`

const useSignup = () => {
    let [createUser] = useMutation(CREATE_USER)
    let history = useHistory()
    let [error, setError] = useState()

    async function success(x) {
        console.log('x', x);
        let { name, email, imageUrl } = x.profileObj

        let responses = await createUser({ variables: { name, email, password: '', img: imageUrl } })
        console.log(responses);
        if (responses.success) {
            history.pushState('/dasboard')
        }
    }


    async function handleCustomSignup(e) {
        e.preventDefault()
        console.log(e.target[2].value);
        let name = e.target[0].value
        let email = e.target[1].value
        let password = e.target[2].value
        let conPass = e.target[3].value

        if (conPass !== password) {
            return setError({
                msg: 'Password is not matching',
                color: "warning"
            })
        }

        if (name && email && password && conPass && conPass == password) {
            let gmailRegex = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g
            let isGmail = gmailRegex.test(email)

            if (!isGmail) {
                return setError({
                    msg: 'Please,provide gmail address',
                    color: "warning"
                })
            }
            setError({
                msg: 'loading ...',
                color: 'info'
            })
            let responses = await createUser({ variables: { name, email, password, img: '' } })
            console.log(responses.data);
            if (responses.data.createUser.success) {

                localStorage.setItem('__tokenx', responses.data.createUser.token)
                history.push('/dasboard')

            }
            return setError({
                msg: responses.data.createUser.text,
                color: responses.data.createUser.color
            })
        } else {
            return setError({
                msg: 'Fill in the gaps',
                color: 'warning'
            })
        }
    }
    // /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g



    return { signup: success, handleCustomSignup, error }
}

export default useSignup
