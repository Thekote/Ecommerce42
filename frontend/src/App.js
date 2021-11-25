import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import GlobalStyle from './styles/global'
import ProductList from './components/ProductList'
import Footer from './components/Footer';
import Slider from './components/BannerSlider/Slider';


const App = () => (

    
      <Container>
        <GlobalStyle />
        <Navbar />
        <Slider />
        {/* <HeroBanner /> */}
        <ContentContainer>
          <ProductList/>
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

export default App

