import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React, { useState } from 'react'

let HANDLE_LOGIN = gql`

mutation ($email:String,$password:String){
    userLogin(email:$email,password:$password){
        token
        success
        text
        color
    }
}

`

const useLogin = () => {

    let [login] = useMutation(HANDLE_LOGIN)
    let [error, setError] = useState()

    async function handleLogin(e) {
        e.preventDefault()
        let email = e.target[0].value
        let password = e.target[1].value
        let { data } = await login({ variables: { email, password } })

        console.log(data);

        if (data.userLogin.success) {

        } else {
            setError({
                text: data.userLogin.text,
                color: data.userLogin.color
            })
        }
        // setError({
        //     text: '',
        //     color: ""
        // })
    }

    return { handleLogin, error }
}

export default useLogin;
