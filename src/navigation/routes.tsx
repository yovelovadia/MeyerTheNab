// import {Menu, GameScreen} from '../screens';
import {Menu, GameScreen} from '../screens';
import React from 'react';

interface Route {
  [key: string]: {
    name: string;
    component: React.FC<any>;
  };
}

const createRoutes = <T extends Route>(arg: T): T => arg;

const routes = createRoutes({
  menu: {
    name: 'menu',
    component: Menu,
  },
  game: {
    name: 'game',
    component: GameScreen,
  },
  leaderBoards: {
    name: 'leaderBoards',
    component: GameScreen,
  },
  gameOver: {
    name: 'gameOver',
    component: GameScreen,
  },
});

export default routes;
