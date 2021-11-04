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
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80vw;
    padding: 20px;

`


export default ProductList
