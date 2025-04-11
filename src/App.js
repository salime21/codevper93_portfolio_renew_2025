<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
=======
import { MainApp } from './MainApp';
import { Image } from 'react-bootstrap';
import { HeaderTop } from './UI/HeaderTop';
import { FooterApp } from './UI/FooterApp';
import wapp_icon from "./Assets/Imgs/social/wapp_icon.png";

import "./Assets/Styles/App.css";
import "./Assets/Styles/_fonts.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <>
    <a href={`https://wa.me/5493446222736`} target="_blank"
      rel="noopener noreferrer" className="BP__btn_flat_icon_wapp"
      title="Contáctame por WhatsApp"
    >
      <Image src={wapp_icon} alt="Contáctanos" className="whatsapp-icon" />
    </a>

    <HeaderTop />
    <MainApp />
    <FooterApp />
  </>;
>>>>>>> fa5451a (first commit)
}

export default App;
