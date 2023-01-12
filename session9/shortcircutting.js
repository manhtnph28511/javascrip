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

restaurant.numberGuests=0;
const guests=restaurant.munGuests||10;
console.log(guests);


///nullish :null and underfined(not 0 or '')
const guestsCorrect=restaurant.numGuests??10;
console.log(guestsCorrect);



//use ANY data type,return ANY data type,short-circutting

console.log(3||'jonas');
console.log(''||'jonas');
console.log(true||0);
console(Undefined||null);

console.log(undefined||0||''||'hello'||23||null);

restaurant.numGuests=23;
const guests1=restaurant.numGuests?restaurant.numGuests:10;
console.log(guests1);

const guests2=restaurant.numGuests||10
console.log(guests2);

console.log('---AND---');
console.log(0 &&'jonas');
console.log(7 && 'jonas');

console.log('hello'&& 23 && null &&'jonas');

if(restaurant.orderPizza){
    restaurant.orderPizza('mushrooms','spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');
