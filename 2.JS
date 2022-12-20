// Task1

let country = 'Sweden' ? access = 'true' : access ='false';

console.log(access);

// Task2

// Task4
const count = +prompt('Количество повтрений');
for (let i = 0; i < count; i++){
  console.log(i ** 2);
}

// Task7

const getSquare = (min, max) => {
    for (let i = min; i < max; i++){
        console.log(i ** 2);
    }
}

getSquare(30, 50);
getSquare(23, 40);
