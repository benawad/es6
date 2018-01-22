// Variables

var bob = 5;

const joe = 6;
let tom = 7;

tom = 9;
tom;

// Functions

const add = function(a, b) {
  return a + b;
};
console.log(add(1, 2));

const newAdd = (a, b) => {
  return a + b;
};
console.log(newAdd(1, 2));

const newAdd2 = (a, b) => a + b;
console.log(newAdd2(1, 2));

const add5 = x => x + 5;

const nums = [1, 2, 3];

console.log(nums.map(x => x + 8));
console.log(
  nums.map(function(x) {
    return x + 8;
  })
);

// default values

const multi = (x = 5) => x * 2;

console.log(multi());
console.log(multi(5));
console.log(multi(4));

// spread operator

console.log([1, 2, 3].join(" "));
const joinMe = (first, second, ...args) => first + "-" + args.join(" ");

console.log(joinMe(1, 2, "hey"));

const sub = (a, b) => a - b;

const array = [5, 3];

console.log(sub(array[0], array[1]));
console.log(sub(...array));

const newArray = [...array, 9, ...array, ...array];
newArray;

const newArray2 = [...array];
newArray2;

const colorMap = {
  blue: "red",
  pink: "yellow"
};

const newColorMap = {
  ...colorMap,
  blue: "white"
};
newColorMap;

// String templates

const firstname = "bob";
const lastname = "cool";

const name = firstname + " " + lastname;
name;

const newName = `${firstname}-${lastname}`;
newName;

// Creating objects

const nameObj = {
  firstname: firstname,
  lastname: lastname
};
nameObj;

const nameObj2 = {
  firstname,
  lastname
};
nameObj2;

const nameObj3 = {
  firstname: "I am firstname",
  [firstname]: "I am bob"
};
nameObj3;

const funcsInObj = {
  a: x => x + 3,
  b(x) {
    return x + 3;
  }
};

console.log(funcsInObj.a(5));
console.log(funcsInObj.b(5));

// destructuring

const alpha = ["a", "b", "c", "d", "e", "f"];
const [first, second, third, ...rest] = alpha;

console.log(first);
console.log(third);
console.log(rest);

const obj = {
  age: 5,
  height: 60,
  weight: 180
};

// const age = obj.age;
const { age, weight, height, ...other } = obj;
age;
other;

const { age: bacon } = obj;
bacon;

const { yogurt: y = 5 } = obj;
y;

const toString = person => `${person.age}-${person.height}-${person.weight}`;
console.log(toString(obj));

const toString2 = ({ age, height, weight }, param2 = 10) =>
  `${age}-${height}-${weight}-${param2}`;
console.log(toString2(obj, "hello"));

const grabFirst = ([first, ...rest]) => rest;
console.log(grabFirst([1, 2, 3]));

// nested destructuring

obj;
const nestedObj = {
  one: {
    ...obj,
    two: obj
  }
};
nestedObj;

const { one: { two: { age: q } } } = nestedObj;
q;

const { one } = nestedObj;
const { two } = one;
const { height: t } = two;
t;

const objArray = [obj, 5, 6];
objArray;

const [{ height: h }, ...restOfArray] = objArray;
h;
restOfArray

const {height: h2} = objArray[0];
h2
