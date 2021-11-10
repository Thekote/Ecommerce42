import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import GlobalStyle from './global'

const App = () => (    
    <Container>
      <GlobalStyle />
      <Navbar />
      <HeroBanner />
      <ContentContainer>
        <ProductList/>
      </ContentContainer>
    </Container>
  )


const Container = styled.div`
  background: gray;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
`


export default App
