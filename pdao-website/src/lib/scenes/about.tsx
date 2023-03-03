import React, {RefObject, CSSProperties} from 'react';
import { StaticImage } from 'gatsby-plugin-image';
interface AboutProps {
    aboutRef: RefObject<HTMLSelectElement>,
    center: CSSProperties,
}
const About = ({aboutRef, center}: AboutProps)=>{
    return (
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
                                <StaticImage src="../../images/pizza.jpg" alt="pizza" aspectRatio={16 / 13} />
                            </div>
                            <div data-tooltip="12道題目，難度不一">
                                <StaticImage src="../../images/coding.jpg" alt="coding" aspectRatio={16 / 13} />
                            </div>
                            <div data-tooltip="企業參訪">
                                <StaticImage src="../../images/company.jpg" alt="company" aspectRatio={16 / 13} />
                            </div>
                        </div>
                    </p>
                    <div className="grid">
                        <div data-tooltip="答對題目可獲得氣球">
                            <StaticImage src="../../images/ballon.jpg" alt="ballon" aspectRatio={16 / 14} />
                        </div>
                        <div data-tooltip="豐富獎品任君挑選">
                            <StaticImage src="../../images/win.jpg" alt="win" aspectRatio={16 / 14} transformOptions={{ cropFocus: "entropy" }} />
                        </div>
                        <div data-tooltip="與隊友腦力激盪">
                            <StaticImage src="../../images/friend.jpg" alt="friend" aspectRatio={16 / 14} />
                        </div>
                    </div>
                </section>
    )
}
export default About