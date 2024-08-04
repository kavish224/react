import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/kavish224')
    //     .then((res) => res.json())
    //     .then((res) => setData(res))
    // },[])
    const data = useLoaderData()
    return (
        <div className='text-center  bg-orange-700 p-5 text-2xl '>Github profile: {data.login} <br />Github Followers: {data.followers}
            <img src={data.avatar_url} alt="git profile" width={200} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/kavish224");
    return response.json()
}