import React from 'react';
import allCards from './cards_data';
import Board from './board';
//import { readJsonConfigFile } from 'typescript';
import './index.css';

import { Box, Image, Button, ButtonGroup, Stack, ChakraProvider, HStack, Container, UnorderedList, Icon, useDisclosure,
  Text, Badge, CircularProgress  } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { FiArrowLeft, FiArrowRight, FiArrowDown, FiArrowUp, FiFileText } from 'react-icons/fi'
import { BiTargetLock, BiRotateRight } from "react-icons/bi";

const gameData={
  "elements":[    
  {
      "score":0,
      "turn":1,
      "scoreList": [1, 3, 6, 10],
      "rottenFruits":0,
  }
  ]
}

var lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
lista = lista.sort(function() {return Math.random() - 0.5});

let miarray = lista.slice(0,9);
var cards = allCards.elements.filter(z=>miarray.includes(z.id));
var game = gameData.elements

class Square extends React.Component<{id:number, cards:any}, { }> {
   imag: string = "";
   cardRot: number = 0;

    render() {
      var cardsIn = cards.filter(x => x.pos.includes(this.props.id)).sort((x,b) => {return b.turn-x.turn});
      var alloCard = cardsIn[0];
      var cardPos = 0;
      var cardColor = 0;
      if (alloCard !== undefined) {
        cardPos = alloCard.pos.indexOf(this.props.id)
        cardColor = alloCard.trees[cardPos];
        this.cardRot = alloCard.rotation;
      }
      
      cardColor !== 0?this.imag = "img/" + cardColor + "." + cardPos + ".png" : this.imag = "img/blank.ico";

      var stack=calScoreId(this.props.id);
      var dicePng="";
      stack>=1?dicePng="img/dado-"+cardColor+"-"+stack+".png":dicePng="img/blank.ico";

      //rotten
      if(calScoreId(this.props.id)===0&&cardsIn.length>=2){dicePng="img/rotten.png"}
      
      switch (this.cardRot) {
        case 2:
        return (
          
          <button className="square">
             {<img src={dicePng} width="66" alt='' style={{ position:'absolute', zIndex:'2' }} /> }
             {<img src={this.imag} height ="66" width="66" alt='' style={{transform: "rotate(90deg)", position:'relative', zIndex:'1' }} />}
          </button>
        );  
  
        case 3:
        return (
          <button className="square">
            {<img src={dicePng} width="66" alt='' style={{ position:'absolute', zIndex:'2' }} /> }
            {<img src={this.imag} height ="66" width="66" alt='' style={{transform: "rotate(180deg)", position:'relative', zIndex:'1' }} />}
          </button>
        );  
  
        case 4:
        return (
          <button className="square">
            {<img src={dicePng} width="66" alt='' style={{ position:'absolute', zIndex:'2' }} /> }
            {<img src={this.imag} height ="66" width="66" alt='' style={{transform: "rotate(270deg)", position:'relative', zIndex:'1' }} />}
          </button>
        );  
      
        default:
          return (
            <button className="square">
              {<img src={dicePng} width="66" alt='' style={{ position:'absolute', zIndex:'2' }} /> }
              {<img src={this.imag} height ="66" width="66" alt='' style={{position:'relative', zIndex:'1'}}/>}
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

    cards[newCardIndex].pos = [65,66,77,78,89,90]; // Posición en el centro del tablero
    cards[newCardIndex].turn = game[0].turn;
    cards[newCardIndex].inUse = true;
    return cards
  }

  function move(direction: string) {
    var index = indexOfCardInUse();

    if (index !== 999)
    {
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
    }

    return cards
  }

  function rotate() {
    var index = indexOfCardInUse();

    if (index !== 999)
    {
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

  function colocate() {
    var index = indexOfCardInUse();
    if (index !== 999)
    {
      var hs=gethits(index);
      if(hs[0].length===0 && game[0].turn!==1){return game;}
      if(hs[1].length>2 || game[0].rottenFruits+hs[1].length>2){return game;}
      
      game[0].rottenFruits += hs[1].length;
      cards[index].used = true;
      cards[index].turn = game[0].turn;
      cards[index].inUse = false;
      game[0].turn += 1;
    
    
    game[0].score = 0;
    for (let n = 0; n <= 155 ; n++) {
      game[0].score = game[0].score + calScoreId(n); 
    }
    return game;
    }
  }
 
  function ModalRules() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button leftIcon={<Icon as={FiFileText}/>} size='lg' colorScheme='teal' variant='solid' onClick={onOpen}>Rules</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size='6xl' scrollBehavior='inside'>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Image alt='Rules' src='img/rules.png'/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

  class Game extends React.Component {
    render() {
      return (
        
        <ChakraProvider>

          <Box bg='rgb(143, 206, 60, 0.678)'>

            <Container maxW='1xl' centerContent pt='25px' pb='25px'>
              <Image alt='Logo' src='img/Title.png' w="auto" h="250px"/>
            </Container>
                        
            <HStack pb='5px'>
              <Container maxW='1xl' centerContent>
                <Box>
                  <Board cards={cards}/>
                </Box>
              </Container>

              <Container maxW='1xl' centerContent>
                <Stack pb='150px'>
                  <HStack spacing='20'>
                    <CircularProgress value={game[0].score/55*100} size='120px' />
                    <Text as='b' fontSize='50px' color='#3B3B3B'>Score: {game[0].score}</Text>
                  </HStack>
                  <HStack spacing={6}>
                    {game[0].score>=1?<Badge className='fade-in' variant='subtle' bgColor='#FF6961'>Pal-tree</Badge>:<></>}
                    {game[0].score>=25?<Badge className='fade-in' variant='subtle' bgColor='#FFB480'>Forget-apple</Badge>:<></>}
                    {game[0].score>=30?<Badge className='fade-in' variant='subtle' bgColor='#F8F38D'>Satisfac-tree</Badge>:<></>}
                    {game[0].score>=35?<Badge className='fade-in' variant='subtle' bgColor='#42D6A4'>Remark-apple</Badge>:<></>}
                  </HStack>
                  <HStack spacing={6}>
                    {game[0].score>=40?<Badge className='fade-in' variant='subtle' bgColor='#08CAD1'>Tree-mendous</Badge>:<></>}
                    {game[0].score>=45?<Badge className='fade-in' variant='subtle' bgColor='#59ADF6'>Plum-believable</Badge>:<></>}
                    {game[0].score>=50?<Badge className='fade-in' variant='subtle' bgColor='#9D94FF'>Close to Pear-fect</Badge>:<></>}
                    {game[0].score>=55?<Badge className='fade-in' variant='subtle' bgColor='#C780E8'>Almost imposs-apple!</Badge>:<></>}
                  </HStack>
                </Stack>
                
                <Stack direction='column' spacing={6}>
                  <Box display='flex' justifyContent='left'>
                    <ButtonGroup gap='2'>
                      <Button leftIcon={<Icon as={BiRotateRight}/>} size='lg' colorScheme='purple' onClick={() => this.setState(rotate)}>Rotate</Button>
                      <Button leftIcon={<Icon as={FiArrowUp}/>} size='lg' colorScheme='linkedin' onClick={() => this.setState(move("up"))}>Up</Button>
                    </ButtonGroup>
                  </Box>

                  <Box display='flex' justifyContent='center'>
                    <ButtonGroup gap='2'>
                      <Button leftIcon={<Icon as={FiArrowLeft}/>} size='lg' colorScheme='red' onClick={() => this.setState(move("left"))}>Left</Button>
                      <Button leftIcon={<Icon as={BiTargetLock} />} size='lg' colorScheme='orange' onClick={() => this.setState(colocate)}>Colocate</Button>
                      <Button leftIcon={<Icon as={FiArrowRight}/>} size='lg' colorScheme='blue' onClick={() => this.setState(move("right"))}>Right</Button>
                    </ButtonGroup>
                  </Box>

                  <Box display='flex' justifyContent='right'>
                    <ButtonGroup gap='2'>
                      <Button leftIcon={<Icon as={FiArrowDown}/>} size='lg' colorScheme='yellow' onClick={() => this.setState(move("down"))}>Down</Button>
                      <ModalRules />
                    </ButtonGroup>
                  </Box>
                </Stack>
              </Container>
            </HStack>

            <Box>{
              <UnorderedList>
                <HStack pt='25px' pb='25px'>
                  {cards.filter(z => z.inUse === false && z.used === false).map(z => { return(
                    <Container centerContent>
                      <Image className='grow' alt='Card' width='140px' src={z.img} onClick={() => this.setState(putCardIntoUse(cards.indexOf(z)))} boxShadow='dark-lg'/>
                    </Container>
                  )})}
                </HStack>
              </UnorderedList>
            }</Box>
          </Box>

        </ChakraProvider>
        
      );
    }
  }
  
  // ========================================
  export default Game;
  export {Square, cards};