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
  "elements":[    
  {
      "id":1,
      "img":"img/1.png",
      "pos":null,
      "rotation":1,
      "trees":[2,1,1,2,3,3]   
  },

  {
      "id":2,
      "img":"img/2.png",
      "pos":null,
      "rotation":1,
      "trees":[1,2,1,2,3,3]   
  },

  {
      "id":3,
      "img":"img/3.png",
      "pos":null,
      "rotation":1,
      "trees":[2,1,3,3,1,2]   
  },
  {
      "id":4,
      "img":"img/4.png",
      "pos":null,
      "rotation":1,
      "trees":[1,2,3,3,1,2]   
  },
  {
      "id":5,
      "img":"img/5.png",
      "pos":null,
      "rotation":1,
      "trees":[1,3,2,2,3,1]   
  },
  {
      "id":6,
      "img":"img/6.png",
      "pos":null,
      "rotation":1,
      "trees":[3,1,2,2,3,1]   
  },
  {
      "id":7,
      "img":"img/7.png",
      "pos":null,
      "rotation":1,
      "trees":[3,1,3,2,1,2]   
  },
  {
      "id":8,
      "img":"img/8.png",
      "pos":null,
      "rotation":1,
      "trees":[3,1,2,3,1,2]   
  },
  {
      "id":9,
      "img":"img/9.png",
      "pos":null,
      "rotation":1,
      "trees":[2,3,2,1,3,1]   
  },
  {
      "id":10,
      "img":"img/10.png",
      "pos":null,
      "rotation":1,
      "trees":[2,3,1,2,3,1]   
  },
  {
      "id":11,
      "img":"img/11.png",
      "pos":null,
      "rotation":1,
      "trees":[2,2,1,3,3,1]   
  },
  {
      "id":12,
      "img":"img/12.png",
      "pos":null,
      "rotation":1,
      "trees":[2,2,1,3,1,3]   
  },
  {
      "id":13,
      "img":"img/13.png",
      "pos":null,
      "rotation":1,
      "trees":[1,2,1,3,2,3]   
  },
  {
      "id":14,
      "img":"img/14.png",
      "pos":null,
      "rotation":1,
      "trees":[1,2,3,1,2,3]   
  },
  {
      "id":15,
      "img":"img/15.png",
      "pos":null,
      "rotation":1,
      "trees":[3,2,1,1,2,3]   
  },
  {
      "id":16,
      "img":"img/16.png",
      "pos":null,
      "rotation":1,
      "trees":[2,3,1,1,2,3]   
  },
  {
      "id":17,
      "img":"img/17.png",
      "pos":null,
      "rotation":1,
      "trees":[1,1,3,2,2,3]   
  },
  {
      "id":18,
      "img":"img/18.png",
      "pos":null,
      "rotation":1,
      "trees":[1,1,3,2,3,2]   
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
            <ul>{cards.elements.map(z=>{
              return(<li value={z.id}>
                <p>{z.id}</p>
                <img src={z.img} alt="Site Logo" width={70}></img>
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