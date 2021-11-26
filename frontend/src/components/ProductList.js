import React from "react"
import styled from "styled-components"
import ProductCard from "./ProductCard"

const ProductList = () => {
  return (
    <MainContent>
      <TitleList>Os mais vendidos</TitleList>
      <ProductsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsContainer>
    </MainContent>
  )
}

const MainContent = styled.div`
  width: 80vw;
`

const ProductsContainer = styled.div`
  background-color: #fff8;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  padding: 20px;
  width: 80vw;

  @media (max-width: 1240px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 930px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`

const TitleList = styled.h2`
  width: 100%;
  height: 50px;
  margin-top: 30px;
  font-size: 2em;
  text-align: center;
`

export default ProductList
