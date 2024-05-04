import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './pages/Header'
import MainComponent from './pages/MainComponent'
import Menu from './components/Menu';

function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <Header/>,
    children:[
      {path: '/', element:<MainComponent/> },
      {path: '/menu', element: <Menu/>}
    ] 
  }])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
