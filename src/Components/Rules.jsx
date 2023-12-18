import React from 'react'
import styled from 'styled-components'

const RulesContainer = styled.div`
    max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
;
`

export default function Rules() {
  return (
    <RulesContainer>
        <h3>How to play dice game</h3>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice</p>
            <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
            <p>if you get wrong guess then  2 point will be deducted </p>
        </div>
    </RulesContainer>
  )
}