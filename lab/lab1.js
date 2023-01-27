
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

const[players1,players]=game.players;
console.log(players1,players2);

const[gk,...fieldPlayer]=players1;
console.log(gk,fieldPlayer);

const allPlayers=[...players1,...players2];
console.log(allPlayers);


const players1Final=[...players1,'martinez','messi','haaland','ronaldo'];

const{
    odds:{team1,x:draw,team2
    },
}=game;
console.log(team1,draw,team2);


const printGoals=function(...players){
    console.log(player);
    console.log(`${players.length} goals were scored`);
};


printGoals(...game.scored);


team1<team2&&console.log('team 1 is more likely to win');
team1>team2&&console.log('team 1 is more likely to win');

