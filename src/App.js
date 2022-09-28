import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home/Home";
import SinglePhoneDetail from "./components/Home/SinglePhoneDetail/SinglePhoneDetail";
import NotFound from "./components/NotFound/NotFound";
{
  /* react v6.4.1 */
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>

      <Route
        path="/phone/:phoneId"
        loader={async ({ params }) => {
          // loaders can be async functions
          const res = await fetch(
            `http://localhost:5000/phones/${params.phoneId}`,
            {
              signal: params.signal,
            }
          );
          const data = await res.json();
          return data;
        }}
        element={<SinglePhoneDetail />}
      ></Route>

      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* react v6.4.1 */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
