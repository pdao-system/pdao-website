import React, { RefObject, CSSProperties } from "react";
import WovenImageList from "./components/WovenImageList";
import { List } from "@mui/material"
import SponsorItem from "./components/SponsorItem";
interface SponsorProps {
  SponsorRef: RefObject<HTMLSelectElement>;
  center: CSSProperties;
}

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface SponsorProps {
  SponsorRef: RefObject<HTMLSelectElement>;
  center: CSSProperties;
}

interface SponsorData {
  name: string;
  amount: number;
}

const sponsorData: SponsorData[] = [
  { name: "孔令傑", amount: 1000 },
  { name: "林雨新", amount: 1000 },
  { name: "B92張翰青", amount: 1000 },
  { name: "詹子儀", amount: 2000 },
  { name: "劉騏瑋", amount: 1000 },
  { name: "Daniel Tseng", amount: 1000 },
  { name: "Loter (張瀚天)", amount: 2000 }
];




const Sponsor = ({ SponsorRef, center }: SponsorProps) => {
  return (
    <>
      <h2 style={{ ...center, color: "white" }}>贊助名單</h2>
      <section ref={SponsorRef} style={{display: 'flex', justifyContent:'center', flexWrap: 'wrap'}}>
        
          <WovenImageList></WovenImageList>
        <div style={{width: '30rem',maxWidth: '80vw', alignItems: 'center', justifyContent: 'center', display: 'center'}}>
            <Table >
            <TableHead>
              <TableRow>
                <TableCell style={ {color: "white" }}>名字</TableCell>
                <TableCell align="right" style={ {color: "white" }}>金額</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sponsorData.map((sponsor) => (
                <TableRow key={sponsor.name}>
                  <TableCell component="th" scope="row" style={ {color: "white" }}>
                    {sponsor.name}
                  </TableCell>
                  <TableCell align="right" style={ {color: "white" }}>{sponsor.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </div>
      </section>
    </>
  );
};
export default Sponsor;
