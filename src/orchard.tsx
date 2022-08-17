import React from 'react';
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

interface Cards {
  id: number
  img: string
  pos: number
  rotation: Rotation
  trees: Color[]
  inUse: boolean
}


const allCards={
  "elements":[    
  {
      "id":1,
      "img":"img/1.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[2,1,1,2,3,3],
      "inUse": false
  },

  {
      "id":2,
      "img":"img/2.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[1,2,1,2,3,3],
      "inUse": false
  },

  {
      "id":3,
      "img":"img/3.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[2,1,3,3,1,2],
      "inUse": false
  },
  {
      "id":4,
      "img":"img/4.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[1,2,3,3,1,2],
      "inUse": false   
  },
  {
      "id":5,
      "img":"img/5.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[1,3,2,2,3,1],
      "inUse": false   
  },
  {
      "id":6,
      "img":"img/6.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[3,1,2,2,3,1],
      "inUse": false   
  },
  {
      "id":7,
      "img":"img/7.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[3,1,3,2,1,2],
      "inUse": false   
  },
  {
      "id":8,
      "img":"img/8.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[3,1,2,3,1,2],
      "inUse": false   
  },
  {
      "id":9,
      "img":"img/9.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[2,3,2,1,3,1],
      "inUse": false   
  },
  {
      "id":10,
      "img":"img/10.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[2,3,1,2,3,1],
      "inUse": false   
  },
  {
      "id":11,
      "img":"img/11.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[2,2,1,3,3,1],
      "inUse": false   
  },
  {
      "id":12,
      "img":"img/12.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[2,2,1,3,1,3],
      "inUse": false   
  },
  {
      "id":13,
      "img":"img/13.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[1,2,1,3,2,3],
      "inUse": false   
  },
  {
      "id":14,
      "img":"img/14.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[1,2,3,1,2,3],
      "inUse": false   
  },
  {
      "id":15,
      "img":"img/15.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[3,2,1,1,2,3],
      "inUse": false   
  },
  {
      "id":16,
      "img":"img/16.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[2,3,1,1,2,3],
      "inUse": false   
  },
  {
      "id":17,
      "img":"img/17.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[1,1,3,2,2,3],
      "inUse": false   
  },
  {
      "id":18,
      "img":"img/18.png",
      "pos":[777,777,777,777,777,777],
      "rotation":1,
      "trees":[1,1,3,2,3,2],
      "inUse": false   
  }
  ]
}
var lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
lista = lista.sort(function() {return Math.random() - 0.5});

let miarray = lista.slice(0,9);
let arrayrandon = new Array;
var cards=allCards.elements.filter(z=>miarray.includes(z.id));

class Square extends React.Component<{id:number, cards:any,cardsColor: number[],cardsPos: number[] }, { }> {
   imag: string = "";
    render() {
      cards.filter(x=>x.pos.includes(this.props.id)).forEach(x=>this.props.cardsPos.push(x.pos.indexOf(this.props.id)));
      cards.filter(x=>x.pos.includes(this.props.id)).forEach(x=>this.props.cardsColor.push(x.trees[x.pos.indexOf(this.props.id)]));

      if(this.props.cardsColor.includes(1)){this.imag="https://i.imgur.com/mAt0iKU.png"}else{
      if(this.props.cardsColor.includes(2)){this.imag="https://i.imgur.com/XRzjdo1.png"}else{
      if(this.props.cardsColor.includes(3)){this.imag="https://i.imgur.com/DG3Gczr.png"}else{
       this.imag="https://th.bing.com/th/id/R.ff76d7863a19d037b34a03c4449178dd?rik=%2b8NPZfWI%2b5nSvw&riu=http%3a%2f%2fwww.imagemagick.org%2fUsage%2fcanvas%2ftrans_fx.png&ehk=IpCH9l8aG%2fvQURdHBHC68epCBqosqIVPywATeVcMTdE%3d&risl=&pid=ImgRaw&r=0"
      }
    }}
      return (
        <button className="square">
           {<img src={this.imag} height ="67" width="67" alt=''/>}
        </button>
      );
    }
  }

class Board extends React.Component<{cards:any }, { }> {
  renderSquare(i:number) {
    return <Square id={i} cards={cards} cardsColor={new Array} cardsPos={new Array}/>;
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

  function changePosition(newIndex: number) {
    const beingUsed = cards.filter((card) => {
      return card.inUse === true;
    });

    if (beingUsed.length != 0)
    {
      const oldIndex = cards.indexOf(beingUsed[0]);
      cards[oldIndex].pos = [777,777,777,777,777,777];
      cards[oldIndex].inUse = false;
    }

    cards[newIndex].pos = [65,66,77,78,89,90];
    cards[newIndex].inUse = true;
    return cards
  }

  class Game extends React.Component {
    render() {
      return (

        <div className="game">
           <p id='title'>ORCHARD</p>
          <div className="game-board">
            <Board cards={cards}/>
          </div>
          <div className="game-info"> 
           
          </div>
        
          <div className='cards'>{
              <ul id='lista1'>{cards.filter(z=>z.inUse==false).map(z=>{
                return(
                  <div>
                  <img src={z.img} alt="Site Logo" width={140
                  } onClick={() => this.setState(changePosition(cards.indexOf(z)))}></img>
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