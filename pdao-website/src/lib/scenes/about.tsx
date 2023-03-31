import React, { RefObject, CSSProperties, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Radio from '@mui/material/Radio';
import { Box } from '@mui/material'
import CarouselPage from './carousel';
interface AboutProps {
    aboutRef: RefObject<HTMLSelectElement>,
    center: CSSProperties,
}



const About = ({ aboutRef, center }: AboutProps) => {
    return (
        <section ref={aboutRef}>
            <hgroup>
                <h1 style={center}>PDAO</h1>
                <h5 style={center}>全名 Programming Design and Optimization ，是國立臺灣大學資訊管理學系不分年級的大型程式競賽。</h5>
                <h5 style={center}>舉辦目的在於讓參賽者能藉由本競賽，評估、測驗程式設計能力，並在競賽過程中，累積相關實戰經驗。</h5>
                <p></p>
            </hgroup>
            <CarouselPage />
            <p>

                <div className="grid">
                    <div data-tooltip="披薩吃到飽">
                        <StaticImage src="../../images/pizza.png" alt="pizza" aspectRatio={13 / 13} />
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



const ImagesSilder = ({ aboutRef, center }: AboutProps) => {
    const [selectedValue, setSelectedValue] = React.useState('241');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    const radioButtons = ['241', '254', '274', '279', '283', '290', '309', '314', '318', '324']


    return (
        <section ref={aboutRef}>
            <hgroup>
                <h1 style={{ ...center, color: 'white' }}>PDAO</h1>
                <h6 style={{ ...center, color: 'white' }}>全名 Programming Design and Optimization ，是由國立臺灣大學資訊管理學系主辦，每年 4、5 月舉辦一次的大型程式競賽，旨在讓參賽者能藉由競賽，測驗其資料結構和演算法知識及程式撰寫等能力，並累積實戰經驗。<br></br>
                    舉不分年級的參賽資格，讓每位程式愛好者都有機會參與，一同挑戰自我，邁向更高的程式設計境界。</h6>


            </hgroup>
            <h6 style={{ ...center, color: "white" }}>相官：資管 B07 施芊羽</h6>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <CarouselPage />
            </div>


        </section>
    )

}

export default ImagesSilder;