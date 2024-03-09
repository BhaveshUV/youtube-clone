import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResultPage from './components/SearchResultPage';
import { Provider } from 'react-redux';
import store from './utils/store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/results",
          element: <SearchResultPage />,
        }
      ]
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
