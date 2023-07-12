import Shimmer from "./components/shimmer";

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import { Footer } from "./components/Footer";
import About from "./components/about";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/ProfileClass";

// const heading1 = React.createElement(
//   "h1",
//   { id: "head1", style: { color: "green" } ,key:"h1"},
//   "this is my first heading"
// );
// const heading2 = React.createElement(
//   "h2",
//   { id: "head2",ke<AppLayout />y:"h2" },
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
const Instamart = lazy(() => import("./components/Instamart"));
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
