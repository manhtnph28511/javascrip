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
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
   },
   orderPizza:function(mainIngredient,...othersInredients){
    console.log(mainIngredient);
    console.log(othersInredients);
   },
};

const rest1={
    name:'Capri',
    // numGuests:20,
    numGuests:0,
};

const rest2={
    name:'La Piazza',
    owner:'Giovanni Rossi',
};

///OR assigment operator
// rest1.numberGuests=rest1.numGuests||10;
// rest2.numberGuests=rest2.numGuests||10;
// rest1.numGuests||=10;
// rest1.numGuests||=10;

rest1.numGuests??=10;
rest2.numGuests??=10;

///AND ass operator
// rest1.owner=rest1.owner&&'<ANONIMOUS>';
// rest2.owner=rest2.owner&&'<ANONIMOUS>';
rest1.owner&&='<ANONYMOUS>';
rest2.owner&&='<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
