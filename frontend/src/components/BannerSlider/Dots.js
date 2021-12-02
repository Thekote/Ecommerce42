import React from "react"
import styled from "styled-components"

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <Container>
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  top: 85%;
  justify-content: center;
  z-index: 200;

  .dot {
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  margin: 0px 3px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: inline-block;
  }

  .active-dot,
  .dot:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }



`


export default Dots
