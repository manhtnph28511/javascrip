const flights=
'_Delayed_departure;fao482698561;txl14061234;11:25
+_Arrival;bru094874;fao675268;11:45
+_delayed_arrival;hel37409;fao6752196;12:05
+_Aeparture;fao520762872;lis852698;12:30';
console.log(flight.split('+'));


const getCode=str=>str.slice(0,3).toUpperCase();
for (const flight of flight.split('+')){
    const[type,from,to,time]=flight.split(';');
    const output=`${type.replaceAll('_','')} 
    ${getCode(from)} ${getCode(to)} ${time}.replace(':','h')})`.padStart(30);

    console.log(output);
}