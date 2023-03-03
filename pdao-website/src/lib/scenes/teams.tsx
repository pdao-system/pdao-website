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
    )
}
export default Teams