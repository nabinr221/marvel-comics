import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './containers/Home';
import Layout from './components/Layouts/Layout';
import CharacterDetail from './containers/CharacterDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/character/:id',
          element: <CharacterDetail />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
