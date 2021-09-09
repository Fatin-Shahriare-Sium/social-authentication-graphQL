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

    let [login, { loading, data }] = useMutation(HANDLE_LOGIN, { fetchPolicy: 'no-cache' })
    let [error, setError] = useState()
    let history = useHistory()

    function success(x) {
        setError({ text: '', color: '' })
        console.log('x', x);
        let { name, email, imageUrl } = x.profileObj

        let responses = login({ variables: { email, password: '', type: 'oAuth' } })

        // if (data.userLogin.success) {

        //     history.push('/dasboard')
        // } else {

        //     return setError({
        //         text: data.userLogin.text,
        //         color: data.userLogin.color
        //     })
        // }
    }

    async function handleLogin(e) {
        e.preventDefault()
        let email = e.target[0].value
        let password = e.target[1].value
        let { data } = await login({ variables: { email, password, type: 'manual' } })

        console.log(data);

        if (data.userLogin.success) {
            history.push('/dasboard')
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

    useEffect(() => {

        if (data) {
            if (data.userLogin.success) {
                history.push('/dasboard')
            } else {
                setError({
                    text: data.userLogin.text,
                    color: data.userLogin.color
                })
            }
        }
    }, [data])

    return { handleLogin, error, login: success }
}

export default useLogin;
