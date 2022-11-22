import {cards, game } from './orchard';

function indexOfCardInUse() {
    const beingUsed = cards.filter((card) => {
      return card.inUse === true;
    });

    var index;

    if (beingUsed.length !== 0) {
      index = cards.indexOf(beingUsed[0]);
    } else {
      index = 999;
    }

    return index
  }

  function putCardIntoUse(newCardIndex: number) { // Este método comprueba si se está usando alguna carta: en caso afirmativo,
    var index = indexOfCardInUse();             // devuelve el índice la carta en uso; en caso negativo, devuelve 999.

    if (index !== 999) {             
      cards[index].pos = [777,777,777,777,777,777]; // Posición origen
      cards[index].rotation = 1;
      cards[index].turn = 0;
      cards[index].inUse = false;
    }

    game[0].turn===1?cards[newCardIndex].pos = [65,66,77,78,89,90]:cards[newCardIndex].pos = [62,63,74,75,86,87];
    
    cards[newCardIndex].turn = game[0].turn;
    cards[newCardIndex].inUse = true;
    return cards
  }

  function move(direction: string) {
    var index = indexOfCardInUse();
    game[0].errorMsg = [];

    if (index !== 999 && game[0].turn !== 1) {
      var pos = cards[index].pos;
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

      cards[index].pos = res;
    } else if (index !== 999 && game[0].turn === 1) {
      game[0].errorMsg = ["You can't move the card!","The first card must be placed in the center."];
    }

    return cards
  }

  function rotate() {
    var index = indexOfCardInUse();
    game[0].errorMsg = [];

    if (index !== 999 && game[0].turn !== 1) {
      var pos = cards[index].pos;
      var res = cards[index].pos;
      let rotation = cards[index].rotation;
      let i;

      var vert2hrz = [0,11,-13,-2,-26,-15];
      var hrz2vert = [0,-13,-11,-24,-22,-35];

      switch(rotation) {
        
        case 1:
          if (pos[0]%12 === 0 || pos[0]%12 === 1) {
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
          if (pos[0]%12 === 11 || pos[0]%12 === 10) {
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

      cards[index].pos = res;
      
      if (rotation === 4) {
        cards[index].rotation = 1;
      } else {
        cards[index].rotation = rotation + 1;
      }

    } else if (index !== 999 && game[0].turn === 1) {
      game[0].errorMsg = ["You can't rotate the card!","The first card must be placed in the center."];
    }

    return cards
  }

  function calScoreId(id:number):number {
    var res = 0;
      var cards2 = cards.filter(x => x.pos.includes(id));
        if (cards2.length > 1) {
          for (let c = 1; c <= 3 ; c++) {
            var cards3 = cards2.filter(x => x.trees[x.pos.indexOf(id)] === c);
            if (cards3.length === cards2.length) {
              var i = cards3.length - 1;
              if (i > 4) {
                i = 4;
              }
              res = game[0].scoreList[i-1];
            }
          }
        }
    
    return res;
  }

  function gethits(id:number):[number[],number[]]{
   var hits = [];
   var card = cards[id];
   for (let index = 0; index <= 5; index++) {
    if(cards.filter(x=>x.pos.includes(card.pos[index])).length>=2){
      hits.push(card.pos[index]);
    }
   }
   var bhits=[];
      for (let index = 0; index < hits.length; index++) {
        if(calScoreId(hits[index])===0) {bhits.push(hits[index])}
      }
   return [hits,bhits];
  }

  function place() {
    var index = indexOfCardInUse();

    if (index !== 999) {
      var hs = gethits(index);

      if (hs[0].length === 0 && game[0].turn !== 1) {
        game[0].errorMsg = ["You can't place the card there!","Try it again in other place."];
        return game;
      }
      if (hs[1].length > 2 || (game[0].rottenFruits + hs[1].length) > 2) {
        game[0].errorMsg = ["You can't place the card there!","Try it again in other place."];
        return game;
      }
      if (hs[1].some(x=>game[0].rottenFruitsSquareIds.includes(x))) {
        game[0].errorMsg = ["You can't place the card there!","Try it again in other place."];
        return game;
      }
      
      game[0].rottenFruits += hs[1].length;
      game[0].rottenFruitsSquareIds = game[0].rottenFruitsSquareIds.concat(hs[1])
      cards[index].used = true;
      cards[index].turn = game[0].turn;
      cards[index].inUse = false;
      game[0].turn += 1;
      game[0].score = 0;

      for (let n = 0; n <= 155 ; n++) {
        game[0].score = game[0].score + calScoreId(n); 
      }
      game[0].score = game[0].score - (3*game[0].rottenFruits); 
      game[0].errorMsg = [];
      return game;
    }
  }

  export {calScoreId, gethits, indexOfCardInUse, move, place, putCardIntoUse, rotate};