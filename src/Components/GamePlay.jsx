import React from 'react'
import Score from './Score'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutlinedButton } from '../styled/Button'
import Rules from './Rules'

const MainContainer = styled.main`
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin-left: 5px;
    }

    .btns{
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-right: 220px;
    }
`

export default function GamePlay() {
    const [score,setScore] = useState(0);
    const [selectedNumber,setSelectedNumber] = useState();
    const [currentDice,setCurrentDice] = useState(1)
    const [error,setError] = useState();
    const [showRules, setShowRules] = useState(false);
    
    const generateRandomNumber = (min, max) => { //? Function to generate random number
        return Math.floor( Math.random() * (max - min) + min);
    }

    const roleDice = () => {
        setCurrentDice(generateRandomNumber(1,7));

        if (!selectedNumber) {
            setError("You have not selected any number");
            return; //? If Number will not be selected then return only function!
        }
        setError();

        if (selectedNumber == setCurrentDice) {
            setScore((prev) => prev + setCurrentDice);
        }else{
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    }

    const resetScore = () => {
        setScore(0);
    }

  return (
    <MainContainer>
        <div className='top_section'>
            <Score score={score}/>
            <NumberSelector error={error} setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber}/>
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        <div className="btns">
            <OutlinedButton onClick={resetScore}>Reset Score</OutlinedButton>
            <Button onClick={() => setShowRules((prev) => !prev)}>
                {showRules ? "Hide" : "Show"} Rules
            </Button>
        </div>
        {showRules && <Rules />}
    </MainContainer>
  )
}
