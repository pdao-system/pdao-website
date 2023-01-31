import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "@picocss/pico/css/pico.min.css";
import { StaticImage } from "gatsby-plugin-image"

import { HashLink } from 'react-router-hash-link';

import { GiArchiveRegister } from "react-icons/gi"
import { AiFillTrophy } from "react-icons/ai"
import { RiFileInfoLine } from "react-icons/ri"
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
    fontWeight: "lighter"
}

const IndexPage: React.FC<PageProps> = () => {
    const aboutRef = React.useRef<null | HTMLSelectElement>(null);
    const infoRef = React.useRef<null | HTMLSelectElement>(null);
    const teamsRef = React.useRef<null | HTMLSelectElement>(null);
    const contactRef = React.useRef<null | HTMLSelectElement>(null);
    return (
        <body>
            <nav className="container-fluid" style={{ position: "fixed", backdropFilter: "saturate(180%) blur(20px)", backgroundColor: "var(--nav-background-color)", zIndex: 99, boxShadow: "0 1px 0 var(--nav-border-color)" }}>
                <ul>
                    <li><StaticImage height={32} src="../images/logo.png" alt="PDAO LOGO" /></li>
                    <li>
                        <a onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: "center" })}>PDAO 2023</a>
                    </li>
                    <li>
                        <a onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: "center" })}>介紹
                        </a>
                    </li>
                    <li>
                        <a onClick={() => infoRef.current?.scrollIntoView({ behavior: 'smooth', block: "center" })}>活動資訊</a>

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
            <main className="container">
                <section style={center} >
                    <StaticImage src="../images/logo.png" alt="PDAO LOGO" />
                    <StaticImage src="../images/logoTitle.png" alt="PDAO FULL LOGO" />
                </section>
                <section ref={aboutRef}>
                    <hgroup>
                        <h3 style={center}>PDAO</h3>
                        <h5 style={center}>全名 Programming Design and Optimization ，是國立臺灣大學資訊管理學系不分年級的大型程式競賽。</h5>
                        <h5 style={center}>舉辦目的在於讓參賽者能藉由本競賽，評估、測驗程式設計能力，並在競賽過程中，累積相關實戰經驗。</h5>
                        <p></p>
                    </hgroup>
                </section>
                <section ref={infoRef}>
                    <hgroup>
                        <h3 style={center}>活動資訊</h3>
                        <h5 style={center}>內容僅供參考，以正式活動簡章為準。</h5>
                        <p></p>
                    </hgroup>
                    <div className="grid">
                        <div style={center}>
                            <article>
                                <AiFillTrophy></AiFillTrophy>活動獎項
                            </article>
                        </div>
                        <div style={center}>
                            <article>
                                <GiArchiveRegister></GiArchiveRegister>報名須知
                            </article>
                        </div>
                        <div style={center}>
                            <article>
                                <RiFileInfoLine></RiFileInfoLine>競賽規則
                            </article>
                        </div>
                    </div>
                </section>
                <section ref={teamsRef}>
                </section>
                <section ref={contactRef}>
                    <hgroup>
                        <h5 style={center}>如有任何疑問，歡迎來信洽詢：<a href="mailto: PDAO2023@ntu.im">PDAO2023@ntu.im</a></h5>
                        <h5 style={center}>Programming Design And Optimization Website</h5>
                        <h5 style={center}>Information Management, National Taiwan University</h5>
                        <p></p>
                    </hgroup>
                </section>
            </main >
        </body>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>2023 PDAO</title>
