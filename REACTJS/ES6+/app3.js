// Content: Destructuring
function logger(obj){
    //Neu nhieu tham so thi phai viet nhieu dong
    console.log(obj.name);
    console.log(obj.price);
}

logger({
    name: 'Javascript co ban',
    price: 1000,
    description: 'The best programming language'
});

//Cach 2: lay thang key ra
function logger1({name, price, ...rest}){
    console.log(name);
    console.log(price);
}

logger1({
    name: 'Javascript nang cao',
    price: 2000,
    description: 'The best programming language in the world'
});

//output: 2 6 
// function logger2([a, b]){
//     console.log(a);
//     console.log(b);
// }

// logger2([2, 6, 12, 3, 4, 4]);

//output: 2 6 12 3 4 4
//rest se in ra phan con lai
function logger2([a, b, ...rest]){
    console.log(a);
    console.log(b);
    console.log(rest);
}

logger2([2, 6, 12, 3, 4, 4]);

//10. Spread operator: toan tu giai

//Example 1
var array1 = ['Javascript', 'PHP', 'Ruby'];
var array2 = ['ReactJS', 'Angular', 'VueJS'];
//Hay tao ra array3 chua array1 va array2
//Cach 1: dung concat
var array3 = array1.concat(array2);
console.log(array3);
//Cach 2: dung spread operator
var array3 = [...array1, ...array2];
console.log(array3);

//Example 2
var obj1 = {
    name: 'Javascript'
};
var obj2 = {
    price: 1000
};
//Output obj3: {name: 'Javascript', price: 1000}
var obj3 = {...obj1, ...obj2};
console.log(obj3);

//Example 3
var defaultConfig = {
    api: 'http://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    timeout: 1000
};
var exerciseConfig = {
    ...defaultConfig,
    api: 'http://domain-bai-tap',
    timeout: 2000
};
console.log(exerciseConfig);
