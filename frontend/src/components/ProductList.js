import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';


const ProductList = () => {
    return (        
        <ProductsContainer>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </ProductsContainer>

    )
}

const ProductsContainer = styled.div`
    background-color: #fff8;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 20px;    
    padding: 20px;

    @media (max-width: 1240px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 930px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 630px){
        grid-template-columns: 1fr;
    }

`


export default ProductList
