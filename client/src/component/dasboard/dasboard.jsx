import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import React, { useEffect } from 'react'
import user from '../../assets/user.svg'
let FETCH_USER = gql`

query{
    userDetails{
        id
        name
        email
        img
    }
}

`

const Dasboard = () => {
    let { data } = useQuery(FETCH_USER)
    useEffect(() => {
        console.log(data);
    }, [data])
    return (
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '2rem', height: "50vh", justifyContent: 'center', alignItems: 'center' }}>
            <p>Welcome to the dasboard</p>
            {data &&
                <>
                    <p>{data.userDetails.email}</p>
                    <p>{data.userDetails.name}</p>
                    <img src={data.userDetails.img ? data.userDetails.img : user} alt="" />
                </>
            }
        </div>
    )
}

export default Dasboard
