import logo from './ui/assets/img/logo/logo-fte-gradient.png';
import './ui/scss/App.scss';
import Montserrat from './ui/typography/montserrat';
import { Icon } from './atoms/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Montserrat type="h1">Flat Earth Esports</Montserrat>
        <p>
          Non è mai solo un gioco
        </p>
        <Icon
          type="icon-home"
          color="red"
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
