//8. Destructuring (Phan ra)

var array = ['Javascript', 'PHP', 'Ruby'];

//var a = array[0];
//var b = array[1];
//var c = array[2];

//9.Rest parameter (toan tu rest) lay ra phan con lai
// var [a, ...rest] = array;

// console.log(a);
// console.log(rest);

//Su dung voi object
var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    // children: {
    //     name: 'ReactJS'
    // }
    description: 'Course description'
};

var {name, description = 'Default description'} = course;
console.log(name);
console.log(description);

// var {name, price, image} = course;
// console.log(name, price, image);

// var{name, ...rest} = course;
// console.log(name);
// console.log(rest);

//Xoa object (xoa 1 key trong object)
// var{name, ...newObject} = course;
// console.log(newObject);

// var {name: parentName, children:{name}} = course;
// console.log(parentName);
// console.log(name);

//Dau ... la toan tu rest
function logger(...params){
   console.log(params);
}

console.log(logger(1, 2, 3, 4, 5));


const { 
    a = 'default', 
    b, 
    ...rest 
} = {
    b: 'val1',
    c: 'val2',
    d: 'val3'
};

console.log(a, b, rest); // Output: default val1 { c: 'val2', d: 'val3' }

/**
 * Giải thích
Chính xác.
Do object không chứa key a nên a sẽ nhận giá trị mặc định là 'default'.
Giá trị b bằng 'val1' do object có 1 key b có giá trị là 'val1'.
Toán tử rest lấy ra tất cả các key còn lại chưa được lấy ra bằng destructuring. Lúc này, rest bằng object,
chứa 2 key còn lại là c và d.
 */



