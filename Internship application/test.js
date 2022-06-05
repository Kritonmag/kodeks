// 1. В чем разница между null и undefined?

null используется когда мы хотим указать, что на данном этапе значение у этой переменой отсутствует
let a = Null
alert(a) // Null

undefined значение не определено 
let b
alert (b)  // undefined

// 2. Почему вывод в консоль obj.someprop.x приводит к ошибке?
// const obj = {};
// console.log(obj.someprop.x);

Потому что внутри объекта(obj) нет объекта(someprop) со свойством(x)

const obj = {
  someprop: {
    x: 'str',
    y: 2
  }
};
alert(obj.someprop.x)  //str

// 3. Как проверить, является ли значение массивом?

let arr = ['1','2','32']

alert(Array.isArray(arr)) //true

// 4. Проверить, является ли целое число квадратом, не используя математические функции.

const num = value => {
  for (let i = 0; i <= value; i++) {
    if (i * i === value)
    return i;
  }
  
  return 'Это число не квадратное'
};

alert(num(98))

// 5. Написать функцию, которая принимает в качестве аргумента строку и возвращает значение true, если строка является палиндромом, и false, если это не так. При решении задачи необходимо учитывать пробелы и знаки препинания, регистр символов в заданной строке не учитывать.

function palindrome(word) {
  word = word.toLowerCase()
  let wordRev = word.split('').reverse().join('')
  if (word == wordRev) {
    alert('true')
  }
  else
  alert('false')
}

palindrome('racecar')

// 6. Напишите функцию, которая возвращает n-ую запись в последовательности Фибоначчи, где n — это число, которое вы передаёте в качестве аргумента функции.

let fib = [0];

function fibonacci(x) {

  let one = 0;
  let two = 1;

  for (let i = 1; i <= x ; i++) {
    let current = one + two;
    
  one = two;
  two = current;

  fib.push(current)
}}

fibonacci(23)

alert(fib[fib.length - 1])

// 7. Попробуйте проанализировать, что делает следующий код.

const nums = [0, 39, 28, 34, 1, 3, 6, 8, 4, 72, 7];

nums.forEach(num => {
	setTimeout(() => {console.log(num)}, num);
});

Каждый console.log ставится в очередь вызовов.
А потом из этой очереди вызываются те console.log, у которых истёк таймаут. 
То есть сначала 0, потом 1 и т.д.

// 8. Напишите на js функцию, которая принимает два аргумента: массив из уникальных
// целых чисел и сумму в виде целого числа.
// Если сумма двух любых чисел массива из аргумента равна числу, которое приходит
// вторым аргументом,
// функция должна вернуть новый массив из этих двух чисел в любом порядке.
// Если решения нет, вернуть пустой массив. Текущее число само с собой складывать нельзя.

function numSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    const num = array[i];                   // Присваеваем первую переменную элементу массива
 
    for (let comI = i + 1; comI < array.length; comI++) {
      const comNum = array[comI];           // Присваеваем вторую переменную элементу массива
 
      if (comNum + num === targetSum) {     // Если переменные в сумме ровны targetSum
        return [num, comNum];               // то мы выводим в массив значение переменных
      }
    }
  }
 
   return []; 
 }
 
 alert(numSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

