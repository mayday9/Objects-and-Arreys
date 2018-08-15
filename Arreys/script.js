/* todo Задание 1. 1. Создайте калькулятор для введённых значений*/

/*
var arrey = [];
var watcher = true;
var result = 0;

while (watcher == true) {
    var number = parseInt(prompt("Задание 1. Калькулятор (сложение элементов массива). \nВведите число: "));
    var checker = number * 1;

    if (isNaN(checker)) {
        watcher = false;
        break;

    } else {
        arrey.push(number);
       }

}
for(let i = 0; i < arrey.length; i++){
    result = result + arrey[i]};

console.log("Подсчет завершен! \nРезультат сложения элементов массива равен: " + result);
*/


/* todo Задание 2 Поиск в массиве
Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер,
если найдено, или -1, если не найдено.*/

/*
var arr = [1, 2, 3, 4, 5];
var value= parseInt(prompt("Введите значение value для поиска в массиве"));
var index = -1;

for(var i = 0; i<arr.length; i++){
    if(arr[i] == value){
        index = i;
    }
}
alert("Резудьтат поиска в массиве равен: " + index);
*/

// todo 3. В массиве, содержащем положительные и отрицательные целые числа, вычислить сумму четных положительных элементов.

/*
var task3Arr = [-1, 1, 10, 1, 5, -2, 3];
result3 = 0;

for(let i = 0; i<task3Arr.length; i = i + 2){
    if(task3Arr[i] >=0){
        result3 = result3 + task3Arr[i];
    }
}
alert("Сумма четных положительных элементов массива равна: " + result3);
*/

// todo 4. Среди элементов массива с четными индексами, найти тот, который имеет максимальное значение.

/*
var task4Arr = [-1, 1, 10, 1, 5, -2, 20];
result4 = task4Arr[0];

for(let i = 0; i<task4Arr.length; i = i + 2){
    if(task4Arr[i] > result4){
        result4 = task4Arr[i];
    }
}
alert("Сумма четных положительных элементов массива равна: " + result4);
*/

// todo 5. Элементы массива, которые меньше среднего арифметического.

/*
var task5Arr = [-1, 1, 10, 1, 5, -2, 20];
var arrLessAverage = [];
sum = 0;
average = 0;

for(let i = 0; i<task5Arr.length; i++){
    sum = sum + task5Arr[i];
}

average = sum / (task5Arr.length);

for(let i = 0; i<task5Arr.length; i++){
    if (task5Arr[i] < average) {
        arrLessAverage.push(task5Arr[i]);
    }
}

alert("Список элементов массива, которые меньше среднего арифметического: " + arrLessAverage);
*/

// todo 6. Найти номер минимального по модулю элемента массива.

/*
var task6Arr = [-1, 1, 10, 1, 5, -2, 20];
var minimal = Math.abs(task6Arr[0]);

for(let i = 0; i<task6Arr.length; i++){
    if (Math.abs(task6Arr[i]) < minimal) {
        minimal = task6Arr[i];
    }
}

alert("Mинимальный по модулю элемент массива равен: " + minimal);
*/