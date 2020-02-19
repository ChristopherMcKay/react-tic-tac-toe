import React from 'react';
import { useSelector } from 'react-redux';

const Player = ({ player, playerNum }) => {

    const { playerOneNext, winner, draw } = useSelector(state => state.game);

    return (
        <div className="player-div">
            <img src={player.imgSrc} width={150} alt="character" />
            <p>{player.name}</p>
            <p>{playerNum === 1 ? 'Player One - X' : 'Player Two - O'}</p>

            <p className="turn-text">{playerNum === 1 && playerOneNext === true && !winner && !draw  ? 'Your Turn' : null }</p>
            <p className="turn-text">{playerNum === 2 && playerOneNext === false && !winner && !draw  ? 'Your Turn' : null }</p>
        </div>
    )
};

export default Player;