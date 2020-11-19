import logo from './ui/assets/img/logo/logo-fte-gradient.png';
import './ui/scss/App.scss';
import Inter from './ui/typography/inter';
import { Icon } from './atoms/index';
import theme from './ui/theme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Inter type="h1">Flat Earth Esports</Inter>
        <p>
          Non è mai solo un gioco
        </p>
        <Icon
          icon="test"
          color={theme.colors.primary.light}
          size={21}
          onClick={() => console.log('ciao')}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
