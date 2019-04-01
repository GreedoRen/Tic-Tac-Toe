import React, { Component } from 'react';
import Board from './components/Board';
import cloneDeep from 'lodash.clonedeep';

const ROWS = 3;
const COLUMNS = 3;
const ROW_ARR = new Array(ROWS).fill('');
const COL_ARR = new Array(COLUMNS).fill('');
const GRID = ROW_ARR.map(x => COL_ARR.slice());


class App extends Component {
  state = {
    grid: cloneDeep(GRID)
  }

  render() {
    const {grid} = this.state;
    return (
      <div className='App'>
        <h1>Tic-Tac-Toe</h1>
        <Board rows={grid}/>
      </div>
    );
  }
}

export default App;
