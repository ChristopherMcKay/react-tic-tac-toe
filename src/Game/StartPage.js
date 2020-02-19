import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './reducer';

const StartPage = () => {

    const dispatch = useDispatch();

    const { characters, playerOne } = useSelector(state => state.game);

    const selectChar = (char, index) => {
        if(!playerOne) {
            let obj = {
                char: char,
                index: index
            }
            dispatch(actions.setPlayerOne(obj));
        }
        else {
            dispatch(actions.setPlayerTwo(char));
        }
    }

    const generateChars = () => {
        return characters.map((char, index) => {
            return (
                <div key={index}>
                    <img src={char.imgSrc} width={140} onClick={() => selectChar(char, index)} alt="character" />
                    <p>{char.name}</p>
                </div>
                
            )
        })
    }

    const player = playerOne ? 'Player Two' : 'Player One'

    return (
        <div className="player-div">
            <p style={{fontSize: '18px'}}>{player}</p>
            <p>Choose a character</p>
            <div className="char-div">
                {generateChars()}
            </div>
        </div>
    )
};

export default StartPage;