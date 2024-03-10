import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResultPage from './components/SearchResultPage';
import { Provider } from 'react-redux';
import store from './utils/store/store';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error';

function App() {
  const appRouter = createHashRouter([
    {
      path: "/",
      element: <>
        <Header />
        <Body />
      </>,
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
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
