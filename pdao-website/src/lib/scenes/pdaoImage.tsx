import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const center = {
    width: '100%',
    display: "flex",
    justifyContent: "center",
}
interface PdaoImageProps {
    windowWidth: number

}

const PdaoImage = ({windowWidth}: PdaoImageProps) => {
    return (
        <div style={{ display: "grid" }}>
            <StaticImage
                style={{
                    gridArea: "1/1",
                    // You can set a maximum height for the image, if you wish.
                    // maxHeight: 600,
                    opacity: 0.2
                }}
                layout="fullWidth"
                // You can optionally force an aspect ratio for the generated image
                aspectRatio={2 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt="ntu"
                // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                src="../../images/astro.jpg"
            />
            <div
                style={{
                    // By using the same grid area for both, they are stacked on top of each other
                    gridArea: "1/1",
                    position: "relative",
                    // This centers the other elements inside the hero component
                    placeItems: "center",
                    display: "grid",
                }}
            >
                {/* Any content here will be centered in the component */}
                <div className="grid" style={center}>
                    <div>
                        <StaticImage src="../../images/icon.JPG" alt="PDAO LOGO" style={{ maxWidth: windowWidth * 0.3 }} />
                    </div>
                </div>

            </div>
        </div>

    )
}
export default PdaoImage;
