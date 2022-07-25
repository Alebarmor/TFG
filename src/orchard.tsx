import React from 'react';
import { readJsonConfigFile } from 'typescript';
import './index.css'; 

enum Rotation {
  Up = 1,
  Right,
  Down,
  Left,
}

enum Color { 
  Red = 1,
  Purple,
  Yellow,
}

interface Card {
  id: number
  img: string
  pos: number[] // solo hace falta una posición y esta coincide con la casilla
  rotation: Rotation
  trees: Color[]
}

interface Tree {  //¿Se podría cambiar por color simplemente?
  id: number //creo que el id no hace falta porque todos los rojos son iguales, todos los morados son iguales ...
  color: Color
  //die?: number // Dado (opcional)  // yo lo quitaba de aquí y lo ponia en square
}

var cards={
  "cards":[    
  {
      "id":1,
      "img":"fe",
      "pos":null,
      "rotation":1,
      "trees":[1,2,3,1,2,3]   
  },

  {
      "id":2,
      "img":"ee",
      "pos":null,
      "rotation":1,
      "trees":[1,2,3,1,2,3]   
  },

  {
      "id":3,
      "img":"as",
      "pos":null,
      "rotation":1,
      "trees":[1,2,3,1,2,3]   
  },
  {
      "id":4,
      "img":"ce",
      "pos":null,
      "rotation":1,
      "trees":[1,2,3,1,2,3]   
  }
  ]
}

class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {/* TODO */}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i:number) {
      return <Square />;
    }
  
    render() {
      const status = 'Next player: X';
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
          </div>
          <div className="board-row">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
          </div>
          <div className="board-row">
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
          </div>
          <div className="board-row">
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */
            <ul>{cards.cards.map(z=>{
              return(<li value={z.id}>
                <p>{z.id}</p>
                <p>{z.img}</p>
              </li>)
            })
            }</ul>
            }</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  export default Game;