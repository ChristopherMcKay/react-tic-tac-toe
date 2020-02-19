import React from 'react';
import { Provider } from 'react-redux';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Game from './Game';
import StartPage from './StartPage';

import store from '../store';

configure({adapter: new Adapter()});

describe('<Game />', () => {

    it("Should create <Game /> component", () => {
        const game = shallow(<Provider store={store}> <Game /> </Provider>);
        expect(game).toBeTruthy();
    });

    it("Should render <StartPage /> if both players haven't been chosen", () => {
        const game = shallow(<Provider store={store}> <Game /> </Provider>);
        expect(game.find(StartPage)).toBeTruthy();
    });

})