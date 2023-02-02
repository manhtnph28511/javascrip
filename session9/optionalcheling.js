'use strict';
const weekdays=['mon','tue','wed','thu','fri','sat','sun'];

const openingHours={
    [weekdays[3]]:{
        open:12,
        close:22,
    },
    [weekdays[4]]:{
        open:11,
        close:23,
    },
    [weekdays[5]]:{
        open:0,
        close:12 +12,
    },
};
const restaurant={
    name:'Classico Italiano',
    location:'Via Angelo Tavanti 23,Firenze,Italy',
    categories:['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu:['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu:['Pizza','Pasta','Risotto'],

    // es6 enhanced object literals
    openingHours:openingHours,

    order(starterIndex,mainIndex){
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

if(restaurant.openingHours&&restaurant.openingHours.mom)
console.log(restaurant.openingHours.mom.open);

//with optional chaining
console.log(restaurant.openingHours.mom?.open);
console.log(restaurant.openingHours?.mom?.open);

//exam
const days=['mom','tue','wed','thu','fri','sat','sun'];

for (const day of days){
    console.log(day);
    const open=restaurant.openingHours[day]?.open??'closed';

console.log(`on ${day},we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0,1)??'method does not exits');


//arrays
const users=[
{name:'jonas',email:'hello@jonas.io'}];

console.log(users[0]?.name??'users array empty');
if(users.length>0)console.log(users[0].name);
else console.log('user array empty');