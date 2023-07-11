import React from "react"
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunction from "./Profile";


class About extends React.Component{
  constructor(props){
    super(props);
  console.log("this is parent constructor")


  }
  componentDidMount(){
    console.log("this is parent compontdidmount")
    

    
  }
  render(){
    console.log("parent is rendered")

    return (
          <>
         
           <h1>this is about routing page</h1>

             <Profile name={"first"}/>
             {/* <Profile name={"second"}/> */}
            
           </>
         );
  }
}
export default About;
