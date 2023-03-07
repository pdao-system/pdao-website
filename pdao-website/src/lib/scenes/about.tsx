import React, {RefObject, CSSProperties, useEffect} from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Radio from '@mui/material/Radio';
import { GatsbyImage } from "gatsby-plugin-image"
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



const ImagesSilder = ({aboutRef, center}: AboutProps) => {
    const [selectedValue, setSelectedValue] = React.useState('241');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
      };
      const radioButtons = ['241', '254', '274', '279', '283', '290', '309', '314', '318', '324']
      

    return (
        <section ref={aboutRef}>
            <hgroup>
                        <h1 style={center}>PDAO</h1>
                        <h5 style={center}>全名 Programming Design and Optimization ，是國立臺灣大學資訊管理學系不分年級的大型程式競賽。</h5>
                        <h5 style={center}>舉辦目的在於讓參賽者能藉由本競賽，評估、測驗程式設計能力，並在競賽過程中，累積相關實戰經驗。</h5>
                        <p></p>
            </hgroup>
            
            {radioButtons.map((num,i)=>{
                if(selectedValue !== num) return null;
                if(selectedValue === '241'){
                    return <StaticImage src={"../../images/241.jpg"} alt="image" style={{transition: '2s'}}></StaticImage>
                } else if(selectedValue === '254'){
                    return <StaticImage src={"../../images/254.jpg"} alt="image"></StaticImage>
                } else if(selectedValue === '274'){
                    return <StaticImage src={"../../images/274.jpg"} alt="image"></StaticImage>
                } 
                else if(selectedValue === '279'){
                    return <StaticImage src={"../../images/279.jpg"} alt="image"></StaticImage>
                } 
                else if(selectedValue === '283'){
                    return <StaticImage src={"../../images/283.jpg"} alt="image"></StaticImage>
                } 
                else if(selectedValue === '290'){
                    return <StaticImage src={"../../images/290.jpg"} alt="image"></StaticImage>
                } 
                else if(selectedValue === '309'){
                    return <StaticImage src={"../../images/309.jpg"} alt="image"></StaticImage>
                } else if(selectedValue === '314'){
                    return <StaticImage src={"../../images/314.jpg"} alt="image"></StaticImage>
                } 
                else if(selectedValue === '318'){
                    return <StaticImage src={"../../images/318.jpg"} alt="image"></StaticImage>
                } 
                else if(selectedValue === '324'){
                    return <StaticImage src={"../../images/324.jpg"} alt="image"></StaticImage>
                } 
                
            })}
           
            <div style={{ justifyContent: 'space-between', display: 'flex'}}>
            
                {radioButtons.map((value, index) => (
                    <Radio
                    key={index}
                    checked={selectedValue === value}
                    onChange={handleChange}
                    value={value}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': value }}
                    color={'primary'}
                    sx={{
                        color: 'white',
                        
                    }}
                    />
                ))}
            </div>
            <h6 style={center}>相官：資管 B07 施芊羽</h6>

        </section>
    )

}

export default ImagesSilder;