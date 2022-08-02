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
  pos: number[] 
  rotation: Rotation
  trees: Color[]
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
          <div className="status">{}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
           
            {this.renderSquare(6)}
            {this.renderSquare(7)}
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
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            
          </div>
          <div className="board-row">
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
          </div>
          <div className="board-row">
            {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
          </div>
          <div className="board-row">
            {this.renderSquare(30)}
            {this.renderSquare(31)}
            {this.renderSquare(32)}
            {this.renderSquare(33)}
            {this.renderSquare(34)}
            {this.renderSquare(35)}
          </div>
          
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
           <p id='title'>ORCHARD</p>
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info"> 
           
          </div>
        
          <div className='cards'>{
              
              <ul id='lista1'>{cards.elements.map(z=>{
                return(
                  
                  <img src={z.img} alt="Site Logo" width={140
                  }></img>
                )
              })
              }</ul>
              }</div>
        </div>
        
      );
    }
  }
  
  // ========================================
  export default Game;