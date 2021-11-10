import React from 'react'
import styled from 'styled-components'

const HeroBanner = () => {
    return (
        <BannerContainer>
            <h1>Hero Banner</h1>
            
        </BannerContainer>
    )
}

const BannerContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh; //clamp(800px, 60vh, 80vh);
    background: url(https://i.imgur.com/tFklJI9.jpg);
    color: gray;
`;


export default HeroBanner;