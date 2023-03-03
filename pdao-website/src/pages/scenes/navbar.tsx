import React, { RefObject } from "react";

interface NavbarProps {
  aboutRef: RefObject<HTMLSelectElement>;
  infoRef: RefObject<HTMLSelectElement>;
  teamsRef: RefObject<HTMLSelectElement>;
  contactRef: RefObject<HTMLSelectElement>;
}

const Navbar: React.FC<NavbarProps> = ({
  aboutRef,
  infoRef,
  teamsRef,
  contactRef,
}: NavbarProps) => {
  return (
    <nav
      className="container-fluid"
      style={{
        position: "fixed",
        backdropFilter: "saturate(180%) blur(20px)",
        backgroundColor: "var(--nav-background-color)",
        zIndex: 99,
        boxShadow: "0 1px 0 var(--nav-border-color)",
      }}
    >
      <ul>
        <li>
          <a onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}>
            PDAO 2023
          </a>
        </li>
        <li>
          <a onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}>
            介紹
          </a>
        </li>
        <li>
          <a onClick={() => infoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}>
            活動資訊
          </a>
        </li>
        <li>
          <a onClick={() => teamsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}>
            錄取隊伍
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}>聯絡我們</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
