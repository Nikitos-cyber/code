/* Типы данных , операторы , методы и свойства */

let myVar ; //объявление

//существует 6 примитивных типов данных 

myVar = 10;//Число
myVar = 'Hello world!'; //Строка
myVar = true; //Булиновый
myVar = null;//null
myVar = undefined;//undefined
myVar = Symbol();//Symbol

//Обыект
myVar = {};
myVar = [];
let regExp = /w+/g;//регулярные
let func = function(){};
let error = Error('error message');

//Опрератор typeof - тип данных (выводит строку)
console.log(typeof func);

//Тип данных null - пустое или не известное значение
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

//Тип данных undefined - полностью отсутствует значение (не определено)

//Тип данных boolean - true or false
//Любое значение можнопреобразовать  в булиновый тип спомощью конструктора булевого типа
//1.Boolean
console.log(Boolean(5));//true
console.log('Hello');//true

//исключения
console.log(Boolean(0));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false

//  || && !

//Тип данных число 
console.log(typeof NaN);//число
console.log(typeof Infinity);//число

//Арифметические операторы
//1. унарный плюс - используется для преобразования в тип данных число
console.log(+5);
//2. унарный минус - преобразует в отрицательное число
console.log(-5);

//инкремент и дикримент 
let i = 5;

console.log(i++);
console.log(++i);
console.log(--i);

//Присваевание с операцией
n += 5;
n -= 6; // n = n - 6;

//Операторы сравнения
console.log(3 > 2);
console.log(3 < 2);
console.log(5 >= 3);
console.log(10 <= 5);
console.log(5 === 5);//строгое соответствие без приведения типов
console.log(5 !== 6);
console.log(5 == '5');//с приведением типов 
console.log(5 != '5');
//если условие не выполняется - false 

//Объект Math
//1.Извлечение корня 
console.log(Math.sqrt(25));
//2.возведение в степень
console.log(Math.pow(2,3));//число, степень

//Является ли число целым 
console.log(Number.isInteger(5));// true or false

//Тип данных строка
let myStr = "Hello";

//Оператор конкатинации (сложение строк)
console.log('Hello' + 'world!');
//Js понимает что + оператор конкатинации если один операнд является строкой !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Методы и свойства строк
//1. length - длинна строки 
console.log(myStr.length);

//2. Метод UpperCase - возвращает строку в которой все символы будут приведены к верхнему регистру 
console.log(myStr.toUpperCase());
//3. LowerCase - в нижнем регистре
console.log(myStr.toLowerCase());

//4. CharAt - возвращает симвоол с индексом который мы указали
console.log(myStr.charAt(0));
//альтернатива 
console.log(str[0]);

// Методы возвращающие подстроку
console.log(myStr.substring(1));//возвращает под строку с индекса (который укажем) и до конца строки, 2й параметр до какого индекса (не включая)
console.log(myStr.slice(-6));//работает также как и substring , можно указать отрицательное значение 
console.log(str.substr(6,9));//1 параметр с какого элемента,2 параметр - сколько символов вернуть
//НЕ МЕНЯЮТ СТРОКУ А ВОЗВРАЩАЮТ НОВУЮ!!!

// indeхOF - для поиска подстроки - возвращает индекс первого символо найденой строки 
console.log(str.indexOf('ss'));//если нетстроки то получим  -1

//replace - Для замены подстроки
console.log(str.replace('my Friends','World'));

//split - разбивает строку на массив 
console.log(str.split(' '));//необходимо указать только разделитель (пробел)



//Динамическая типизация данных

'use strict'; //указывает браузеру что нужно обрабатывать код по современным правилам

//Методы взаимодействия с пользователем
//1. comfirm - модальное окно с двумя кнопками 
const question = confirm('Тебе есть 18 лет?');//true or false
//prompt - модальное окно с вводом (поле) получаем строку 
const question2 = prompt('Тебе есть 18 лет?','18');//true or null

//Преобразование типов данных
console.log(5 + '5'); // если при операнде + будет хотябы одна строка то будет все преведено к типу данных строка (конкатинация)
//а операторы (* / - )будут преобразовывать в тип данных число
console.log(1 / '6');

//Явные преобразования
console.log(Boolean(5));
//or
console.log(!!5);

//Приобразование в строковый тип
console.log(String (10));
console.log(10 + '');
console.log(10 .toString());//Работает только с числами и булиновыми значениями
//Приобразование в числовой тип
console.log(Number('22'));
console.log(+ '4');
n *= 1;
//parseInt and parseFloat
console.log(parseInt('11'));//Если перед числом будут буквы то вернется NaN , 2 параметр система исчисления
console.log(parseFloat('22.11'));//Если перед числом будут буквы то вернется NaN

let item = 5 > 2 ? console.log('true') : console.log('false'); 
//switch
switch(n){
    case 2: console.log('true'); break;
    case 3: console.log('false'); break
    default: console.log('none');
}



//ФУНКЦИИ!!!
//функция - кусок кода или набор команд который один раз пишется и его  можно использовать повторно

//обыявление функции
//1.с помощью оператора function
function outputMessage(name){
    //тело
    console.log('Hello' + name);
}
outputMessage("Max");
//function declaration - можно вызвать где угодно 

const consoleMessage = function(){
    console.log('Message');
};
consoleMessage();

//с помощью объекта
const alertMessage = new Function('x','y','alert("hi");');
alertMessage();

//одна функция - одно действие

//псевдомассив arguments -содержит все аргументы функции
const sum = function (a,b){
    console.log(arguments);
}


//ананонимные функции
//если после function есть имя то это именованая функция во всех остальных случаях будет анонимной 
const sumTree = function(a,b){
    return a+b;//
}
//callback функции
//в качестве аргумента можно передавать функции
const doNum = function(a,b,callback){
if(typeof a === 'number' && typeof b === 'number')
};