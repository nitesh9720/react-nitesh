import { useState } from "react";

const Title = () => {
  return (
    <>
      <a href="/">
        <img
          className="logo"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDy9Em-5f6o7TA3yOo2eqbm_5Ol14b-3wRRJwf9FM&s"
        />
      </a>
    </>
  );
};
const Header = () => {
  const [loggedInUser, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
