import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import GlobalStyle from './global'
import ProductList from './components/ProductList'

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



// Rubik Link:

// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

// font-family: 'Rubik', sans-serif;