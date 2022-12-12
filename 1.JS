// Задание 1
// Выполните первые 29 уроков

https://code-basics.com/ru/languages/javascript/lessons/primitive-data-types

// Задание 2
// Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)

let userName = prompt('Введите ваше имя');

alert('Привет, ' + userName);

// Задание 3
// Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.

let num1 = prompt('Введите число от 1 до 10');
let num2 = prompt('Введите степень, в которую нудно возвести ваше число');
let result = num1 ** num2;

console.log(result);

// Задание 4
// Пройдите 5 уровней игры ЗДЕСЬ (до функций).

https://silentteacher.toxicode.fr/

// Задание 5
// Создать произвольную переменную, присвоить ей произвольное строковое значение. C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let someString = 'something';

if(someString === 'hidden'){
    someString ='visible';
} else{
    someString = 'hidden';
}

console.log(someString);
