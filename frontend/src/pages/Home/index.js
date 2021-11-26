import React from "react"
import styled from "styled-components"
import Navbar from "../../components/Navbar"
import HeroBanner from "../../components/Banner"
import GlobalStyle from "../../global"
import ProductList from "../../components/ProductList"
import Footer from "../../components/Footer"

const HomePage = () => (
  <Container>
    <GlobalStyle />
    <Navbar />
    <HeroBanner />
    <ContentContainer>
      <ProductList />
    </ContentContainer>
    <Footer />
  </Container>
)

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export default HomePage
