import React from 'react'
import styled from "styled-components"
import '../App.css'
import { Button } from '../styled/Button'

// Create Container With Styled Components
const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;
    margin-left: 65px;
    width: 649px;
    height: 522px;
`

export default function StartGame({toggle}) {
  return (
    <Container>
      <div>
        <img src="./Images/dices.png" alt="Dice" />
      </div>  
      <div>
        <h1 className='content'>
            Dice Game
        </h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}