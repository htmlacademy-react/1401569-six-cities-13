import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  countCitiesCard: number;
};

function App({ countCitiesCard }: AppProps): JSX.Element {
  return <MainPage countCitiesCard={countCitiesCard} />;
}

export default App;
