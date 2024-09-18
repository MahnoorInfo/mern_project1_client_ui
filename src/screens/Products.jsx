import { useParams } from "react-router-dom";

const Products = () => {

  const { id, name } = useParams();
  return (
    <div>
       <h1>Products</h1>
       <p>This is product screen</p>
       <p> product id : {id} </p>
       <p> product name : {name} </p>
    </div>
  )
}

export default Products
