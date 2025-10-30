import React from "react"
import Card from "../../components/card.jsx"

export const Home = () => {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => {
            setData(users)
        })
    },[])

    return (

        <div className="container">
            {data.map((item)=>(
                <Card id={item.id} name={item.name} email={item.email} key={item.id}/>
            ))}
        </div>
    )
}