import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "nitesh",
    city: "jaipur",
    no: "1234567890",
  },
});
export default UserContext;
