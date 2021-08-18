// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const app = document.getElementById('app')
const boardElement = document.getElementById('board')
const resetButton = document.getElementById('reset')

// initialize variables
const ROW_COUNT = 3;
const COL_COUNT = 3;

type Cell = "X" | "O" | ""

type TicTacToeBoard = [
  [Cell, Cell, Cell],
  [Cell, Cell, Cell],
  [Cell, Cell, Cell]
]

const boardState: TicTacToeBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]

// create cell

const createCell = (row: number, col: number, content: Cell) => {
  const cell = document.createElement('button');
  cell.setAttribute('data-row', row.toString())
  cell.setAttribute('data-col', col.toString())
  cell.setAttribute('data-content', content)
  cell.classList.add('cell')
  return cell
}

// render board

const renderBoard = () => {
  if(!boardElement) throw new Error('No board element')
  boardElement.innerHTML = '';
  for (let i = 0; i < ROW_COUNT; i++) {
    for (let j = 0; j < COL_COUNT; j++) {
      boardElement.appendChild(createCell(i, j, boardState[i][j]))
    }
  }
}


const init = () => {
  renderBoard()
}

init()





