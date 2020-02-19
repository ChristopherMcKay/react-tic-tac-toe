import React from 'react';
import Board from './Board';
import StartPage from './StartPage';
import Player from './Player';
import Restart from './Restart';

import { actions } from './reducer';
import { useSelector, useDispatch } from 'react-redux';

const Game = () => {

    const { playerOne, playerTwo, winner, squares, draw } = useSelector(state => state.game);

    const dispatch = useDispatch();

    const getStatus = () => {
        if (winner) {
            return ("Winner: " + winner.name);
        }
        else if (isBoardFull(squares)) {
            return "Draw!";
        } 
    }

    const isBoardFull = (squares) => {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] == null) {
            return false;
            }
        }
        dispatch(actions.setDraw());
        return true;
    }

    const renderRestartButton = () => {
        if(winner || draw) {
            return (
                <Restart
                onClick={() => {
                dispatch(actions.restartGame());
                }}
            />
            );
        }       
    }

    return (
        <React.Fragment>

            { playerTwo ?
                <React.Fragment>
                    <div className="container">
                    <div style={{display: 'flex', justifyContent: 'space-around', width: '90%'}}>
                        <Player player={playerOne} playerNum={1} />
                        <Board /> 
                        <Player player={playerTwo} playerNum={2} />
                    </div>

                    </div>
                    <div>
                        <div className="game-info">{getStatus()}</div>
                        <div className="restart-button">{renderRestartButton()}</div>
                    </div>
                </React.Fragment>

            : <div className="container">
                    <StartPage />
            </div> }

        </React.Fragment>
    )
};

export default Game;