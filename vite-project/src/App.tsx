import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './pages/Header';
import MainComponent from './pages/MainComponent';
import Menu from './components/Menu';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './pages/Cart';
import Order from './pages/Order';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      children: [
        { path: '/', element: <MainComponent /> },
        { path: '/menu', element: <Menu /> },
        { path: '/cart', element: <Cart/>},
        { path: '/order/new', element: <Order/>}
      ],
    },
  ]);
  
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

