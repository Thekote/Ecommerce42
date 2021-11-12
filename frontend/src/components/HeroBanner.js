import React from 'react'
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'

const HeroBanner = () => {
    return (
        <BannerContainer>
            <form>
                <input type="text" id="search" placeholder="Buscar Produtos">
                </input>
                <SearchButton>
                    <MdSearch />
                </SearchButton>
            </form>
            
            
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

    form {
        display: flex;
        align-items: center;
    }

    input {
        width: 400px;
        height: 50px;
        border-radius: 10px;
        border: 0;
        padding: 0 20px;
        margin: 0 10px;
        font-size: 1em;
    }
`;

const SearchButton = styled.div` 
        display: flex;;
        font-size: 2.5em;
        color: white;
  
`



export default HeroBanner;