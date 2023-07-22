import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites/favorites';
import OfferPage from '../../pages/offers-page/offers-page';
import NotFoundPage from '../../pages/error-page/error-page';

type AppProps = {
  countCitiesCard: number;
};

function App({ countCitiesCard }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {<MainPage countCitiesCard = {countCitiesCard} />}
        />
        <Route
          path = {AppRoute.Login}
          element = {<LoginPage />}
        />
        <Route
          path = {AppRoute.Favorites}
          element = {<FavoritesPage />}
        />
        <Route
          path = {AppRoute.Offer}
          element = {<OfferPage />}
        />
        <Route
          path = '*'
          element = {<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
