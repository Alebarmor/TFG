import React from 'react';
import allCards from './cards_data';
import Board from './board';
import './index.css';
import { useForm } from 'react-hook-form'
import Square from './square';
import { getPlayerList, getPlayerScoreList, resolveAfter1Seconds, addScore } from './apiFunctions';
import { move, place, putCardIntoUse, rotate } from './functions'
import { Box, Image, Button, ButtonGroup, Stack, HStack, Container, UnorderedList, Icon, useDisclosure,
  Text, Badge, CircularProgress, Breadcrumb, BreadcrumbItem, BreadcrumbLink, PopoverFooter, PopoverBody,
  PopoverCloseButton, PopoverHeader, PopoverTrigger, Popover, Portal, PopoverContent, PopoverArrow,
  ModalHeader, Center, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Alert, AlertIcon,
  AlertTitle, AlertDescription, FormControl, FormLabel, Input, Table, Thead, Tbody,
  Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import { FiArrowLeft, FiArrowRight, FiArrowDown, FiArrowUp, FiFileText } from 'react-icons/fi'
import { BiTargetLock, BiRotateRight, BiExit } from "react-icons/bi";
import { BsEmojiLaughing, BsClipboardData } from "react-icons/bs";
import { motion } from "framer-motion"

const gameData={
  "elements":[    
  {
      "score":0,
      "turn":0,
      "scoreList": [1, 3, 6, 10],
      "rottenFruits":0,
      "rottenFruitsSquareIds":[177],
      "errorMsg": [""],
      "playerList":[""],
      "playerScoreList":[""]
  }
  ]
}

var listaNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
listaNumeros = listaNumeros.sort(function() {return Math.random() - 0.5});
let barajaAleatoria = listaNumeros.slice(0,9);
var cards = allCards.elements.filter(z => barajaAleatoria.includes(z.id));
var game = gameData.elements;
let playerData: Array<{ rank: number, name: string, score: number }> = [];


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
    game[0].errorMsg=[""]

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
    let scoreForProgress = 0;
    if (game[0].score >= 0) {
      scoreForProgress = game[0].score;
    }

    return (
      <>
        <HStack spacing='20'>
          <CircularProgress value={scoreForProgress/55*100} size='120px' />
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

  function HookForm() {
    const {
      handleSubmit,
      register,
      formState: {isSubmitting },
    } = useForm()
    const { isOpen, onOpen, onClose } = useDisclosure()

    async function onSubmit(values: any) {
      game[0].errorMsg = [];
      getPlayerList();
      getPlayerScoreList()
      await resolveAfter1Seconds();

      if (values.name.length <= 3) {
        game[0].errorMsg = ["Too short","must have at least 4 characters"];
      } else {
        if (values.name.length > 25) {
        game[0].errorMsg = ["Too long","must have 25 characters max"];
        } else {
          if (game[0].playerList.includes(values.name)) {
            game[0].errorMsg = ["Name is on use","Try another."];
          } else {
            window.fetch('https://keepthescore.co/api/jziyrqggxhe/player/', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify({'name': values.name})});
            await resolveAfter1Seconds();
            window.fetch('https://keepthescore.co/api/jebgggoverr/board/').then(result => result.json()).then(scoreboard => addScore(scoreboard.players.filter((x: { name: any })=>x.name===values.name)[0].id));
            game[0].errorMsg = ["Correct submit"]
            UpdateLeaderBoard();
          }
        }
      }

      return game;
    }

    return (
      <>
      <Button leftIcon={<Icon as={BsClipboardData}/>} width='200px' size='lg' colorScheme='blackAlpha' onClick={onOpen}>Submit Score</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent top={"60%"}>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl >
                <FormLabel  htmlFor='name'>Please specify a name</FormLabel>
                <Input id='name' placeholder='name'{...register('name', {required: 'This is required',})}/>
                {game[0].errorMsg.length === 2?
                  <Alert className='fade-in-short' status='error' width='auto'>
                    <AlertIcon />
                    <AlertTitle >{game[0].errorMsg[0]}</AlertTitle>
                    <AlertDescription>{game[0].errorMsg[1]}</AlertDescription>
                    </Alert>:<></>}
                {game[0].errorMsg.length === 1 && game[0].errorMsg[0] !== ""?
                  <Alert status='success'>
                  <AlertIcon />
                  <AlertDescription>{game[0].errorMsg[0]}</AlertDescription>
                  </Alert>:<></>}
              </FormControl>
              <Button mt={4} colorScheme='pink' isLoading={isSubmitting} type='submit'>
                Submit Score
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      </>
    )
  }

 async function UpdateLeaderBoard() {
  getPlayerList();
  getPlayerScoreList();
  await resolveAfter1Seconds();
  playerData = [];

  if (game[0].playerList.length > 0) {
    for (let i = 0; i < game[0].playerList.length; i++) {
      playerData.push({rank: i + 1, name: game[0].playerList[i], score: +game[0].playerScoreList[i]});
    }
  }
 }

 function ModalBoard() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button  width='200px' size='lg' colorScheme='blackAlpha' onClick={onOpen}>Show leaderboard</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth="30%" bgGradient='linear(to-t, #028cf3, #2feaa8)'>
          <Center><ModalHeader><Text fontSize='25px' as='b'>LEADERBOARD</Text></ModalHeader></Center>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer>
              <Table size='lg'>
                <Thead>
                  <Tr>
                    <Th><Text color="black" fontSize='18px' as='b'>Rank</Text></Th>
                    <Th><Text color="black" fontSize='18px' as='b'>Player name</Text></Th>
                    <Th><Text color="black" fontSize='18px' as='b'>score</Text></Th>
                  </Tr>
                </Thead>
                <Tbody>
                {
                  playerData.map(
                  data => 
                  
                  <Tr key={data.name+"O"}>
                    <Td><Text as="b">{data.rank}</Text></Td>  
                    <Td><Text as="b">{data.name}</Text></Td>
                    <Td isNumeric><Text as="b">{data.score}</Text></Td>
                  </Tr>,
                  )
                  }
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
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
        UpdateLeaderBoard();
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
              <ButtonGroup gap='2'>
                <Button rightIcon={<Icon as={BsEmojiLaughing}/>} width='200px' size='lg' colorScheme='blackAlpha' 
                  onClick={() => this.setState(restart)}>Try again</Button>
                  <HookForm/>
                <ModalBoard />
              </ButtonGroup>
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
                      <Container centerContent key={z.id}>
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
  export {Square, cards, Navbar, Footer, game};