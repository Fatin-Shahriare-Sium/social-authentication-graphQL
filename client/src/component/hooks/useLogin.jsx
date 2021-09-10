import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
let HANDLE_LOGIN = gql`

mutation ($email:String,$password:String,$type:String){
    userLogin(email:$email,password:$password,type:$type){
        token
        success
        text
        color
    }
}

`

const useLogin = () => {

    let [login] = useMutation(HANDLE_LOGIN, { fetchPolicy: 'no-cache' })
    let [error, setError] = useState()
    let history = useHistory()
    console.log('rander');
    async function updateError(email) {
        let { data } = await login({ variables: { email, password: '', type: 'oAuth' } })

        if (data.userLogin.success) {
            localStorage.setItem('__tokenx', data.userLogin.token)
            history.push('/dasboard')
            window.location.href = '/dasboard'
        } else {
            console.log(data);
            setError({
                text: data.userLogin.text,
                color: data.userLogin.color
            })
        }
    }
    function success(x) {

        console.log('x', x);
        let { name, email, imageUrl } = x.profileObj
        return updateError(email)

    }

    async function handleLogin(e) {
        setError({})
        e.preventDefault()
        let email = e.target[0].value
        let password = e.target[1].value
        let { data } = await login({ variables: { email, password, type: 'manual' } })



        if (data.userLogin.success) {
            localStorage.setItem('__tokenx', data.userLogin.token)
            history.push('/dasboard')
            window.location.href = '/dasboard'

        } else {
            setError({
                text: data.userLogin.text,
                color: data.userLogin.color
            })
        }

    }


    return { handleLogin, error, login: success }
}

export default useLogin;
