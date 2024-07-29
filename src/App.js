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
import SearchContext from './utils/SearchContext';
import { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState("");

  let handleSearch = (sugg) => {
    setSearchText(sugg);
    let search = document.getElementsByClassName("searchBox");
    search[0].blur();
    search[1].blur();
  }

  const appRouter = createHashRouter([
    {
      path: "/",
      element: <SearchContext.Provider value={handleSearch}>
        <Header searchText={searchText} setSearchText={setSearchText} />
        <Body />
      </SearchContext.Provider>,
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
