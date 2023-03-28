import React, { RefObject } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
interface NavbarProps {
  aboutRef: RefObject<HTMLSelectElement>;
  infoRef: RefObject<HTMLSelectElement>;
  teamsRef: RefObject<HTMLSelectElement>;
  contactRef: RefObject<HTMLSelectElement>;
  sponsorsRef: RefObject<HTMLSelectElement>;
}

const Navbar: React.FC<NavbarProps> = ({
  aboutRef,
  infoRef,
  teamsRef,
  contactRef,
  sponsorsRef
}: NavbarProps) => {
  const isNonMobileScreens = useMediaQuery("(min-width:10000px)");
  return (
    <nav
      className="container-fluid"
      style={{
        position: "fixed",
        backdropFilter: "saturate(180%) blur(20px)",
        backgroundColor: "white",
        zIndex: 99,
      }}
    >
      <ul >
        <li>
          <a onClick={() => window.scrollTo({ 'behavior': 'smooth', 'top': isNonMobileScreens ? 2000 : 0, 'left': 0 })}>
            PDAO 2023
          </a>
        </li>
        <li>
          <a onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}>
            介紹
          </a>
        </li>
        <li>
          <a onClick={() => infoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}>
            活動資訊
          </a>
        </li>
        <li>
          <a onClick={() => teamsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}>
            錄取隊伍
          </a>
        </li>
        <li>
          <a onClick={() => sponsorsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}>
            贊助名單
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}>聯絡我們</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
