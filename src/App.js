import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import SinglePhoneDetail from "./components/Home/SinglePhoneDetail/SinglePhoneDetail";
import NotFound from "./components/NotFound/NotFound";
import Main from "./layout/Main/Main";
{
  /* react v6.4.1 */
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      {
        path: "phone/:phoneId",
        loader: async ({ params }) => {
          // loaders can be async functions
          return fetch(`http://localhost:5000/phones/${params.phoneId}`);
        },
        element: <SinglePhoneDetail></SinglePhoneDetail>,
      },
    ],
  },
  { path: "*", element: <NotFound></NotFound> },
]);
function App() {
  return (
    <div className="App">
      {/* react v6.4.1 */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
