import React from 'react'
import { useParams } from 'react-router-dom'

 export const ProductDeti = () => {
    const {slug} = useParams()
    const [user, sertUser] = React.useState([])
        React.useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/users/${slug}`)
            .then((res) => res.json())
            .then((data) => {
                sertUser(data)
            })
        },[])
    
  return (
    <div className='container'>
        <h2 className='text-4xl'>{user.name}</h2>
        <h2 className='text-4xl'>{user.email}</h2>
        <h2 className='text-4xl'>{user.username}</h2>
    </div>
  )
}

