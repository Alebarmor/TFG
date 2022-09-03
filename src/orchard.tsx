import React from 'react';
import allCards from './cards_data';
//import { readJsonConfigFile } from 'typescript';
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

const gameData={
  "elements":[    
  {
      "score":0,
      "turn":1,
  }
  ]
}

class Board extends React.Component<{cards:any }, { }> {
  renderSquare(i:number) {
    return <Square id={i} cards={cards} cardsColor={new Array} cardsPos={new Array} cardsRot={new Array} />;
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
            {this.renderSquare(30)}
            {this.renderSquare(31)}
            {this.renderSquare(32)}
            {this.renderSquare(33)}
            {this.renderSquare(34)}
            {this.renderSquare(35)}
          </div>
          <div className="board-row">
            {this.renderSquare(36)}
            {this.renderSquare(37)}
            {this.renderSquare(38)}
            {this.renderSquare(39)}
            {this.renderSquare(40)}
            {this.renderSquare(41)}
            {this.renderSquare(42)}
            {this.renderSquare(43)}
            {this.renderSquare(44)}
            {this.renderSquare(45)}
            {this.renderSquare(46)}
            {this.renderSquare(47)}
          </div>
          <div className="board-row">
            {this.renderSquare(48)}
            {this.renderSquare(49)}
            {this.renderSquare(50)}
            {this.renderSquare(51)}
            {this.renderSquare(52)}
            {this.renderSquare(53)}
            {this.renderSquare(54)}
            {this.renderSquare(55)}
            {this.renderSquare(56)}
            {this.renderSquare(57)}
            {this.renderSquare(58)}
            {this.renderSquare(59)}
          </div>
          <div className="board-row">
            {this.renderSquare(60)}
            {this.renderSquare(61)}
            {this.renderSquare(62)}
            {this.renderSquare(63)}
            {this.renderSquare(64)}
            {this.renderSquare(65)}
            {this.renderSquare(66)}
            {this.renderSquare(67)}
            {this.renderSquare(68)}
            {this.renderSquare(69)}
            {this.renderSquare(70)}
            {this.renderSquare(71)}
          </div>
          <div className="board-row">
            {this.renderSquare(72)}
            {this.renderSquare(73)}
            {this.renderSquare(74)}
            {this.renderSquare(75)}
            {this.renderSquare(76)}
            {this.renderSquare(77)}
            {this.renderSquare(78)}
            {this.renderSquare(79)}
            {this.renderSquare(80)}
            {this.renderSquare(81)}
            {this.renderSquare(82)}
            {this.renderSquare(83)}
          </div>
          <div className="board-row">
            {this.renderSquare(84)}
            {this.renderSquare(85)}
            {this.renderSquare(86)}
            {this.renderSquare(87)}
            {this.renderSquare(88)}
            {this.renderSquare(89)}
            {this.renderSquare(90)}
            {this.renderSquare(91)}
            {this.renderSquare(92)}
            {this.renderSquare(93)}
            {this.renderSquare(94)}
            {this.renderSquare(95)}
          </div>
          <div className="board-row">
            {this.renderSquare(96)}
            {this.renderSquare(97)}
            {this.renderSquare(98)}
            {this.renderSquare(99)}
            {this.renderSquare(100)}
            {this.renderSquare(101)}
            {this.renderSquare(102)}
            {this.renderSquare(103)}
            {this.renderSquare(104)}
            {this.renderSquare(105)}
            {this.renderSquare(106)}
            {this.renderSquare(107)}
          </div>
          <div className="board-row">
            {this.renderSquare(108)}
            {this.renderSquare(109)}
            {this.renderSquare(110)}
            {this.renderSquare(111)}
            {this.renderSquare(112)}
            {this.renderSquare(113)}
            {this.renderSquare(114)}
            {this.renderSquare(115)}
            {this.renderSquare(116)}
            {this.renderSquare(117)}
            {this.renderSquare(118)}
            {this.renderSquare(119)}
          </div>
          <div className="board-row">
            {this.renderSquare(120)}
            {this.renderSquare(121)}
            {this.renderSquare(122)}
            {this.renderSquare(123)}
            {this.renderSquare(124)}
            {this.renderSquare(125)}
            {this.renderSquare(126)}
            {this.renderSquare(127)}
            {this.renderSquare(128)}
            {this.renderSquare(129)}
            {this.renderSquare(130)}
            {this.renderSquare(131)}
          </div>
          <div className="board-row">
            {this.renderSquare(132)}
            {this.renderSquare(133)}
            {this.renderSquare(134)}
            {this.renderSquare(135)}
            {this.renderSquare(136)}
            {this.renderSquare(137)}
            {this.renderSquare(138)}
            {this.renderSquare(139)}
            {this.renderSquare(140)}
            {this.renderSquare(141)}
            {this.renderSquare(142)}
            {this.renderSquare(143)}
          </div>
          <div className="board-row">
            {this.renderSquare(144)}
            {this.renderSquare(145)}
            {this.renderSquare(146)}
            {this.renderSquare(147)}
            {this.renderSquare(148)}
            {this.renderSquare(149)}
            {this.renderSquare(150)}
            {this.renderSquare(151)}
            {this.renderSquare(152)}
            {this.renderSquare(153)}
            {this.renderSquare(154)}
            {this.renderSquare(155)}
          </div>
          
        </div>
      );
    }
  }



var lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
lista = lista.sort(function() {return Math.random() - 0.5});

let miarray = lista.slice(0,9);
var cards=allCards.elements.filter(z=>miarray.includes(z.id));
var game = gameData.elements

class Square extends React.Component<{id:number, cards:any, cardsColor: number[], cardsPos: number[], cardsRot: number[] }, { }> {
   imag: string = "";
    render() {
      this.props.cardsPos.length=0;
      this.props.cardsColor.length=0;
      this.props.cardsRot.length=0;
      cards.filter(x=>x.pos.includes(this.props.id)).forEach(x=>this.props.cardsPos.push(x.pos.indexOf(this.props.id)));
      cards.filter(x=>x.pos.includes(this.props.id)).forEach(x=>this.props.cardsColor.push(x.trees[x.pos.indexOf(this.props.id)]));
      cards.filter(x=>x.pos.includes(this.props.id)).forEach(x=>this.props.cardsRot.push(x.rotation));

      if(this.props.cardsColor.includes(1)){this.imag="img/1."+this.props.cardsPos[0]+".png"}else{
      if(this.props.cardsColor.includes(2)){this.imag="img/2."+this.props.cardsPos[0]+".png"}else{
      if(this.props.cardsColor.includes(3)){this.imag="img/3."+this.props.cardsPos[0]+".png"}else{
       this.imag="img/blank.ico"
      }

    }}
    if(this.props.cardsRot.includes(1)||this.props.cardsRot.length==0){   
      return (
        <button className="square">
           {<img src={this.imag} height ="66" width="66" alt='' />}
        </button>
      );
    }

    if(this.props.cardsRot.includes(2)){   
      return (
        <button className="square">
           {<img src={this.imag} height ="66" width="66" alt='' style={{transform: "rotate(90deg)"}} />}
        </button>
      );
    }

    if(this.props.cardsRot.includes(3)){   
      return (
        <button className="square">
           {<img src={this.imag} height ="66" width="66" alt='' style={{transform: "rotate(180deg)"}} />}
        </button>
      );
    }

    if(this.props.cardsRot.includes(4)){   
      return (
        <button className="square">
           {<img src={this.imag} height ="66" width="66" alt='' style={{transform: "rotate(270deg)"}} />}
        </button>
      );
    }
    
  }
  }

  function indexOfCardInUse() {
    const beingUsed = cards.filter((card) => {
      return card.inUse === true;
    });

    var index;

    if (beingUsed.length != 0) {
      index = cards.indexOf(beingUsed[0]);
    } else {
      index = 999;
    }

    return index
  }


  function putCardIntoUse(newCardIndex: number) { // Este método comprueba si se está usando alguna carta:
    if (indexOfCardInUse() !== 999)               // en caso afirmativo, devuelve el índice la carta en
    {                                             // uso; en caso negativo, devuelve 999.
      cards[indexOfCardInUse()].pos = [777,777,777,777,777,777]; // Posición origen
      cards[indexOfCardInUse()].rotation = 1;
      cards[indexOfCardInUse()].inUse = false;
    }

    cards[newCardIndex].pos = [65,66,77,78,89,90]; // Posición en el centro del tablero
    cards[newCardIndex].inUse = true;
    return cards
  }

  function move(direction: string) {
    if (indexOfCardInUse() !== 999)
    {
      var pos = cards[indexOfCardInUse()].pos;
      var res = pos;

      var hrz = [1,1,1,1,1,1];       // Vector de movimiento horizontal
      var vert = [12,12,12,12,12,12] // Vector de movimiento vertical

      let limitHrz1 = pos[0]%12;  // En base al módulo base 12 de la posición de dos árboles (el primero y el
      let limitHrz2 = pos[5]%12;  // último), podemos determinar si ha tocado alguna de las paredes horizontales,
                                  // independientemente de la rotación en la que se encuentre la carta
      switch (direction) {

        case "right":
          if (limitHrz1 !== 11 && limitHrz2 !== 11) {
            for(let i = 0; i < pos.length; i++){
              res[i] = pos[i] + hrz[i];
            }
          }
          break;

        case "left":
          if (limitHrz1 !== 0 && limitHrz2 !== 0) {
            for(let i = 0; i < pos.length; i++){
              res[i] = pos[i] - hrz[i];
            }
          }
          break;

        case "up":
          if (pos[0]-12 >= 0 && pos[5]-12 >= 0) { // Para los límites verticales, con sumar o restar una fila,
            for(let i = 0; i < pos.length; i++){  // podemos saber si se pasa de abajo o arriba, respectivamente
              res[i] = pos[i] - vert[i];
            }
          }
          break;

        case "down":
          if (pos[0]+12 < 156 && pos[5]+12 < 156) {
            for(let i = 0; i < pos.length; i++){
              res[i] = pos[i] + vert[i];
            }
          }
          break;
      }

      cards[indexOfCardInUse()].pos = res;
    }

    return cards
  }

  function rotate() {
    if (indexOfCardInUse() !== 999)
    {
      var pos = cards[indexOfCardInUse()].pos;
      var res = cards[indexOfCardInUse()].pos;
      let rotation = cards[indexOfCardInUse()].rotation;
      let i;

      var vert2hrz = [0,11,-13,-2,-26,-15];
      var hrz2vert = [0,-13,-11,-24,-22,-35];

      switch(rotation) {
        
        case 1:
          if (pos[0]%12 == 0 || pos[0]%12 == 1) {
            for(i = 0; i < pos.length; i++){
              res[i] = pos[i] - vert2hrz[pos.length - i - 1];
            }
          } else {
            for(i = 0; i < pos.length; i++){
              res[i] = pos[i] + vert2hrz[i];
            }
          }
          break;
        
        case 2:
          if (pos[0]-24 < 0) {
            for(i = 0; i < pos.length; i++){
              res[i] = pos[i] - hrz2vert[pos.length - i - 1];
            }
          } else {
            for(i = 0; i < pos.length; i++){
              res[i] = pos[i] + hrz2vert[i];
            }
          }
          break;

        case 3:
          if (pos[0]%12 == 11 || pos[0]%12 == 10) {
            for(i = 0; i < pos.length; i++){
              res[i] = pos[i] + vert2hrz[pos.length - i - 1];
            }
          } else {
            for(i = 0; i < pos.length; i++){
              res[i] = pos[i] - vert2hrz[i];
            }
          }
          break;
        
        case 4:
          if (pos[4]+24 >= 156) {
            for(i = 0; i < pos.length; i++){
              res[i] = pos[i] + hrz2vert[pos.length - i - 1];
            }
          } else {
            for(i = 0; i < pos.length; i++){
              res[i] = pos[i] - hrz2vert[i];
            }
          }
          break;
      }

      cards[indexOfCardInUse()].pos = res;
      
      if (rotation == 4) {
        cards[indexOfCardInUse()].rotation = 1;
      } else {
        cards[indexOfCardInUse()].rotation = rotation + 1;
      }

    }

    return cards
  }

  function colocate() {
    if (indexOfCardInUse() != 999)
    {
      cards[indexOfCardInUse()].inUse = false;
      cards[indexOfCardInUse()].used = true;
      cards[indexOfCardInUse()].turn = game[0].turn
      game[0].turn += 1
    }

    return cards
  }

  class Game extends React.Component {
    render() {
      return (

        <div className="game">
          <p id='title'>ORCHARD</p>

          <div className="upper-zone">
            <div className="game-board">
              <Board cards={cards}/>
            </div>
            
            <div className="buttons">
              <button name="up" onClick={() => this.setState(move("up"))}><img src="img/up.png" height="60"/></button>
              <button name="down" onClick={() => this.setState(move("down"))}><img src="img/down.png" height="60"/></button>
              <button name="left" onClick={() => this.setState(move("left"))}><img src="img/left.png" height="60"/></button>
              <button name="right" onClick={() => this.setState(move("right"))}><img src="img/right.png" height="60"/></button>
              <button name="rotate" onClick={() => this.setState(rotate)}><img src="img/rotate.png" height="60"/></button>
              <button name="colocate" onClick={() => this.setState(colocate)}>COLOCAR CARTA</button>
            </div>
          </div>

          <div className="game-info"> 
            
          </div>

          <div className='cards'>{
              <ul id='lista1'>{cards.filter(z=>z.inUse==false&&z.used==false).map(z=>{
                return(
                  <div>
                  <img src={z.img} alt="Site Logo" width={140
                  } onClick={() => this.setState(putCardIntoUse(cards.indexOf(z)))}></img>
                  </div>
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