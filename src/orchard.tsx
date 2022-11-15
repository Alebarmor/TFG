import React from 'react';
import allCards from './cards_data';
import Board from './board';
import './index.css';
import { useForm } from 'react-hook-form'

import { Box, Image, Button, ButtonGroup, Stack, HStack, Container, UnorderedList, Icon, useDisclosure,
  Text, Badge, CircularProgress, Breadcrumb, BreadcrumbItem, BreadcrumbLink, PopoverFooter, PopoverBody, PopoverCloseButton, PopoverHeader, PopoverTrigger, Popover, Portal, PopoverContent, PopoverArrow } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { FiArrowLeft, FiArrowRight, FiArrowDown, FiArrowUp, FiFileText } from 'react-icons/fi'
import { BiTargetLock, BiRotateRight, BiExit } from "react-icons/bi";
import { BsEmojiLaughing } from "react-icons/bs";
import { Alert, AlertIcon, AlertTitle, AlertDescription, FormControl,FormLabel,Input,FormErrorMessage} from '@chakra-ui/react'
import { motion } from "framer-motion"

const gameData={
  "elements":[    
  {
      "score":0,
      "turn":0,
      "scoreList": [1, 3, 6, 10],
      "rottenFruits":0,
      "errorMsg": [""],
      "playerList":[""]
  }
  ]
}

var listaNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
listaNumeros = listaNumeros.sort(function() {return Math.random() - 0.5});

