const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...players) {
    let goals = 0;
    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < this.scored.length; j++) {
        if (players[i] === this.scored[j]) {
          goals++;
        }
      }

      console.log(players[i], goals);
      goals = 0;
    }
  },
};

/*
let [p1, p2] = game.players;
console.log(p1, p2);

let [gk, ...fieldPlayers] = p1;
console.log(gk, fieldPlayers);

let allPlayers = [...p1, ...p2];
console.log(allPlayers);

let players1Final = [...p1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

let { team1, x, team2 } = game.odds;
console.log(team1, x, team2);

game.printGoals('Lewandowski', 'Gnarby', 'Hazard');

team1 < team2 && console.log('Team1');
*/

for (const [goal, player] of Object.entries(game.scored)) {
  console.log(`Goal ${parseInt(goal) + 1}: ${player}`);
}

let sumOdd = 0;
for (const odd of Object.values(game.odds)) {
  sumOdd += odd;
}
console.log(sumOdd / Object.values(game.odds).length);

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(`Odd of ${game[team] || 'draw'}: ${odd}`);
}

const scored = Object.values(game.scored);
console.log(scored);

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
