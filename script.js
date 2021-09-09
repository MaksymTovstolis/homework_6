let period;
let category;
let goods;
let countOfGoods;
let image;
let coefficient;
let finalCost;
// vegetables

let vegetables;
let cabbage = 8;
let avocado = 30;
let tomato = 10;

// fruits
let fruits;
let grapes = 20;
let raspberry = 25;
let coconut = 50;

// debugger;

do {
    period = prompt(`winter or summer period?`) .trim(` `,``) .toLowerCase();
} while( !(period == "winter" || period == "summer") );

if (period == "winter") {
    coefficient = 2;
}

if (period == "summer") {
    coefficient = 0.8;
}


do {
    category = prompt(`Choose category in which you want to buy products: vegetables or fruits`) .trim(` `,``) .toLowerCase();
} while( !(category == "vegetables" || category == "fruits") );

if (category == "vegetables") {
    do {
        goods = prompt (`Choose product from category vegetables: cabbage, avocado, tomato`).trim(` `,``) .toLowerCase();
        }while ( !(goods == "cabbage" || goods == "avocado" || goods == "tomato" ));   
} 

if (category == "fruits") {
    do {
        goods = prompt (`Choose product from category fruits: grapes, raspberry, coconut`).trim(` `,``) .toLowerCase();
        }while ( !(goods == "grapes" || goods == "raspberry" || goods == "coconut" )); 
}

do {
    countOfGoods = prompt(`please enter count of ${goods}`);
}while (!countOfGoods >= 1);

if (goods == "grapes");{
    finalCost = parseInt(coefficient*(grapes*countOfGoods)) ;
}
if (goods == "raspberry");{
    finalCost = parseInt(coefficient*(raspberry*countOfGoods)) ;
}
if (goods == "coconut");{
    finalCost = parseInt(coefficient*(coconut*countOfGoods)) ;
}

if (goods == "tomato");{
    finalCost = parseInt(tomato*coefficient*(tomato*countOfGoods)) ;
}
if (goods == "avocado");{
    finalCost = parseInt(coefficient*(avocado*countOfGoods)) ;
}
if (goods == "cabbage");{
    finalCost = parseInt(coefficient*(cabbage*countOfGoods)) ;
}





document.write(`<div class="product" align="center"> <img src="images/${category}/${goods}.svg" alt="${goods}" width="100" height="100"> <p>Selected product: <b>${goods}</b></p> <p>Count of ${goods}: <b>${countOfGoods}</b></p> <p>Selected period: <b>${period}</b></p> <p>Selected category: <b>${category}</b></p> <p>Final sum: <b>${finalCost}</b></p> </div>`)




