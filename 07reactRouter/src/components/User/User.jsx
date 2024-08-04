import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <h1 className='bg-orange-700 text-white text-center p-5 text-3xl'>User: {userid}</h1>
    )
}

export default User
