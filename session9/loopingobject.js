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

//properties values
const properties=Object.keys(openingHours);
console.log(properties);

let openStr=`we are open on ${properties.length}days:`;
for(const day of properties){
    openStr+=`${day}`;
}
const values=Object.values(openingHours);
console.log(values);


//entries object
const entries=Object.entries(openingHours);
console.log(entries);

//key,values
for(const [key,{open,close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`);

}
