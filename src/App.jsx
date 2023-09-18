import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";

const Root = () => {
  return (
    <Routes>
      
    </Routes>
  )
}

const router = createBrowserRouter([
  {path:"*",Component:Root}
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App;
