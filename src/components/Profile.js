import { useState } from "react";
const Profile = (props) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>this is profile page under the about</h1>
      <h2>{props.name}</h2>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        function button
      </button>
    </>
  );
};
export default Profile;
