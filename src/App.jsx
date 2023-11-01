import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard/>,
    errorElement: <h1>Oh no! has encontrado un error 😔</h1>,
    children: [
      {
        path: '/inventory',
        element: <h1>Inventary Page !!!!</h1>
      },
      {
        path: '/new_post',
        element: <h1>New Post Page !!!!</h1>
      }
    ]
  }])

const App = () => {
  return (
    <>
     <RouterProvider router={route} />
    </>
  )
}

export default App
