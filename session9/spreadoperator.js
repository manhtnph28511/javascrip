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
   }
};
////The spread oprator(...)
const arr=[7,8,9];
const badNewArr=[1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const newArr=[1,2,...arr];
console.log(newArr);

console.log(...newArr);
console.log(1,2,7,8,9);

const newMenu=[...restaurant.mainMenu,'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy=[...restaurant.mainMenu];

///join 2 arrays
const menu=[...restaurant.starterMenu,...mainMenu];
console.log(menu);

//iterables:arrays,string,maps,sets,NOT obj
const str ='jonas';
const letter=[...str,'',',S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

const ingredients=[
    //prompt("let\'s make pasta! Ingreddient 1?"),prompt("Ingreddient 2?"),prompt("Ingreddient 3?")
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
restaurant.orderPasta(...ingredients);


/////////////obj
const newRestaurant={founderIn:1998,...restaurant,founder:'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy={...restaurant};
restaurantCopy.name='Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
