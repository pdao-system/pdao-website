import React, { RefObject, CSSProperties } from "react";
import WovenImageList from "./components/WovenImageList";
interface SponsorProps {
  SponsorRef: RefObject<HTMLSelectElement>;
  center: CSSProperties;
}
const Sponsor = ({ SponsorRef, center }: SponsorProps) => {
  return (
    <>
      <h2 style={{ ...center, color: "white" }}>贊助名單</h2>
      <section ref={SponsorRef} style={{display: 'flex', justifyContent:'center'}}>
        
          <WovenImageList></WovenImageList>
      </section>
    </>
  );
};
export default Sponsor;
