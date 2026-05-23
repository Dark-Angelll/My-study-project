import { ToDoList } from "./components/ToDoList";
import Dummy1 from "./components/Dummy1";
import { createBrowserRouter, RouterProvider } from "react-router";
import WaySecond from "./components/WaySecond";
import ThirdComponent from "./components/ThirdComponent";

const router = createBrowserRouter([
  {
    path: '/',
    Component: Dummy1,
    children: [{
      path: 'waySecond',
      Component: WaySecond
    },
    {
      path: 'activated',
      Component: ThirdComponent
    }],
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToDoList />
    </>
  )
}
export default App;

