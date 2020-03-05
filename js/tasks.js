var wish = 'pug';
['pug', 'cat', 'mouse'].filter((element, index, arr) => {
    return element === wish
});

// #############

const values = [1, 4, -10, 0, 100, 5.5] // more than 1
const strings = ['', null, 'Test', 'name', false, 0, ''] // string. not empty
const users = [
    { name: 'Dima', age: 23 },
    { name: 'Ann', age: 21 },
    { name: 'Yulia', age: 15 },
    { name: 'Someomne', age: 88 }
]; // more than 18; less than 25


var test = values.filter((el) => {
   return el > 0
})
// var test = values.filter((el) => el > 0)

var str = strings.filter((el) => {
    return el !== '' && typeof el == 'string'
})
// var str = strings.filter((el) => el !== '' && typeof el == 'string');

var user = users.filter((el) => {
    return el.age > 18 && el.age < 25
})
// var user = users.filter((el) => el.age > 18 && el.age < 25)

