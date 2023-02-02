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

//map iteration
const question=new Map([
    ['question','what is the best programing language in the world'],
    [1,'c'],
    [2,'java'],
    [3,'javascript'],
    ['correct',3],
    [true,'correct'],
    [false,'try again'],
]);
console.log(question);
console.log(Object.entries(openingHours));
const hoursMap=new Map(Object.entries(openingHours));
console.log(hoursMap);
for (const [key,value] of question){
    if(typeof key ==='number') console.log(`Answer ${key}: ${value}`);
}
const Answer=Number([prompt('Your answer')]);
console.log(answer);

console.log(question.get(question.get('correct')==aswer));

//convert map to array
console.log([...question]);
// console.log(...question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

//map fundamentals
// const rest= new Map();
// rest.set('name','Classico Italiano');
// rest.set(1,'Firenze,Italy')
// console.log(rest.set(2,'Lisbon','Portugal'));

// rest.set('categories'['Italian','Pizzeria','Vegetarian','Organic'],)
// .set('open',11)
// .set('close',23)
// .set(true,'we are open :D')
// .set(false,'we are closed:(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time=21;
// console.log(rest.get(time>rest.get('open')&&time <rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);


// const arr=[1,2];
// rest.set([1,2],'Test');
// rest.set(document.querySelector('h1','Heading'));
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get([arr]));





//set
// const orderSet=new Set([
//     'Pasta',
//     'Pizza',
//     'Pizza',
//     'Risotto',
//     'Pasta',
//     'Pizza',
// ]);
// console.log(orderSet);

// console.log(new Set('jonas'));
// console.log(orderSet.size);

// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// console.log(ordersSet);

// for(const order of orderSet)
// console.log(order);

// //example
// const staff=['waiter','chef','waiter','manager','chef','waiter'];
// const staffUnique=[...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['waiter','chef','waiter','manager','chef','waiter']).size);
// console.log(new Set('Jonasschmedmann').size);


