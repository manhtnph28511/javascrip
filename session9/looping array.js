
'use strict';
const restaurant={
    name:'Classico Italiano',
    location:'Via Angelo Tavanti 23,Firenze,Italy',
    categories:['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu:['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu:['Pizza','Pasta','Risotto'],

    openingHours:{
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0,
            close:24,
        },
    },
    order:function(starterIndex,mainIndex){
        return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    },
    orderDelivery:function({starterIndex=1,mainIndex=0,time=22:00,address}){
        console.log(
            `Order received! ${this.starterMenu
            [starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`);
   },
   orderPasta:function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2}and${ing3}`);
   },
   orderPizza:function(mainIngredient,...othersInredients){
    console.log(mainIngredient);
    console.log(othersInredients);
   },
};
// const menu =[...restaurant.starterMenu,...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const[i,el] of menu.entries()){
//     console.log(`${item[0]+1}:${item[1]}`);
// }
// // console.log([...menu.entries()]);

// working with string p3
console.log('a+every+nice+string'.split('+'));
console.log('jonas schmedtmann'.split(''));

const [firstName,lastName]='jonas schemedtmann'.split('');

const newName=['mr.',firstName,lastName.toUpperCase()].join('');
console.log(newName);

const capitalizeName=function(name){
const names=name.split('');

for(const n of names){
// nameUpper.push(n[0].toUpperCase()+n.slice(1));
nameUpper.push(n.replace(n[0]).toUpperCase());
}
console.log(nameUpper.join(''));
}
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

//padding
const message='go to gate 23!'
console.log(message.padStart(25,'+'.padEnd(30,'+')));
console.log('jonas'.padStart(25,'+',padEnd,'+'));

const markCreditCard=function(number){
    const str=number+'';
    const last=str.slice(-4);
    return last.padStart(str.length,'*');
}

console.log(markCreditCard(1635498125695));
console.log(markCreditCard(4813518946));
console.log(markCreditCard('4813518946752652790617'));


//repeat
const message2='bad weather...all deplays...';
console.log(message2.repeat(5));

const planeInline=function(n){
    console.log(`there are ${n} planes in line ${'f'.repeat(n)});
};;
planeInline(5);
planeInline(3);
planeInline(12)




///////////////////// working with string p2
// const airline='TAP Air Portugal';
// console.log(airplane.toLowerCase());
// console.log(airplane.toUpperrCase());


// //fix capitalization in name
// const passenger='jonas';
// const passengerLower=passenger.toLowerCase();
// const passengerCorrect=passengerLower[0].toUpperCase+passengerLower.slice(1);
// console.log(passengerCorrect);

// //check email
// const email='hello@jonas.io';
// const loginEmail='hello@jonas.io\n';

// const lowerEmail=loginEmail.toLowerCase();
// const trimmedEmail=lowerEmail.trim();
// console.log(trimmedEmail);

// console.log(normalizedEmail);
// console.log(email===normalizedEmail);

// //replacing
// const priceGB='288,97E';
// const priceUS=priceGB.replace('E','$').replace(',','.');
// console.log(priceUS);

// const anonoucement='At passenger come to boarding door 23!';

// console.log(anonoucement.replace('door','gate'));
// console.log(anonoucement.replace(/door/g,'gate'));

// //booleans
// const plane='A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startWith('Aib'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')){
//     console.log('part of the new aribus family');
// }

// const checkBaggage=function(items){
//   const baggage=item.toLowercase();
//   if(baggage.includes('knife')||baggage.includes('gun')){
// console.log('you are not allowed on board');
//   }else{
//     console.log('welcome abroard');
//   }
// };
// checkBaggage('i have a laptop,some food and pocket knife');
// checkBaggage('socks and camera');
// checkBaggage('got same snacks and a gun for protection');


///working with string p1
// const airline='TAP Air Portugal';
// const plane='A 320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B373'[0]);

// console.log(airplane.length);
// console.log('B373'.length);

// console.log(airplane.indexOf('r'));
// console.log(airplane.lastIndexOf('r'));
// console.log(airplane.indexOf('portugal'));

// console.log(airplane.slice(4));
// console.log(airplane.slice(4,7));

// console.log(airplane.slice(0,airplane.indexOf('')));
// console.log(airplane.slice(airplane.lastIndexOf('')+1));

// console.log(airplane.slice(-2));
// console.log(airplane.slice(1,-1));

// const checkMiddleSeat=function(seat){
//  const s=seat.slice(-1);
//  if(s==='B'||s==='E'){
//  console.log('you got the middle seat');
// }
// else console.log('you got lucky');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));


