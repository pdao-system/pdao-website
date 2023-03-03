import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "@picocss/pico/css/pico.min.css";
import { StaticImage } from "gatsby-plugin-image"
import PdaoImage from "../lib/scenes/pdaoImage";
import Info from "../lib/scenes/info"
import Navbar from "../lib/scenes/navbar"
import About from "../lib/scenes/about"
import Teams from "../lib/scenes/teams"
import Contact from "../lib/scenes/contact"
import info from "../data/info.json";

const lastUpdate = new Date(info.lastUpdate);

const center = {
    width: '100%',
    display: "flex",
    justifyContent: "center",
}

const IndexPage: React.FC<PageProps> = () => {
    const aboutRef = React.useRef<null | HTMLSelectElement>(null);
    
    const infoRef = React.useRef<null | HTMLSelectElement>(null);
    const teamsRef = React.useRef<null | HTMLSelectElement>(null);
    const contactRef = React.useRef<null | HTMLSelectElement>(null);

    const [windowWidth, setWidth] = React.useState(0);
    const [windowHeight, setHeight] = React.useState(0);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        console.log(windowWidth)
    }

    React.useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <body style={{ "--spacing": "0.8rem", "prefers-color-scheme": "dark" }}>
            <Navbar aboutRef={aboutRef} infoRef={infoRef} teamsRef={teamsRef}  contactRef={contactRef} ></Navbar>
                {/* You can use a GatsbyImage component if the image is dynamic */}
            <PdaoImage windowWidth={windowWidth}></PdaoImage>
            <main className="container">
                <About aboutRef={aboutRef} center={center}></About>
                <Info infoRef={infoRef} center={center}></Info>
                <Teams teamsRef={teamsRef} center={center}></Teams>
                <Contact contactRef={contactRef} center={center} lastUpdate={lastUpdate}></Contact>
            </main >
        </body>
    )
}

export default IndexPage

export const Head: HeadFC = () => (
    <>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>2023 PDAO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="2023 PDAO" />
        <meta name="keywords" content="PDAO Programming Design and Optimization" />
        <meta name="author" content="臺大資管系" />
        <meta property="og:title" content="2023 PDAO" />
        <meta property="og:image" content="/favicon-32x32.png" />
        <meta property="og:url" content="https://pdaowebsite.gatsbyjs.io/" />
        <meta property="og:site_name" content="PDAO" />
        <meta property="og:description" content="Programming Design and Optimization, coding contest held by NTUIM." />
        <title>2023 PDAO</title>
    </>
)
