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
   orderPasta;function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
   }
};


/////////////////////////Destructuring obj
 restaurant.orderDelivery({
     time:'22:30',
     mainIndex:2,
     starterIndex:2,
    
 });
 restaurant.orderDelivery({
     time:'22:30',
     address:'Via del Sole ,21',
    mainMenu:2,
    starterIndex:2,
 });

 restaurant.orderDelivery({
     address:'Via del Sole ,21',
     starterIndex:1,
 });
 const{name,openingHours,categories}=restaurant;
 console.log(name,openingHours,categories);

 const{name:restaurantName,openingHours:hours,categories:tags}=restaurant;
 console.log(restaurantName,hours,tags);




 ////////////default values
 const{menu=[],starterMenu:starter=[]}=restaurant;
 console.log(menu,starter);



///////mutating variables
 let a=111;
 let b=999;
 const obj={a:23,b:7,c:14};

 ({a,b}=obj);
 console.log(a,b);


 

/////////nested objects
// const{fri:{open,close}}=openingHours;
// console.log(open,close);
// console.log(o,c);




//Destructuring array
// const arr=[2,3,4];
// const a=arr[0];
// const b=arr[1];
// const c=arr[2];


// const[x,y,z]=arr;
// console.log(x,y,z);
// console.log(arr);

// let [main, secondary]=restaurant.categories;
// console.log(main,secondary);



//Switching variables
// const temp=main;
// main=secondary;
// secondary=temp;
// console.log(main,secondary);

// [secondary,main]=[secondary,main];
// console.log(main,secondary);

// const [starter,mainCourse]=restaurant.order(2,0);
// console.log(starter,mainCourse);

//nested destructuring
// const nesetd=[2,3,[5,6]];
// // const [i, ,j]=nested;
// // console.log(i,j);
// const [i, ,[j,k]]=nested;
// console.log(i,j,k);

// //default values
// const[p=1,q=1,r=1]=[8,9];
// console.log(p.q.r);

