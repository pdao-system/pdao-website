import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { useRef } from 'react'

const center = {
    width: '100%',
    display: "flex",
    justifyContent: "center",
}
interface PdaoImageProps {
    windowWidth: number

}

const PdaoImage = ({windowWidth}: PdaoImageProps) => {

    const logoRef = useRef(null)
    const moonRef = useRef(null)
    const starsRef = useRef(null)
    const galaxyRef = useRef(null)
    
    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        
            // logoRef.current.style.transform = 'translateX('+value-400+
            console.log(value)
            if(value <= 2000){
                
                logoRef.current.style.transform = 'translateX('+(value*0.5-1000)+'px)'+' translateY('+(value*1+200)+'px)'
                moonRef.current.style.transform = 'translateY('+(value*0.8+1000)+'px)'
                starsRef.current.style.transform = 'translateX('+(value*0.2-1000)+'px)'+' translateY('+(value*1.2-200)+'px)'
                galaxyRef.current.style.transform = 'translateX('+(0-400)+'px)'+' translateY('+(value*1.2-1300)+'px)'
                      
            }
            else if(2000 <= value && value <= 4000){
                logoRef.current.style.transform = 'translateX('+(0)+'px)'+' translateY('+(value*0.2+1800)+'px)'
                moonRef.current.style.transform = 'translateY('+(value+600)+'px)'
                starsRef.current.style.transform = 'translateX('+(value*0.6-1800)+'px)'+' translateY('+(value*2-1800)+'px)'
                      
            }
            
        
    })

    
    return (
        <div style={{scrollBehavior:'smooth'}}>
            {/* <div style={{ display: "grid" }}>
                <StaticImage
                    style={{
                        gridArea: "1/1",
                        // You can set a maximum height for the image, if you wish.
                        // maxHeight: 600,
                        
                    }}
                    layout="fullWidth"
                    // You can optionally force an aspect ratio for the generated image
                    aspectRatio={2 / 1}
                    // This is a presentational image, so the alt should be an empty string
                    alt="ntu"
                    // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                    src="../../images/space.jpg"
                />
                
            </div> */}
                {/* <div
                    style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        
                        position: "relative",
                        // This centers the other elements inside the hero component
                        placeItems: "center",
                        display: "grid",
                        color: "white",
                        fontSize: '300px',
                        fontWeight: "bold"
                    }}
                >
                    {/* Any content here will be centered in the component */}
                    
                <div style={{
                    position: "relative",
                    justifyContent: "center",
                    display: 'flex'
                }}>
                    <div ref={logoRef}
                    
                    style=
                    {
                        { 
                        maxWidth: windowWidth * 0.5, 
                        position:'absolute', 
                        transform: 'translateX(-1000px) translateY(200px)',
                        
                        }}>
                        <StaticImage src="../../images/logo_vertical.PNG" alt="PDAO LOGO" />
                    </div>

                    <div
                    ref={moonRef}
                    style={{ 
                        maxWidth: windowWidth * 1, 
                        position:'absolute', 
                        transform: 'translateX(0px) translateY(1000px)',
                        zIndex: 3
                     }}
                    >
                        <StaticImage src="../../images/moon.PNG" alt="moon"  />
                    </div>
                    <div
                    ref={starsRef}
                    style={{
                        width: '20vw',
                        height: '30vh',
                        transform: 'translateX(-10vw)',
                        position:'absolute', 
                        zIndex: 2
                        }}
                    >
                        <StaticImage src="../../images/stars.PNG" alt="stars"  />
                    </div>
                    <div 
                    ref={galaxyRef}
                    style={{ 
                        maxWidth: windowWidth * 0.8, 
                        position:'absolute', 
                        transform: 'translateX(-400px) translateY(-1300px) ',
                        zIndex: 1
                     }}
                    >
                        <StaticImage src="../../images/galaxy.PNG" alt="galaxy"></StaticImage>
                    </div>
                </div>
        </div>

    )
}
export default PdaoImage;
