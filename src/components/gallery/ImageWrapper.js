import React from 'react'


const ImageWrapper = ({ image, title, animate, reset, gif }) => (
    <div> 
        <img 
            src={image}
            onMouseEnter={animate}
            onMouseLeave={reset}
            width="400px"
        />

        <h3>{gif && 'GIF'}</h3>
        
    </div>
)
export default ImageWrapper

