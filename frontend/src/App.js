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
    </Container>
  )


const Container = styled.div`
  background: gray;
  height: 100vh;
`


export default App
