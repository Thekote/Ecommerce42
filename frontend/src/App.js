import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  )
}

const Container = styled.div`
  background: gray;
  height: 100vh;
`


export default App
