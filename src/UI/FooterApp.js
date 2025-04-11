import { Image } from "react-bootstrap";
import { socialNetworkFooterMapping } from "./socialNetworkMapping";

export const FooterApp = () => {

    const startYear = 2024;
    const currentYear = new Date().getFullYear();

    function toBinary(number) {
        return number.toString(2);
    }

    return <div className="footer_contact">
        <div className="content_footer">
            <div className="social_network_content">
                {
                    socialNetworkFooterMapping.map((e, i) => <a key={i} href={e.url} target="_blank"
                        rel="noopener noreferrer">
                        <div key={i} className="img_social" style={{ background: e.url.includes("x.com") ? "white" : " " }}>
                            <Image width={30} src={e.img} />
                        </div>
                    </a>)
                }
            </div>
            &copy;Codevper93 - Gastón E. Bailador <span style={{ color: "#f10036" }}>[{startYear === currentYear ? null : `${currentYear} | ${toBinary(currentYear)} - `} {toBinary(startYear)} {`| ${startYear}`}] </span> - Copyright 🚀
        </div>
    </div>;
}