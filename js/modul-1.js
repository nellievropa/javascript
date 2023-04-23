// 'use strict'

// const totalPrice = 200.74;



// console.log('price:', totalPrice);

// const type = typeof true;
// console.log(type);

// console.log('before');
// alert('wywywyw');
// console.log('after');

// const message = 'Хотите продлить подписку?';

// const shouldRenew = confirm(message);
// console.log(shouldRenew);

// let quantity = prompt('введите количество товара:');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth);

// let elementHeight = '200.58px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight:', elementHeight);

// let salary = 1425.2365478;
// єто 2 строки
// salary = salary.toFixed(2);
// salary = Number(salary);

// можно записать в одну строку

// salary = Number(salary.toFixed(3));

// console.log(salary.toFixed());
// console.log(salary);

// можно записать еще и так
// console.log(Number(salary.toFixed(4)));

// console.log(Number('witovn'));

// возведение в степень
// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);

// или тоже
// console.log(2 ** 3);

// const result = Math.pow(2, 4);

// console.log(result);

// квадратний корень

// Math.sqrt()

// 1.Попросить ввести число и сохранить в переменную
// let base = prompt('Дайте число');
// base = Number(base);

// console.log(base);

// 2.Попросить ввести степень и сохранить в переменную
// let power = prompt('Дайте степень');
// power = Number(power);

// console.log(power);
// 3. возвести в степень и вівести результат
// const result = base ** power;

// console.log(result);

// const max = 50;
// const min = 30;
// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);
// округляет
// Math.round

// можно использовать, когда нужно мнять цвета фона на сайте
// const colors = ['tomato', 'yellow', 'green', 'skyblue', 'pink'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;

// const quantity = 15;
// const orderMsg = "вы заказываете ${quantity} холодильников";

// console.log(orderMsg);


// нормалізували- привели всі літери до одного виду, для зручного пошуку
// const brand = Samung;
// brand = brand.toLowerCase();

// console.log(brand);

// метод slice(x) - виведе все після значення Х

// let brand = 'saMSunG';
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();

// console.log(brand);


// пошук в рядку

// const blackListWord1 = 'Спам';
// const blackListWord2 = 'распродажа';

// const string1 = 'Привае,я принц, я не спам';
// const string2 = 'Самая большая РАСПРДАЖА в мае';
// const string3 = 'Рекламная кампания';

// console.log(string1.includes(blackListWord1));
// console.log(string1.includes(blackListWord2));

// console.log(string2.includes(blackListWord1));
// console.log(string2.toLowerCase().includes(blackListWord2));

// console.log(string3.includes(blackListWord1));
// console.log(string3.includes(blackListWord2));

// ЧИСЛА - рівність і нерівність
// const isEqual = 1 === true; - строго равно
// const isEqual = 0 !== false; - строго не равно



// Boolean-приведение к булю
// console.log(Boolean(0));

// логічне І = && -  приводить до true
//  console.log(5 && 6 && 'true');- виводить Falce фбо отсаннє значення

// console.log(9 && 36 && 54 && 0 && -23 && 'true') - виведе 0 бо це false

// логічне або -- якщо жодне значення не приводиться до правди, то вертає останнє значення
// console.log(5 || 10 || 56); -виведе 5

// логічне НЕ - все, що не fasle, приводить до true і навпаки
// console.log(!0); - true
// console.log(!0); - false

// const x1 = 10;
// const x2 = 30;
// const number = 50;

// console.log('Число ${number} попадает в отрезок до ${x1}?' , number < x1);

// console.log('Число ${number} попадает в отрезок от ${x2}?' , number > x2);

// const res1 = number > x1 && number < x2;

// number1 > x1 && number < x2
// 50 > 10 && 50 < 30
// true    && false
// false - ответ

// number1 > x1 && number < x2
// 5 > 10 && 5 < 30
// false   && true
// false - ответ

// number1 > x1 && number < x2
// 15 > 10 && 15 < 30
// true    && true
// true - ответ

// console.log('Число ${number} попадает в отрезок от ${x1} до ${x2}?' , res1);

// const res2 = number < x1 || number > x2;
// number1 < x1 && number > x2
// 150 < 10 && 150 > 30
// false    && true
// true - ответ - операнд або вертає true


// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// // const canOpenChat = isOnline && isFriend && !isDnd; - могу откріть чат
// console.log('Можно отркить чат?' , canOpenChat);



// const subscription =  'pro';

// const canAccessContent = subscription === 'pro' || subscription === 'vip';
// console.log('Усть доступ к контенту' , canAccessContent);



