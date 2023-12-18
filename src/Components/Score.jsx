import React from 'react'
import styled from 'styled-components'

const ScoreContainer = styled.div`
    max-width: 150px;
    text-align: center;
    h1{
        font-size: 60px;
        line-height: 80px;
    }
    p{
        font-size: 18px;
        font-weight: 500;
    }
`

export default function Score({score}) {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}
