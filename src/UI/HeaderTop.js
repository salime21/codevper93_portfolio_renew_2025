import { Image } from 'react-bootstrap';
import { SiGitbook } from 'react-icons/si';
import Navbar from 'react-bootstrap/Navbar';
import { FaMedium, FaNpm } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import codevper93 from "../Assets/Imgs/codevper93.png";

export const HeaderTop = () => {
    return <>

        <div className="codevper93__header_top_fixed">
            <div className="header_top_articles">
                <a href="https://www.npmjs.com/~codevper93" rel="noopener noreferrer" target="_blank" className="glitch-icon"><FaNpm size={30} /></a>
                <a href="#" rel="noopener noreferrer" className="glitch-icon" target="_blank"><SiGitbook size={30} /></a>
                <a href="https://medium.com/@codevper93" rel="noopener noreferrer" target="_blank" className="glitch-icon"><FaMedium size={30} /></a>
            </div>

            <Navbar expand="lg" className="codevper93__navbar_custom">
                <Container>
                    <Image src={codevper93} width={150} />
                </Container>
            </Navbar>
        </div>

    </>;
}