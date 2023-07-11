import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/download.jpeg"
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <>
      <a href="/">
        <img
          className="logo"
          alt="logo"
          src={Logo}
        />
      </a>
    </>
  );
};
const Header = () => {
  const [loggedInUser, setIsLoggedIn] = useState(false);
  const isOnline=useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>

        </ul>
      </div>

      {loggedInUser ? (
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
