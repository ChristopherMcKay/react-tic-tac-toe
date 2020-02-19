import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    characters: [
        { name: 'Conor McGreggor', imgSrc: 'https://specials-images.forbesimg.com/imageserve/5cfe6efc34a5c4000847f16a/416x416.jpg?background=000000&cropX1=1251&cropX2=4026&cropY1=875&cropY2=3648' },

        { name: 'Abraham Lincoln', imgSrc: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU5MDUzMTE0Mzk2MTI0OTUy/abraham-lincoln-1809---18652c-sixteenth-president-of-the-united-states-of-america-photo-by-stock-montagestock-montagegetty-images_promo.jpg' },

        { name: 'The Rock', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5-r8d6CrRyVOaE3-mGiS3_ubXqyreo7bTmYfcjFdnqphqQvk1' },

        { name: 'Anonymous', imgSrc: 'https://sophosnews.files.wordpress.com/2013/11/anon-250.png' }, 
    ],
    playerOne: null,
    playerTwo: null,
    playerOneNext: true,
    winner: null,
    draw: false,
    squares: Array(9).fill(null)
};

const slice = createSlice({
    name: 'game',
    initialState,
        reducers: {
    setPlayerOne: (state, action) => {
        const playerOne = action.payload.char;
        let index = action.payload.index;

        let updatedChars = Array.from(initialState.characters);
        updatedChars.splice(index, 1);

        state.playerOne = playerOne;
        state.characters = updatedChars;
    },
    setPlayerTwo: (state, action) => {
        const playerTwo = action.payload;
        state.playerTwo = playerTwo;
    },
    togglePlayer: (state, action) => {
        const playerOneNext = action.payload;
        state.playerOneNext = playerOneNext;
    },
    setWinner: (state, action) => {
        const winner = action.payload;
        state.winner = winner;
    },
    setSquares: (state, action) => {
        const squares = action.payload;
        state.squares = squares;
    },
    setDraw: (state) => {
        state.draw = true;
    },
    restartGame: (state) => {
        let copy = Object.assign({}, initialState);

        state.characters = copy.characters;
        state.playerOne = copy.playerOne;
        state.playerTwo = copy.playerTwo;
        state.playerOneNext = copy.playerOneNext;
        state.winner = copy.winner;
        state.squares = copy.squares;
    },
}
});

export const { reducer, actions } = slice;