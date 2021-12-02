import React from "react"
import styled from "styled-components"

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  )
}

const Container = styled.div`

  .prev,
  .next {
  cursor: pointer;
  z-index: 100;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 1rem;
  margin-top: -3rem;
  font-size: 40px;
  font-weight: bold;
  border-radius: 0px 5px 5px 0px;
  }

  .prev:hover,
  .next:hover {
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.5s ease-in;
  }

  .next {
  right: 0;
  border-radius: 5px 0px 0px 5px;
  }

`

export default Arrows
