import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react'
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

    console.log(loaded);



    return { signIn }
}

export default useSignup
