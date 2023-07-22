import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites/favorites';
import OfferPage from '../../pages/offers-page/offers-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

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
          element = {
            <PrivateRoute
              authorizationStatus = {AuthorizationStatus.NoAuth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
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
