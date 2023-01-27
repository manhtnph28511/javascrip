const game={
    team1:'bacca',
    team2:'chensea',
    player:[
        [
        'courtou',
        'marcus',
        'silva',
        'haaland',
        'messi',
        'debruyne',
        'martinez',
        'david',
        'mp3',
        'ronaldo',
        'pogba',
    ],
    [
        'lewandowski',
        'neymar',
        'ronaldo da lima',
        'ronaldinho',
        'PELE',
        'richarlison',
        'lucas paqueta',
        'roberto carlos',
        'romario',
        'rivaldo',
        'garrincha',
    ],
        
],
score:'4:0',
scored:['lewandowski','neymar','lewandoski','garrincha'],
date:'december 9th 1960',
odds:{
    team1:1.33,
    x:3.04,
    team2:6.5,
},
    
};
for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1}:${player}`);
//Tinh tb odds lam lap lai doi tuong 
const odds = Object.values(game.odds);
let avarage = 0;
for (const odd of Object.values(game.odds))
    avarage += odd;
avarage /= odds.length;
console.log(avarage);

for (const [team, odd] of Object.entries(game.odds)) {
    const teamSrt = team === 'x' ? 'draw': `vicory ${game[team]}`;
    console.log(`Odd of ${teamSrt} ${odd}`);
} 
const gameEvents=new Map([
    [15,'Goals']
    [20,'Goals'],
    [25,'thay nguoi'],
    [30,'yellow card'],
    [45,'yellow card'],
    [55,'Goals'],
    [64,'yellow card'],
    [75,'red card'],
    [90+2,'Goals']
]
);
const events=[...new Set(gameEvents.values)]
console.log(events)