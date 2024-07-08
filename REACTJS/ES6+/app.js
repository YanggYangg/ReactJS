//1.
//2.
//3.
//4.Arrow function (Ham mui ten)
//5.
//6.
//7.
//8.
//9.
//10.
//11.
//12.

const logger =  (log) => {
    console.log(log)
}

logger('message......')

const sum = (a, b) => {
    return a + b
}
console.log(sum(1, 2))

const sum2 = (a, b) => a + b
console.log(sum2(1, 3))

//Return object
const sum3 =(a, b) => ({a: a, b: b});
console.log(sum3(1, 4))

const logger1 = (logger1) => console.log(logger1)
logger1('message......')

const course = {
    name: 'Javascript basic!',
    getName: () => {
        return this;// context
        //Arrow function khong co context
    }
};
console.log(course.getName())

const course1 = function(name, price){
    this.name = name;
    this.price = price;
}

const jsCourse = new course1('Javascript', 1000)
console.log(jsCourse)