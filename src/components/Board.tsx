import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styling/Board.css';

export interface BoardProps {
  choices: Choice[];
}

export interface BoardState {
  currentPair: (number | string)[],
  currentPlayer: string,
  score: { player: string, score: number }
}

export type Choice = {
  value: number | string;
  selected: boolean;
};

export default function Board(props: BoardProps, state: BoardState) {
  const { choices } = props;

  const [data, setData] = useState([] as Choice[]);
  const [currentPair, setCurrentPair] = useState([] as Choice[]);

  const location = useLocation();
  const theme = location.state.selectedTheme;
  const gridSize = location.state.selectedGridSize;

  useEffect(() => {
    if (!data.length) {
      initializeData();
    }

    // Always keep the current pair length at 2
    if (currentPair.length === 2) {
      if (isMatched()) {
        let dataToSet = data;
        dataToSet.forEach(choice => {
          if (choice.value === currentPair[0].value || choice.value === currentPair[1].value) {
            choice.selected = true;
          }
        });
        setData(dataToSet);
      }
      reset();
    }

  });

  const initializeData = () => {
    setData(choices);
  }

  const isMatched = () => {
    return currentPair[0].value === currentPair[1].value;
  }

  const handleOnClick = (choice: Choice) => {
    if (currentPair.length < 2) {
      setCurrentPair([...currentPair, choice]);
    }
  }

  const reset = () => {
    setCurrentPair([]);
  }

  return (
    <div className={`container--${gridSize}`}>
      {data.map((choice, index) => {
        return <div
          key={index}
          onClick={() => handleOnClick(choice)}
          className={choice.selected ? "card--selected" : "card"}>{choice.value}</div>
      })}
    </div>
  );
}