import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (!props.isSelected ? 'black' : 'white')};
  cursor: pointer; //? Add cursor style for better UX
`;

const NumSelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;

    .flex {
        display: flex;
        gap: 18px;
    }

    p {
        font-size: 20px;
    }

    .error{
        color: red; //? Style for error text
    }
`;

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError('');
  };

  return (
    <NumSelectContainer>
      {error && <p className="error">{error}</p>}
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumSelectContainer>
  );
};

export default NumberSelector;