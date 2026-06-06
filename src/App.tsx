import { ToDoList } from "./components/ToDoList";
import Dummy1 from "./components/Dummy1";
import WaySecond from "./components/WaySecond";
import ThirdComponent from "./components/ThirdComponent";
import { createBrowserRouter, RouterProvider } from "react-router";
import Posts from "./components/Posts";

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
    }, {
      path: 'posts',
      Component: Posts
    }
  ]
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <ToDoList /> */}
    </>
  )
}
export default App;

