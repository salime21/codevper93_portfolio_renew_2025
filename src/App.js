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
}

export default App;
