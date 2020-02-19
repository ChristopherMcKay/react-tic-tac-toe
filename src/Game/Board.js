import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './reducer';

import Square from './Square';

const Board = () => {

  const { playerOneNext, winner, playerOne, playerTwo, squares } = useSelector(state => state.game);

  const dispatch = useDispatch();

  const playerSymbol = playerOneNext ? 'X' : 'O' ;

  useEffect(() => {
    const calculateWinner = (squares) => {
      const possibleLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < possibleLines.length; i++) {
        const [a, b, c] = possibleLines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          if(squares[a] === 'X') {
            dispatch(actions.setWinner(playerOne));
          }
          else {
            dispatch(actions.setWinner(playerTwo));
          }
        }
      }
      return null;
  }

  calculateWinner(squares);

  }, [squares, dispatch, playerOne, playerTwo]);

    const renderSquare = (i) => {
        return <Square
          value={squares[i]}
          onClick={() => {

            if (squares[i] != null || winner != null) {
                return;
            }

            const nextSquares = squares.slice();
            nextSquares[i] = playerSymbol;
          
            dispatch(actions.setSquares(nextSquares));
            dispatch(actions.togglePlayer(!playerOneNext));
          }}
        />;
      }

      return ( 
          <div className="game">
            <div className="game-board">
              <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
              </div>
              <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
              </div>
              <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
              </div>
            </div>
          </div>
      );
  }

  export default Board;