let barajaAleatoria = listaNumeros.slice(0,9);
var cards = allCards.elements.filter(z => barajaAleatoria.includes(z.id));
var game = gameData.elements

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
      
      game[0].rottenFruits += hs[1].length;
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
 
  function ModalRules() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        {game[0].turn===0?<Button rightIcon={<Icon as={FiFileText}/>} width='200px' size='lg' colorScheme='blackAlpha' variant='solid' onClick={onOpen}>Check the rules</Button>:<></>}
        {game[0].turn!==0?<Button leftIcon={<Icon as={FiFileText}/>} width='150px' size='lg' colorScheme='teal' variant='solid' onClick={onOpen}>Rules</Button>:<></>}

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

  function EndMessage() {
    var message = '';
    var score = game[0].score;
    if (score < 0) {
      message = "Negative numbers? That's not what you want to do... Check the rules!";
    } else if (score === 0) {
      message = 'Place a card! Is the only thing you have to do, mate.';
    } else if (score > 0 && score <= 10) {
      message = 'Well, this is awkward, but you have to improve a lot, buddy...';
    } else if (score > 10 && score <= 20) {
      message = 'Perseverance is the key to success. Keep trying!';
    } else if (score > 20 && score <= 30) {
      message = 'What a good score! But there is a long way yet.';
    } else if (score > 30 && score <= 40) {
      message = "You're good at this, and also near the end. Don't give up!";
    } else if (score > 40 && score <= 50) {
      message = 'That 55 points are just around the corner! Keep it up!';
    }  else if (score > 50 && score <= 54) {
      message = "At the gates of heaven... Go for it, mate! Almost perfect!";
    } else if (score > 55) {
      message = "I didn't know I was treating with the God of Trees! Congratulations!";
    }
    return (
      <>
        <Text bgGradient='linear(to-t, #166D3B, #0E4525)' bgClip='text'
              as='b' fontFamily='sans-serif' fontSize='2xl' pb='30px'>{message}</Text>
      </>
    )
  }

  function restart() {
    game[0].score = 0;
    game[0].turn = 1;
    game[0].rottenFruits = 0;

    allCards.elements.map(x => x.pos = [777,777,777,777,777,777]);
    allCards.elements.map(x => x.used = false);
    allCards.elements.map(x => x.turn = 0);
    allCards.elements.map(x => x.rotation = 1);


    var listaNumerosRestart = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
    listaNumerosRestart = listaNumerosRestart.sort(function() {return Math.random() - 0.5});

    let barajaAleatoriaRestart = listaNumerosRestart.slice(0,9);
    cards = [];
    cards = allCards.elements.filter(z => barajaAleatoriaRestart.includes(z.id));

    return cards;
  }

  function Navbar() {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Box bgGradient='linear(to-l, #166D3B, #000000)' w='100%' p={4} color='white'>
          <HStack pb='5px'>
            <Image w="auto" h="75px" alt='Logo' src='img/logo-mini.png' pl='10%'/>
            <Breadcrumb fontWeight='semibold' fontSize='large' pl='30%' separator='|' spacing='10'>
              <BreadcrumbItem>
                <BreadcrumbLink target='_blank' href='https://boardgamegeek.com/boardgamedesigner/90925/mark-tuck'>About Mark Tuck</BreadcrumbLink>
              </BreadcrumbItem>
                    
              <BreadcrumbItem>
                <BreadcrumbLink target='_blank' href='https://boardgamegeek.com/boardgame/245487/orchard-9-card-solitaire-game'>Buy the Game!</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink target='_blank' href='https://github.com/Alebarmor/TFG'>GitHub Repository</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </HStack>
        </Box>
      </motion.div>
    )
  }

  function Footer() {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Container maxW='1xl' centerContent bottom='0' position='fixed'>
          <Text fontSize='xs'>© 2022 Universidad de Sevilla & Mark Tuck. All/Some/No rights reserved.</Text>
        </Container>
      </motion.div>
    )
  }

  function ScoreAndBadges() {
    return (
      <>
        <HStack spacing='20'>
          <CircularProgress value={game[0].score/55*100} size='120px' />
          {game[0].turn===10?<Text as='b' fontSize='70px' color='#3B3B3B'>Score: {game[0].score}</Text>:<></>}
          {game[0].turn!==10?<Text as='b' fontSize='50px' color='#3B3B3B'>Score: {game[0].score}</Text>:<></>}
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
      </>
    )
  }

  class Game extends React.Component {
    render() {
      <Navbar />
      switch(game[0].turn){
      case 0:
        return(
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
            <Container maxW='1xl' centerContent pt='15%'>
              <Text bgGradient='linear(to-t, #166D3B, #0E4525)' bgClip='text'
              as='b' fontFamily='sans-serif' fontSize='8xl' pb='10px'>Simple and exciting.</Text>
              <Text bgGradient='linear(to-t, #166D3B, #0E4525)' bgClip='text'
              as='b' fontFamily='sans-serif' fontSize='large' pb='40px'>Chekout the rules and enjoy the game.</Text>

              <ButtonGroup gap='2'>
                <ModalRules />
                <Button rightIcon={<Icon as={BsEmojiLaughing}/>} width='200px' size='lg' colorScheme='blackAlpha'
                  onClick={() => this.setState(function start(){game[0].turn=1;return game;})}>Let's get started!</Button>
              </ButtonGroup>
            </Container>
            </motion.div>
          </>
        )

      case 10:
        return(
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
            <Container maxW='1xl' centerContent pt='15%'>
              <Stack pb='20px'>
                <ScoreAndBadges />
              </Stack>
              <EndMessage />
              <Button rightIcon={<Icon as={BsEmojiLaughing}/>} width='200px' size='lg' colorScheme='blackAlpha' 
                onClick={() => this.setState(restart)}>Try again</Button>
              
              <Popover>
                <PopoverTrigger>
                  <Button leftIcon={<Icon as={BiExit}/>} width='200px' size='lg' colorScheme='pink' >Submit Score</Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                    <HookForm />
                    </PopoverBody>
                    <PopoverFooter></PopoverFooter>
                      </PopoverContent>
                    </Portal>
              </Popover>
                    
            </Container></motion.div>
          </>
        )

      default:  
        return (
          <>
            <Box pt='50px'>
              <HStack pb='10px'>
                <Container maxW='1xl' centerContent>
                  <motion.div
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 2,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}>
                    <Box>
                      <Board cards={cards}/>
                    </Box>
                  </motion.div>
                </Container>

                <Container maxW='1xl' centerContent>
                  <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}>
                    <Stack pb='150px'>
                      <ScoreAndBadges />
                    </Stack>

                    {game[0].errorMsg.length===2?
                    <Alert className='fade-in-short' status='error' width='auto'>
                      <AlertIcon />
                      <AlertTitle >{game[0].errorMsg[0]}</AlertTitle>
                      <AlertDescription>{game[0].errorMsg[1]}</AlertDescription>
                    </Alert>:<></>}
                    
                    <Stack direction='column' spacing={6} pt='25px'>
                      <Box display='flex' justifyContent='left'>
                        <ButtonGroup gap='2'>
                          <Button leftIcon={<Icon as={BiRotateRight}/>} width='150px' size='lg' colorScheme='purple' onClick={() => this.setState(rotate)}>Rotate</Button>
                          <Button leftIcon={<Icon as={FiArrowUp}/>} width='150px' size='lg' colorScheme='linkedin' onClick={() => this.setState(move("up"))}>Up</Button>
                          <Popover>
                            <PopoverTrigger>
                              <Button leftIcon={<Icon as={BiExit}/>} width='150px' size='lg' colorScheme='pink' >Surrender</Button>
                            </PopoverTrigger>
                            <Portal>
                              <PopoverContent>
                                <PopoverArrow />
                                <PopoverHeader><Text as='b' fontFamily='sans-serif'>Do you want to give up?</Text></PopoverHeader>
                                <PopoverCloseButton />
                                <PopoverBody>
                                  If you give up, you will end the game with the score you have so far, with no chance to go back. Are you sure about it?
                                </PopoverBody>
                                <PopoverFooter><Button colorScheme='red' onClick={() => this.setState(function surrender(){game[0].turn=10;return game;})}>I am sure</Button></PopoverFooter>
                              </PopoverContent>
                            </Portal>
                          </Popover>
                        </ButtonGroup>
                      </Box>

                      <Box display='flex' justifyContent='center'>
                        <ButtonGroup gap='2'>
                          <Button leftIcon={<Icon as={FiArrowLeft}/>} width='150px' size='lg' colorScheme='red' onClick={() => this.setState(move("left"))}>Left</Button>
                          <Button leftIcon={<Icon as={BiTargetLock} />} width='150px' size='lg' colorScheme='orange' onClick={() => this.setState(place)}>Place</Button>
                          <Button leftIcon={<Icon as={FiArrowRight}/>} width='150px' size='lg' colorScheme='blue' onClick={() => this.setState(move("right"))}>Right</Button>
                        </ButtonGroup>
                      </Box>

                      <Box display='flex' justifyContent='right'>
                        <ButtonGroup gap='2'>
                          <Button leftIcon={<Icon as={FiArrowDown}/>} width='150px' size='lg' colorScheme='yellow' onClick={() => this.setState(move("down"))}>Down</Button>
                          <ModalRules />
                        </ButtonGroup>
                      </Box>
                    </Stack>
                  </motion.div>
                </Container>
              </HStack>

              <motion.div
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 3,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}>
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
              }</Box></motion.div>
            </Box>
          </>
        );
       }
    }
  }
  // ========================================
  export default Game;
  export {Square, cards, Navbar, Footer };


  function HookForm() {
    const {
      handleSubmit,
      register,
      formState: {isSubmitting },
    } = useForm()
    
    
    async function onSubmit(values: any) {
      game[0].errorMsg = [];
      window.fetch('https://keepthescore.co/api/jebgggoverr/board/').then(result => result.json()).then(scoreboard => getplayerList(scoreboard.players.map((x: { name: any; })=>x.name)));
      const result = await resolveAfter1Seconds();
      
      console.log(values.name.length);
      if(values.name.length<=3){
        console.log("verg")
        game[0].errorMsg = ["Name min 4","Try it again in other place."];
      }else{
        if(game[0].playerList.includes(values.name)) {
          game[0].errorMsg = ["Name repate","Try it again in other place."];
          console.log("verga")
          return(
            <Alert status='error'>
              <AlertIcon />
                <AlertTitle>Nombre repetido!</AlertTitle>
                <AlertDescription>Your Chakccccay be degraded.</AlertDescription>
              </Alert>
          )
        }else{
          
          window.fetch('https://keepthescore.co/api/jziyrqggxhe/player/', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify({'name': values.name})});
          const result = await resolveAfter1Seconds();
          console.log("putisa2")
          window.fetch('https://keepthescore.co/api/jebgggoverr/board/').then(result => result.json()).then(scoreboard => addScore(scoreboard.players.filter((x: { name: any })=>x.name===values.name)[0].id));
          
      }
      
      }

      return game;
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl >
          <FormLabel htmlFor='name'>Please specify a name</FormLabel>
          <Input
            id='name'
            placeholder='name'
            {...register('name', {
              required: 'This is required',
            })}
          />
          {game[0].errorMsg.length===2?
                    <Alert className='fade-in-short' status='error' width='auto'>
                      <AlertIcon />
                      <AlertTitle >{game[0].errorMsg[0]}</AlertTitle>
                      <AlertDescription>{game[0].errorMsg[1]}</AlertDescription>
                    </Alert>:<></>}
          <FormErrorMessage>
          </FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme='pink' isLoading={isSubmitting} type='submit'>
          Submit Score
        </Button>
      </form>
    )
  }
function addScore(id: any): any {
  window.fetch('https://keepthescore.co/api/jziyrqggxhe/score/', {method: 'POST',headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        'player_id': id,
        'score': gameData.elements[0].score
    })
});
}


function getplayerList(arg0: any) {
 game[0].playerList=arg0;
 return game;
}

function resolveAfter1Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 1000);
  });
}
