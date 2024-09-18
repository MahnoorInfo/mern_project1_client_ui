import { NavLink } from "react-router-dom"
import "../css/custome.css";
  
function Navigation() {
  return (
    <div>
<NavLink to="/" > Home </NavLink> |
<NavLink to="/product/1/new">Product</NavLink> |
<NavLink to="/login">Login</NavLink> |
<NavLink to="/signup">Signup</NavLink> |
<NavLink to="/contactus">Contactus</NavLink>    
    </div>
  )
}

export default Navigation


