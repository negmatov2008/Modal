import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Navigate to={"first"} />,
      },
      {
        path: "first",
        element: <First></First>,
      },
      {
        path: "second",
        element: <Second />,
      },
      {
        path: "third",
        element: <Third />,
      },
      {
        path: "fourth",
        element: <Fourth />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

// import { useEffect, useRef, useState } from "react";
// import Counter from "./Counter";

// function App() {
//   const [count, setCount] = useState(true);
//   const inputRef = useRef();
//   // useEffect(() => {
//   //   inputRef.current.focus();
//   // });

//   const handleClick = () => {
//     inputRef.current.textContent = "Hayir dunyo";
//   };
//   return (
//     <>
//       <div ref={inputRef}>Salom dunyo</div>
//       <button onClick={handleClick}>focus</button>
//     </>
//   );
// }

// export default App;
