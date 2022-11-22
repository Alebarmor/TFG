import {game} from './orchard';

async function getPlayerList() {
    const result = await window.fetch('https://keepthescore.co/api/jebgggoverr/board/');
    const scoreboard = await result.json();
    const players = await scoreboard.players.map((x: { name: any; })=>x.name);
    game[0].playerList = players;
    return game;
  }
    
async function getPlayerScoreList() {
    const result = await window.fetch('https://keepthescore.co/api/jebgggoverr/board/');
    const scoreboard = await result.json();
    const playerScores = await scoreboard.players.map((x: { score: any; })=>x.score);
    game[0].playerScoreList = playerScores;
    return game;
}

function resolveAfter1Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 1000);
    });
  }

  function addScore(id: any): any {
    window.fetch('https://keepthescore.co/api/jziyrqggxhe/score/', {method: 'POST',headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          'player_id': id,
          'score': game[0].score
      })
  });
  }

export {getPlayerList, getPlayerScoreList, resolveAfter1Seconds, addScore};