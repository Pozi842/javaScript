// const names = ['Ден', 'Лізка', 'Тоха', 'Льоха']

// // names.push('Костя') // 'Ден', 'Лізка', 'Тоха', 'Льоха', 'Костя' - додавання елементу в кінець масиву;
// // names.unshift('Ярік') // 'Ярік', 'Ден', 'Лізка', 'Тоха', 'Льоха' - додавання елементу в початок масиву (в великих масивах працює довго);

// // const firstName_1 = names.shift() // 'Лізка', 'Тоха', 'Льоха' - видалення першого елементу із масиву. Цей елемент можна присвоїти.
// // const firstName_2 = names.pop() // 'Ден', 'Лізка', 'Тоха' - видалення останього елементу із масиву. Цей елемент можна присвоїти.

// // console.log(names.reverse()) // 'Льоха', 'Тоха', 'Лізка', 'Ден' - перевертання масиву зі зміною початкового масиву
// // console.log(names.toReversed()) // 'Льоха', 'Тоха', 'Лізка', 'Ден' - перевертання масиву без зміни початкового масиву

// // const letters = ['e', 'c', 'a', 'b']
// // console.log(letters.sort()) // 'a', 'b', 'c', 'e' - дефолтне сортування a - b  
// // console.log(letters.sort(function (a, b) { // 'e', 'c', 'b', 'a' - обернене сортування b - a
// //     return b - a
// // }))
// // console.log(letters.toSorted()) // 'a', 'b', 'c', 'e' - дефолтне сортування a - b без зміни початкового масиву

// // console.log(names.splice(1, 2)) // 'a', 'e' - вирізає елементи з масиву по індексу, також можна ввести кількість елементів які будуть видаленні зі зміною початкового масиву
// // console.log(names.toSpliced(1, 2)) // 'a', 'e' - вирізає елементи з масиву по індексу, також можна ввести кількість елементів які будуть видаленні без зміни початкового масиву

// // const greatMan = 'Тоха'
// // const index = names.indexOf(greatMan) // дістає індекс елемену
// // console.log(index)   // 2 
// // const newNames = names.with(index, 'Тоха Великий')  // змінює елемент масиву по індексу не змінюючи основний масив
// // console.log(names) //'Ден', 'Лізка', 'Тоха', 'Льоха'
// // console.log(newNames) //'Ден', 'Лізка', 'Тоха Великий', 'Льоха'

// const capitalNames = names.map(function(name, index) {
//     const newName = name + '!'
//     return newName.toUpperCase()
// })
// console.log(capitalNames) // ДЕН! ЛІЗКА! ТОХА! ЛЬОХА!

// console.log(names.length) // ДЕН! ЛІЗКА! ТОХА! ЛЬОХА!

function last(arr) {
    const lenght = arr.length
    
    return arr[lenght-1]
};


const arr = [1, 2, 3]
console.log(last(arr))
