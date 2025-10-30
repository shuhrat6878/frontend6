import { Link } from "react-router-dom"

  const Card = ({id,name,email}) => {
  return (
    <div className="p-5 border my-3">
       <Link className="hover:text-blue-400" to={`/product/${id}`}>
          <h1 className="text-4xl">{name}</h1>
       </Link>
       <p>{email}</p>
    </div>
  )
}
export default Card


