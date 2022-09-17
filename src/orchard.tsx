import React from 'react';
import allCards from './cards_data';
//import { readJsonConfigFile } from 'typescript';
import './index.css';
import { Box, Image, Button, ButtonGroup, Stack, ChakraProvider, HStack, Container, UnorderedList, Icon, Portal, useDisclosure, position  } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { FiArrowLeft, FiArrowRight, FiArrowDown, FiArrowUp, FiFileText } from 'react-icons/fi'
import { BiTargetLock, BiRotateRight } from "react-icons/bi";

const gameData={
  "elements":[    
  {
      "score":0,
      "turn":1,
      "scoreList": [1, 3, 6, 10]
  }
  ]
}

class Board extends React.Component<{cards:any }, { }> {
  renderSquare(i:number) {
    return <Square id={i} cards={cards}/>;
  }
  
    render() {
      //const status = 'Next player: X';
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

class Square extends React.Component<{id:number, cards:any}, { }> {
   imag: string="";
   cardRot: number=0;

    render() {
      var cardsIn=cards.filter(x=>x.pos.includes(this.props.id)).sort((x,b)=>{return b.turn-x.turn});
      var alloCard=cardsIn[0];
      var cardPos=0;
      var cardColor=0;
      if(alloCard!==undefined){
        cardPos=alloCard.pos.indexOf(this.props.id)
        cardColor=alloCard.trees[cardPos];
        this.cardRot=alloCard.rotation;
      }
      
      cardColor!==0?this.imag="img/"+cardColor+"."+cardPos+".png":this.imag="img/blank.ico"

      var stack=calScoreId(this.props.id);
      var dicePng="";
      stack>=1?dicePng="img/dado-"+cardColor+"-"+stack+".png":dicePng="img/blank.ico";
      
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

  function colocate():void {
    var index = indexOfCardInUse();

    if (index !== 999)
    {
      cards[index].used = true;
      cards[index].turn = game[0].turn;
      cards[index].inUse = false;
      game[0].turn += 1
    
    
    game[0].score = 0;
    for (let n = 0; n <= 155 ; n++) {
      game[0].score = game[0].score + calScoreId(n); 
    }
    console.log("Score = " + game[0].score);
    console.log(game);
    }
  }

  function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button leftIcon={<Icon as={FiFileText}/>} size='lg' colorScheme='teal' variant='solid' onClick={onOpen}>Rules</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image alt='Rules' src='img/rules.png' w='auto' h='400px'/>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
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
                <Stack direction='column' spacing={6}>
                  <Box display='flex' justifyContent='left'>
                    <ButtonGroup gap='2'>
                      <Button leftIcon={<Icon as={BiRotateRight}/>} size='lg' colorScheme='purple' variant='solid' onClick={() => this.setState(rotate)}>Rotate</Button>
                      <Button leftIcon={<Icon as={FiArrowUp}/>} size='lg' colorScheme='linkedin' variant='solid' onClick={() => this.setState(move("up"))}>Up</Button>
                    </ButtonGroup>
                  </Box>

                  <Box display='flex' justifyContent='center'>
                    <ButtonGroup gap='2'>
                      <Button leftIcon={<Icon as={FiArrowLeft}/>} size='md' colorScheme='red' variant='solid' onClick={() => this.setState(move("left"))}>Left</Button>
                      <Button leftIcon={<Icon as={BiTargetLock} />} size='lg' colorScheme='orange' variant='solid' onClick={() => this.setState(colocate)}>Colocate</Button>
                      <Button leftIcon={<Icon as={FiArrowRight}/>} size='lg' colorScheme='blue' variant='solid' onClick={() => this.setState(move("right"))}>Right</Button>
                    </ButtonGroup>
                  </Box>

                  <Box display='flex' justifyContent='right'>
                    <ButtonGroup gap='2'>
                      <Button leftIcon={<Icon as={FiArrowDown}/>} size='lg' colorScheme='yellow' variant='solid' onClick={() => this.setState(move("down"))}>Down</Button>
                      <Button leftIcon={<Icon as={FiFileText}/>} size='lg' colorScheme='teal' variant='solid'>Rules</Button>
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
                      <Image alt='Card' width='140px' src={z.img} onClick={() => this.setState(putCardIntoUse(cards.indexOf(z)))}/>
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