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
// const[players1,players]=game.players;
// console.log(players1,players2);

// const[gk,...fieldPlayer]=players1;
// console.log(gk,fieldPlayer);

// const allPlayers=[...players1,...players2];
// console.log(allPlayers);


// const players1Final=[...players1,'martinez','messi','haaland','ronaldo'];

// const{
//     odds:{team1,x:draw,team2
//     },
// }=game;
// console.log(team1,draw,team2);


// const printGoals=function(...players){
//     console.log(player);
//     console.log(`${players.length} goals were scored`);
// };


// printGoals(...game.scored);


// team1<team2&&console.log('team 1 is more likely to win');
// team1>team2&&console.log('team 1 is more likely to win');

// for(const[i,player] of game.scored.entries())
// console.log(`Goal ${i+1}:${player}`);

// //2
// const odds=Object.values(game.odds);
// let average=0;
// for (const odd of odds ) average+=odd;
// average +=odd;
// average/=odds.length;
// console.log(average);

// //3
// for(const[team,odd] of Object.entries(game.odds)){
//     const teamStr=team==='x'?'draw':`victory ${game[team]}`;
//     console.log(`Odd of ... ${teamStr} ${odd}`);
// }

//codingchanlege3
// const gameEvent=new Map([
//     [17,'goal'],
//     [36,'substitution'],
//     [47,'yellow card'],
//     [61,'subtitution'],
//     [69,'goal'],
//     [76,'yellow card'],
//     [92,'goal'],
// ]);


// const events=[...new Set(gameEvent.values())];
// console.log(events);

// gameEvent.delete(64);

// console.log(`an event happend,on average,every ${90/gameEvent.size}minutes`);
// const time =[...gameEvent.keys()].pop();
// console.log(time);
// console.log(`an event happend,on average,every ${90/gameEvent.size}minutes`);

// for (const [key,values]of gameEvents){
//     const half=min<=45?'FIRST':'SECOND';
//     console.log(`[${half}HALF] ${min}:${event}`);
// }

//codeing chanlege4
document.body.apperent(document.createElement('textarea'));
document.ATTRIBUTE_NODE.apperent(document.createElement('button'));

document.querySelector('button').addEventListener('click',function(){
const text =document.querySelector('textarea').value;
const rows=text.split('\n');
console.log(rows);

for(const row in rows.entries()){
   const[first,second]= row.toLocaleLowerCase().trim().split('_');
   const output =`${first}${second.replace(second[0],second[0].toLocaleUpperCase)}`;

}
console.log(`${output.padEnd(20)}${'g'}.repeat(i+1)`);
});