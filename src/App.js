import "./ui/scss/App.scss";
import Inter from "./ui/typography/inter";
import { Icon } from "./atoms/index";
import { IconArrowCarousel } from "./ui/assets/icons"
import logoW from "./ui/assets/img/logo/logo_W.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoW} className="App-logo" alt={logoW} />
        <Inter type="h1">Flat Earth Esports</Inter>
        <p>Non è mai solo un gioco</p>
        <Icon
          icon={IconArrowCarousel}
          size={50}
          onClick={() => console.log("click icon")}
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
