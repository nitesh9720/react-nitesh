import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/body";
import { Footer } from "./components/Footer";
// const heading1 = React.createElement(
//   "h1",
//   { id: "head1", style: { color: "green" } ,key:"h1"},
//   "this is my first heading"
// );
// const heading2 = React.createElement(
//   "h2",
//   { id: "head2",key:"h2" },
//   "this is my second heading"
// );
// const container = React.createElement("div", { id: "container" }, [
//   heading1,
//   heading2,
// ]);
// const container = (
//   <div id="container">
//     <h1 id="head1">This is my first heading</h1>
//     <h2 id="head2">This is my second heading</h2>
//   </div>
// );






const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
