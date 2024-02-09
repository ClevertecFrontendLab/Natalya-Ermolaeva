import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';
import Root from './routes/Root.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<MainPage />} />
    </Route>
  )
);

const App = () => (
    <RouterProvider router={router}></RouterProvider>
)

export default App;
