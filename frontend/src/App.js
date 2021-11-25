import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import GlobalStyle from './styles/global'
import ProductList from './components/ProductList'
import { Outlet } from 'react-router-dom';
import Slider from './components/BannerSlider/Slider';
import Footer from './components/Footer'

const App = () => (

    
      <Container>
        <GlobalStyle />
        <Navbar />
        <Slider />
        <ContentContainer>
          <ProductList/>
        </ContentContainer>
        <Outlet />
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

