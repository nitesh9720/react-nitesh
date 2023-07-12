import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/download.jpeg";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext"

const Title = () => {
  return (
    <>
      <a href="/">
        <img className="h-24 p-2" alt="logo" src={Logo} />
      </a>
    </>
  );
};
const Header = () => {
  const [loggedInUser, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const {user}=useContext(UserContext)
  return (
    <div className="flex justify-between bg-pink-50 shadow-green-300" >
      <Title />
      <div className="">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
    
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      

      {loggedInUser ? (
        <button onClick={() => setIsLoggedIn(false)}><h1>{user.name}</h1> Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
