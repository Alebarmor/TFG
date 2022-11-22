import React from 'react';
import {cards} from './orchard';
import { calScoreId } from './functions';

class Square extends React.Component<{id:number, cards:any}, { }> {
    img: string = "";
    rotation: number = 0;
  
      render() {
        var cardsInPositionOrdered = cards.filter(x => x.pos.includes(this.props.id)).sort((x,b) => {return b.turn-x.turn});
        var upperCard = cardsInPositionOrdered[0];
        var cardPos = 0;
        var cardColor = 0;
        if (upperCard !== undefined) {
          cardPos = upperCard.pos.indexOf(this.props.id)
          cardColor = upperCard.trees[cardPos];
          this.rotation = upperCard.rotation;
        }
        
        cardColor !== 0? this.img = "img/" + cardColor + "." + cardPos + ".png" : this.img = "img/blank.ico";
  
        var stack = calScoreId(this.props.id);
        var dicePng = "";
        stack >=1? dicePng = "img/dado-" + cardColor + "-" + stack + ".png" : dicePng = "img/blank.ico";
  
        var rotationHtml = "";
        var classHtml = "";
  
        //rotten
        if (calScoreId(this.props.id) === 0 && cardsInPositionOrdered.length >= 2) {
          dicePng = "img/rotten.png";
        }
  
        switch (this.rotation) {
          case 2: rotationHtml = "rotate(90deg)"; break;
          case 3: rotationHtml = "rotate(180deg)"; break;
          case 4: rotationHtml = "rotate(270deg)"; break;
          default: rotationHtml = "none"; break;
        }
  
        if (upperCard !== undefined) {
          if (upperCard.inUse === true) {
            classHtml = 'blink_me';
          }
        } else {
          classHtml = 'none';
        }
  
        return (
          <button className="square">
            {<img className={classHtml} src={dicePng} width="55" alt='' style={{ position:'absolute', zIndex:'3' }} /> }
            {<img className={classHtml} src={this.img} height ="55" width="55" alt='' style={{transform:rotationHtml, position:'relative', zIndex:'2'}}/>}
          </button>
        );
      }
    }

    export default Square;