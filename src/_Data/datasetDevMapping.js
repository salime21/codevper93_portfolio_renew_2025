import miniprop from "./Imgs/mini_prop.png";
import vigilance_house from "./Imgs/vigilance_house.png";
import tattoo_house from "./Imgs/tattoo_house.png";
import risk_word from "./Imgs/risk word.png";
import restrilogy from "./Imgs/restrilogy.png";
import auth_encrypt from "./Imgs/auth_encrypt.png";
import ecopy_brite from "./Imgs/ecopybrite.png";


import uvi_rrhh from "./Imgs/uvi_rrhh.png";
import pro_bike_rental from "./Imgs/probike_rental.png";

/*
    TYPE: Trabajos | Proyectos | Prácticas | Challenges | Random]
    CATEGORY: Diseño Web | Desarrollo Web | Mobile design | Mobile development
    DEVELOPMENT: Personal | Cliente
    name: "Nombre del proyecto"
    img: imagen del proyecto"
    url_site: "url del proyecto"  
    STACK: FullStack | FrontEnd | BackEnd
    TAGS: ["TECNOLOCIAS USADAS"]
    */

export const datasetDevMapping = [
    {
        type: "Proyectos",
        category: "Desarrollo Web",
        development: "Personal",
        name: "Real Estate System",
        img: miniprop,
        url_site: "#",
        // ----------------------
        stack: "FullStack",
        tags: [
            "React", "JS", "PHP", "Bootstrap", "CSS", "Filepond", "Leaflet", "Notistack",
            "Moment", "Axios", "Hooks", "Context", "API", "JWT", "MySQL", "NPM", "Composer"
        ],
    },
    {
        type: "Proyectos",
        category: "Desarrollo Web",
        development: "Personal",
        name: "Risk Word (game)",
        img: risk_word,
        url_site: "https://web-development-risk-word-game.vercel.app/",
        // ----------------------
        stack: "FrontEnd",
        tags: [
            "HTML 5", "JS", "CSS", "Howler.js"
        ],
    },
    {
        type: "Challenges",
        category: "Desarrollo Web",
        development: "Personal",
        name: "ProBike Rental",
        img: pro_bike_rental,
        url_site: "https://web-development-pro-bike-rental.vercel.app/",
        // ----------------------
        stack: "FrontEnd",
        tags: [
            "React", "JS", "Bootstrap", "CSS", "Redux", "NPM", "Hooks"
        ],
    },
    {
        type: "Trabajos",
        category: "Diseño Web",
        development: "Cliente",
        name: "Tattoo House",
        img: tattoo_house,
        url_site: "https://web-design-tattoo-house.vercel.app/",
        // ----------------------
        stack: "FrontEnd",
        tags: ["HTML 5", "JS", "CSS"],
    },
    {
        type: "Trabajos",
        category: "Diseño Web",
        development: "Cliente",
        name: "Vigilance House",
        img: vigilance_house,
        url_site: "https://web-design-vigilance-house.vercel.app/",
        // ----------------------
        stack: "FrontEnd",
        tags: ["HTML 5", "JS", "CSS"],
    },
    {
        type: "Trabajos",
        category: "Diseño Web",
        development: "Cliente",
        name: "UV! RRHH",
        img: uvi_rrhh,
        url_site: "https://web-design-uvi-rrhh.vercel.app/",
        // ----------------------
        stack: "FrontEnd",
        tags: ["React", "Bootstrap", "JS", "CSS", "NPM", "Hooks"],
    },
    {
        type: "Challenges",
        category: "Desarrollo Web",
        development: "Personal",
        name: "Restrilogy",
        img: restrilogy,
        url_site: "https://github.com/codevper93/web_development_restrilogy",
        // ----------------------
        stack: "FullStack",
        tags: [
            "React", "JS", "Node", "Bootstrap", "CSS", "API", "Context", "NPM",
            "MySQL"
        ],
    },
    {
        type: "Trabajos",
        category: "Desarrollo Web",
        development: "Cliente",
        name: "Auth Encrypt",
        img: auth_encrypt,
        url_site: "https://github.com/codevper93/web_development_auth_encrypt",
        // ----------------------
        stack: "FullStack",
        tags: [
            "Vue", "TS", "Node", "Express", "CSS", "Axios", "API", "JWT", "Mongoose", "Bcrypt",
            "Cors", "Nodemailer"
        ],
    },

    {
        type: "Random",
        category: "Desarrollo Web",
        development: "Personal",
        name: "ECopy Brite",
        img: ecopy_brite,
        url_site: "https://github.com/codevper93/web_development_ecopy_brite",
        // ----------------------
        stack: "FullStack",
        tags: ["React", "JS", "CSS", "Bootstrap", "Firebase", "API"],
    },























];