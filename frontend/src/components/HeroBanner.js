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
    height: calc(100vh - 80px);
    background: url(https://www.enjoyintercambio.com/wp-content/uploads/2016/10/festival_cocktail_irlanda_enjoy_intercambio.jpg);
    color: gray;
`;






export default HeroBanner;