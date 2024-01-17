import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  //calling onAuthStateChanged api from firebase i dont want to call this api again and again so i use useEffect.
  // i want to add this only ones when component renders.

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