// IF
// if() {
// // тело
// console.log('qeyeyey');
// }

// console.log( 'дальше');



// if (50 < 60) {
//     console.log('x > Y');
// }
// else {
//     console.log( 'x < y');
// }
// console.log('');


// const salary = 1000;

// if (salary < 500) {
//     console.log('level 1');
// } else if(salary > 500 && salary < 1500) {
//     consolele.log('level 2');
// } else if(salary > 1500 && salary < 3000) {
//     consolele.log('level 3');
// } else { consolele.log('level N');

// }
   

// Тернарний оператор

// const balance = 1000;
// let message;

// if (balance >= 0) {
//     message = 'good';
// }
// else {
//     message = 'not good';
// }


// все, що вище можна записати так:

// const message = условие ? віражение1 : віражение2;

// console.log (message);

// const message = balance >=0 ? 'good' : 'not good';

// console.log (message);


// блочная область видимости переменніх-- буде видно тільки внутри скобок {}
// if (true) {
//     const a = 5;

//     console.log(a);
// }

// вибрати номер за зіркою і ціною

// const star = 8;
// let price;

// if (star === 1) {
//     price = 20;
// }
// else if (star === 2) {
//     price = 30;
// }
// else if (star === 3) {
//     price = 40;
// }
// else if (star === 4) {
//     price = 70;
// }
// else if (star === 5) {
//     price = 120;
// }
// else {
//     console.log('Такого числа звезд нет');
// }
// console.log(price);

// все, что выще можно записать через свитч

// const star = 1;
// let price;

// switch (star) {
//     case 1:
//         price = 20;
//         console.log('одина ночь стоит 20$');
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такого числа звезд нет');
// }

// console.log(price);

// если 1 и 2 звезді стоят 20, 3 и 4 звезді стоят 30, а 5 - 120, то пишется так:

// const star = 4;
// let price;

// if (star === 1 || star === 2) {
//     price = 20;
// }
// else if (star === 3 || star === 4) {
//     price = 30;
// }

// else if (star === 5) {
//     price = 120;
// }
// else {
//     console.log('Такого числа звезд нет');
// }
// console.log(price);

// со свич єто будет віглядеть так:

// const star = 5;
// let price;

// switch (star) {
//     case 1:
//         case 2:
//         price = 20;
//         console.log('одина ночь стоит 20$');
//         break;
//     case 3:
//         case 4:
//         price = 30;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такого числа звезд нет');
// }

// console.log(price);

//  для решения задач пишем себе план :
// 1. создать переменніе
// const option = 6;
// let message = '';

// 2. написать cвитч
// 3. в каждом кейсе записать месседж
// switch (option) {
//     case 1:
//         message = 'ви можете забрать товар в нашем офисе завтра';
//         break;
//      case 2:
//         message = 'курьер доставит товар вам с 12:00 до 18:00';
//         break;
//      case 3:
//         message = 'посылка будет отправлена сегодня, получите на почте';
//         break;
    
//     default:
//      message = 'вам перезвонит наш менеджер';
// }

// 4. вивести лог (месседж)

// console.log(message);


// FOR - циклі  i = i + 3 которотк пишеться так i += 3

// for (let i = 49; i >= 0; i -= 3) {
//     console.log(i);
// }
// console.log('qwewewwe');


// посчитать сумму з/п для какого-то числа рабочих со случайнім значением з/п
// 1. сделать вари
// const minSalary = 300;
// const maxSalary = 6000;
// const employees = 15;
// let totalSalary = 0;

// 2. перебрать работков в цикле
// for (let i = 1; i <= employees; i += 1) {
    // 3. сгенерить случайную з / п и приплюсовать к тоталу
    // const salary = Math.round(
    //     Math.random() * (maxSalary - minSalary) + minSalary,
    // );
    // console.log(`ЗП працівника номер ${i} - ${salary}`);
// 4. прибавить к общей сумме
//     totalSalary += salary;
    
// }
// 5. вивести лог
// console.log(`total salary:`, totalSalary);


//  2-га задача на цикли: посчитать сумму четных чисел в определенном отрезке

// 1.объявить переменные
// 2.создаем цикл
  // 3.проверить на четность методом остаток от деления !!! (а % b);  
  // 4.считаем сумму
const min = 3;
const max = 9;
let total = 0;

for (let i = min; i <= max; i += 1) {
    console.log(i);
 
    if (i % 2 !== 0) {
        console.log(`нечетное: `, i);
        continue;
    }
        console.log(`четное: `, i);

        total += i;
}
console.log(`total: `, total);




