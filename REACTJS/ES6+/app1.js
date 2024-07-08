//6. Enhanced object literals

//1. Định nghĩa key: value cho object
//2. Định nghĩa method cho object
//3. Định nghĩa key cho object dưới dạng biến

var name = 'Javascript';
var price = 1000;

//1. Định nghĩa key: value cho object
var course = {
    name,
    price,
    getName() {
        return name;
    }
};
console.log(course);

//2. Định nghĩa method cho object
var fieldName = 'name';
var fieldPrice = 'price';
const course1 = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
};
console.log(course1);


//VD: Sử dụng Enhanced object literals

/**
 * Cho trước mảng infoArr, viết hàm arrToObj để chuyển array thành object 
 * Tuy nhiên rất ít bạn để ý rằng 
 * js cung cấp sẵn cho chúng ta phương thức để convert array → object, Object.fromEntries()
 */

function arrToObj(arr) {
    return Object.fromEntries(arr);
  }
  
  const information = arrToObj(
     [
        ['name', 'QuynhGiang'],
        ['age', '21'],
        ['university', 'IUH']
     ]
  )
  console.log(information)