import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "@picocss/pico/css/pico.min.css";
import { StaticImage } from "gatsby-plugin-image"

import { GiArchiveRegister } from "react-icons/gi"
import { AiFillTrophy } from "react-icons/ai"
import { RiFileInfoLine } from "react-icons/ri"



import teams from "../data/teams.json";
import info from "../data/info.json";

const lastUpdate = new Date(info.lastUpdate);
/*
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this page
        update in real-time. 😎
      </p>
      <ul style={doclistStyles}>
        {docLinks.map(doc => (
          <li key={doc.url} style={docLinkStyle}>
            <a
              style={linkStyle}
              href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
            >
              {doc.text}
            </a>
          </li>
        ))}
      </ul>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}


*/

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
            <nav className="container-fluid" style={{ position: "fixed", backdropFilter: "saturate(180%) blur(20px)", backgroundColor: "var(--nav-background-color)", zIndex: 99, boxShadow: "0 1px 0 var(--nav-border-color)" }}>
                <ul>
                    <li>
                        <a onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: "start" })}>PDAO 2023</a>
                    </li>
                    <li>
                        <a onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: "center" })}>介紹
                        </a>
                    </li>
                    <li>
                        <a onClick={() => infoRef.current?.scrollIntoView({ behavior: 'smooth', block: "start" })}>活動資訊</a>

                    </li>
                    <li>
                        <a onClick={() => teamsRef.current?.scrollIntoView({ behavior: 'smooth', block: "center" })}>錄取隊伍</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}>聯絡我們</a>
                    </li>
                </ul>
            </nav>
            <div style={{ display: "grid" }}>
                {/* You can use a GatsbyImage component if the image is dynamic */}
                <StaticImage
                    style={{
                        gridArea: "1/1",
                        // You can set a maximum height for the image, if you wish.
                        // maxHeight: 600,
                        opacity: 0.2
                    }}
                    layout="fullWidth"
                    // You can optionally force an aspect ratio for the generated image
                    aspectRatio={2 / 1}
                    // This is a presentational image, so the alt should be an empty string
                    alt="ntu"
                    // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                    src="../images/astro.jpg"
                />
                <div
                    style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: "1/1",
                        position: "relative",
                        // This centers the other elements inside the hero component
                        placeItems: "center",
                        display: "grid",
                    }}
                >
                    {/* Any content here will be centered in the component */}
                    <div className="grid" style={center}>
                        <div>
                            <StaticImage src="../images/icon.JPG" alt="PDAO LOGO" style={{ maxWidth: windowWidth * 0.3 }} />
                        </div>
                    </div>

                </div>
            </div>
            <main className="container">
                <section ref={aboutRef}>
                    <hgroup>
                        <h1 style={center}>PDAO</h1>
                        <h5 style={center}>全名 Programming Design and Optimization ，是國立臺灣大學資訊管理學系不分年級的大型程式競賽。</h5>
                        <h5 style={center}>舉辦目的在於讓參賽者能藉由本競賽，評估、測驗程式設計能力，並在競賽過程中，累積相關實戰經驗。</h5>
                        <p></p>
                    </hgroup>
                    <p>
                        <div className="grid">
                            <div data-tooltip="披薩吃到飽">
                                <StaticImage src="../images/pizza.jpg" alt="pizza" aspectRatio={16 / 13} />
                            </div>
                            <div data-tooltip="12道題目，難度不一">
                                <StaticImage src="../images/coding.jpg" alt="coding" aspectRatio={16 / 13} />
                            </div>
                            <div data-tooltip="企業參訪">
                                <StaticImage src="../images/company.jpg" alt="company" aspectRatio={16 / 13} />
                            </div>
                        </div>
                    </p>
                    <div className="grid">
                        <div data-tooltip="答對題目可獲得氣球">
                            <StaticImage src="../images/ballon.jpg" alt="ballon" aspectRatio={16 / 14} />
                        </div>
                        <div data-tooltip="豐富獎品任君挑選">
                            <StaticImage src="../images/win.jpg" alt="win" aspectRatio={16 / 14} transformOptions={{ cropFocus: "entropy" }} />
                        </div>
                        <div data-tooltip="與隊友腦力激盪">
                            <StaticImage src="../images/friend.jpg" alt="friend" aspectRatio={16 / 14} />
                        </div>
                    </div>
                </section>
                <section ref={infoRef}>
                    <hgroup>
                        <h2 style={center}>活動資訊</h2>
                        <h5 style={center}>內容僅供參考，以<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">正式活動簡章</a>為準。</h5>
                    </hgroup>

                    <div className="grid">
                        <div>
                            <article>
                                <h6 style={center}><AiFillTrophy></AiFillTrophy>活動獎項</h6>
                                <p>
                                    <small>積極參與獎：<br></br>
                                        所有參賽選手均可獲得PDOGS出品限量資料夾與參賽證明一份。
                                    </small>
                                </p>
                                <p>
                                    <small>排名獎勵：<br></br>
                                        競賽前五名隊伍的每位隊員，均可獲得一份精美獎品及獎狀。</small>
                                </p>
                                <p>
                                    <small>
                                        <details>
                                            <summary>企業參訪</summary>
                                            所有滿足以下條件的隊伍中，第一名的每位隊員將獲得5/20於神腦公司的企業參訪機會。
                                            <ul>
                                                <li>所有成員均主修或雙主修臺大資管系。</li>
                                                <li>報名時勾選「有意願參加5/20於神腦公司的企業參訪」。</li>
                                            </ul>

                                        </details>
                                    </small>
                                </p>

                            </article>
                        </div>
                        <div >
                            <article>
                                <h6 style={center}><GiArchiveRegister></GiArchiveRegister>報名須知</h6>
                                <p>
                                    <small>活動日期：2021/5/8(六) 8:30~18:00。</small>
                                </p>
                                <p>
                                    <small>
                                        活動地點：國立臺灣大學管理學院一號館103、B101。
                                    </small>
                                </p>
                                <p>
                                    <small>
                                        人數限制：2~3人一組
                                    </small>
                                </p>
                                <p>
                                    <small>
                                        防疫須知：競賽中請全程配戴口罩。
                                    </small>
                                </p>
                                <p>
                                    <small>
                                        <details>
                                            <summary>報名時間：2021/4/12~2021/4/21</summary>
                                            <ul>
                                                <li>將於2021年4月23日14:00公布報名結果於報名網站上</li>
                                                <li>報名結果公布後，開放隊伍於一定期間補齊報名資料，若未於期限內補齊，將依據候補名單遞補。</li>
                                            </ul>

                                        </details>
                                    </small>
                                </p>
                                <p>
                                    <small>
                                        <mark>
                                            本次活動設有報名隊伍數上限，因此當人數超過上限，我們將進行資格排序決定參賽隊伍。
                                        </mark>
                                    </small>
                                </p>
                            </article>
                        </div>
                        <div style={center}>
                            <article>
                                <h6 style={center} ><RiFileInfoLine></RiFileInfoLine>競賽規則</h6>
                                <p>
                                    <small>
                                        若違反下列規則，將可能導致參賽隊伍失去參賽或得獎資格。
                                    </small>
                                </p>
                                <p>
                                    <small>
                                        <ul>
                                            <li>
                                                共12道題目，比賽時間五小時，題目敘述皆為英文。
                                            </li>
                                            <li>
                                                隊伍必須透過臺大資管系線上批改系統<a href="https://pdogs.ntu.im/">PDOGS</a>提交解答。
                                            </li>
                                            <li>
                                                可選用 C++ 或 Python3 撰寫程式。
                                            </li>
                                            <li>
                                                一隊限用一台自備電腦。
                                            </li>
                                            <li>
                                                網路存取限制，禁止使用網路與其他隊伍或外界聯繫
                                            </li>
                                            <li>
                                                不得攜帶競賽機器外的任何通訊裝置、電子裝置、食物與飲料。
                                            </li>
                                        </ul>
                                    </small>
                                </p>
                            </article>
                        </div>
                    </div>
                </section>
                <section ref={teamsRef}>
                    <hgroup>
                        <h2 style={center}>錄取隊伍</h2>
                        <p></p>
                    </hgroup>
                    <table>
                        <thead>
                            <tr style={{ justifyContent: "center" }}>
                                <th scope="col">#</th>
                                <th scope="col">隊名</th>
                                <th scope="col">成員</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                teams.map((team, i) => {
                                    return <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{team.name}</td>
                                        <td>{team.members.join(' ')}</td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </section>
                <section ref={contactRef}>
                    <hgroup>
                        <h2 style={center}>聯絡我們</h2>
                        <h6 style={center}>如有任何疑問，歡迎來信洽詢：<a href="mailto: pdaopdao@ntu.im">pdaopdao@ntu.im</a></h6>
                        <h6 style={center}>Programming Design And Optimization Website</h6>
                        <h6 style={center}>Information Management, National Taiwan University</h6>
                        <small style={center}>
                            Last Updated:&nbsp;
                            {lastUpdate.toLocaleString("en-ZA", { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </small>
                    </hgroup>
                </section>
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
