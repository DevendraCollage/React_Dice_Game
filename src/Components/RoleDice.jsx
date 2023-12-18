import React, { useState } from 'react'
import styled from 'styled-components'

const DiceContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    p{
        font-size: 22px;
        font-weight: 500;
    }

    .dice{
        cursor: pointer;
    }
`

export default function RoleDice({currentDice,roleDice}) {

  return (
    <DiceContainer>
        <div className='dice' onClick={roleDice}>
            <img src={`./Images/dice/dice_${currentDice}.png`} alt="Main Frame" />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}
