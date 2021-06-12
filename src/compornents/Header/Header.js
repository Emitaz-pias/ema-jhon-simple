import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logo.png";
const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  return (
    <div className="header">
      <img src={logo} alt="a logo pic"></img>
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/">welcome :{loggedInUser.displayName}</Link>
        <button onClick={()=>setLoggedInUser({})}>{loggedInUser.email? "Sign out":"sign in"}</button>
      </nav>
    
    </div>
  );
};

export default Header;
