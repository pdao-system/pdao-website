import React, {RefObject, CSSProperties} from 'react';
import teams from "../../data/teams.json";
interface TeamsProps {
    teamsRef: RefObject<HTMLSelectElement>,
    center: CSSProperties,
}
const Teams = ({teamsRef, center}: TeamsProps)=>{
    return (
        <section ref={teamsRef}>
                    <hgroup>
                        <h2 style={center}>錄取隊伍</h2>
                        <p></p>
                    </hgroup>
                    <table >
                        <thead>
                            <tr style={{ justifyContent: "center" }}>
                                <th scope="col" style={{color: 'white'}}>#</th>
                                <th scope="col" style={{color: 'white'}}>隊名</th>
                                <th scope="col" style={{color: 'white'}}>成員</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                teams.map((team, i) => {
                                    return <tr key={i}>
                                        <th scope="row" style={{color: 'white'}}>{i + 1}</th>
                                        <td style={{color: 'white'}}>{team.name}</td>
                                        <td style={{color: 'white'}}>{team.members.join(' ')}</td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </section>
    )
}
export default Teams