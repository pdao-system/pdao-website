import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { StaticImage } from 'gatsby-plugin-image'

export default function CarouselPage()
{

    return (
            <Carousel 
            autoPlay={false}
            sx={{height: '30rem', width: '30rem'}}
            indicatorIconButtonProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                style: {
                    display: 'none'
                }
            }} 
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    
                    borderRadius: 100,
                    opacity: 0.2
                }
                
            }} >
                <StaticImage placeholder='blurred'  loading="eager" alt="image1" src="../../images/241.jpg"/>
                <StaticImage placeholder='blurred' loading="eager"alt="image2" src="../../images/254.jpg"/>
                <StaticImage placeholder='blurred' loading="eager" alt="image3" src="../../images/274.jpg"/>
                <StaticImage placeholder='blurred' loading="eager" alt="image4" src="../../images/279.jpg"/>
                <StaticImage placeholder='blurred' loading="eager"alt="image5" src="../../images/283.jpg"/>
                <StaticImage placeholder='blurred' loading="eager" alt="image6" src="../../images/290.jpg"/>
                <StaticImage placeholder='blurred' loading="eager" alt="image7" src="../../images/309.jpg"/>
                <StaticImage placeholder='blurred' loading="eager" alt="image8" src="../../images/314.jpg"/>
                <StaticImage placeholder='blurred' loading="eager" alt="image9" src="../../images/318.jpg"/>
                <StaticImage placeholder='blurred' loading="eager" alt="image10" src="../../images/324.jpg"/>
            </Carousel>
    )
}

