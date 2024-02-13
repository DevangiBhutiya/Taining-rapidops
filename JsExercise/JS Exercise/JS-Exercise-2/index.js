// Question  1

// let static_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let Input = 3;

// const firstlast = (arr, num) => {
//   const first = arr.slice(0, num);
//   const last = arr.slice(-num);
//   return `First ${num} element : ${first} \n Last ${num} element : ${last}`;
// };

// const res = firstlast(static_array, Input);
// console.log(res);

//Question 2

// let num = 2544168
// debugger
// const str = num.toString();
// const result = [str[0]];

// console.log(result)

// for(let x=1; x<str.length; x++)
//   {
//     if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
//      {
//       result.push('-', str[x]);
//      }
//     else
//      {
//       result.push(str[x]);
//      }
//   }
// console.log(result.join(''));

//Question 3

// const arr = [0, 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9];

// const mostFrequent = (arr) => {
//   let max_count = 1,
//     res = arr[0];
//   let curr_count = 1;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] == arr[i - 1]) curr_count++;
//     else curr_count = 1;

//     if (curr_count > max_count) {
//       max_count = curr_count;
//       res = arr[i - 1];
//     }
//   }

//   return res;
// };

// console.log(mostFrequent(arr));

//Question 4

// let static_array = [0,1,2,3,4,5,6,7,8,9]

// let shuffle  = static_array.sort(()=> Math.random() - 0.5)
// console.log(shuffle)

//Question 5

// let array_a = [0,1,2,3] , array_b = [3,4,5]

// let merge = array_a.concat(array_b)
// let unions=  merge.filter((value,pos) => {
//     return merge.indexOf(value) == pos;
//   });

// console.log("unions of array",unions)

// let intersect = array_a.filter(value => array_b.includes(value))

// console.log("intersect of array",intersect)

// let difference = array_a.filter(value => !array_b.includes(value))

// console.log("difference of array", difference)

//Question 6


// const num_string_range = (start, end, step, type) => {
//   const range = [];
//   for (let i = start; i <= end; i += step) {
//     if (type === "number") {
//       range.push(i);
//     } else if (type === "string") {
//       range.push(String.fromCharCode(i));
//     } else {
//       throw new TypeError("Invalid type specified. Must be 'number' or 'string'.");
//     }
//   }
//   return range;
// }

// const res = num_string_range("a".charCodeAt(0), "z".charCodeAt(0), 2, "string");
// // console.log(String.fromCharCode(97))
// console.log(res);




//Question 7

// const getMonth = (datestring) => {
//   const monthNames = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"];

//   const parts = datestring.split("/");
//   const monthIndex = parseInt(parts[1], 10) - 1; // Adjust index for zero-based months

//   const month = monthNames[monthIndex];
//   return month;
// };

// console.log(getMonth("01/07/2020")); // Outputs "July"

//Question 8

// const  getDateDifference = (date1, date2) => {

//   const dateObj1 = new Date(date1);
//   const dateObj2 = new Date(date2);

//   const diffInMs = Math.abs(dateObj2 - dateObj1);

//   const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

//   console.log(diffInDays)

//   let years = Math.floor(diffInDays / 365);
//   const remainingDays = diffInDays % 365;
//   let months = Math.floor(remainingDays / 30);
//   days = remainingDays % 30;

//   let output = "";
//   if (years > 0) {
//     output += `${years} year${years > 1 ? "s" : ""}`;
//   }
//   if (months > 0) {
//     if (output.length > 0) {
//       output += " ";
//     }
//     output += `${months} month${months > 1 ? "s" : ""}`;
//   }
//   if (days > 0) {
//     if (output.length > 0) {
//       output += " ";
//     }
//     output += `${days} day${days > 1 ? "s" : ""}`;
//   }
//   return output;
// }

// const date1 = "2018/07/01";
// const date2 = "2020/05/03";

// const dateDifference = getDateDifference(date1, date2);

// console.log(`Difference: ${dateDifference}`);

//Question 9

// function unixToDateTime(timestamp) {

//   const date = new Date(timestamp * 1000);
// console.log(date)

//   const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     timeZoneName: "short",
//   };

//   const dateTimeString = date.toLocaleDateString(undefined, options);

//   return dateTimeString;
// }
// const unixTimestamp = 1607518718;
// const dateTimeString = unixToDateTime(unixTimestamp);

// console.log(dateTimeString);

//Question 11

// let str = "This is a sample string"
// let inputstr =  "Insert me";
// let pos = 3

// const ins = (str, pos, inputstr) => {
//     return str.replace(str.substring(pos-1), inputstr) + str.slice(pos+1)
// }

// const res = ins(str, pos, inputstr)

// console.log(res)

//Question 12

// const string_chop = (str, len) => {
//   let result = [];

//   for(let i = 0; i < str.length; i++) {
//       result.push(str.slice(i, i + len));
//       i++

//   }
// return result

// }

// console.log(string_chop('RapidOpsSolution',2));

//Question 13

// let num = 1023165454197;
// const thousands = (num) => {
//   return num.toLocaleString();
// };

// const res = thousands(num);
// console.log(res);

//Question 14

// let people =
// [
//   { id: 75, name: 'abc', age: 31 },
//   { id: 435, name: 'zoya', age: 56 },
//   { id: 696, name: 'devangi', age: 26 },
//   { id: 866, name: 'xyz', age: 47 },
//   { id: 134, name: 'mahek', age: 58 },
//   { id: 837, name: 'janvi', age: 59 },
//   { id: 547, name: 'bhumika', age: 51 },
//   { id: 357, name: 'anamika', age: 30 },
//   { id: 974, name: 'chandni', age: 52 },
//   { id: 788, name: 'Priyanka', age: 44 }
// ]

// const age = (arr) => {
//   const res = arr.sort((a,b) => a.age - b.age)
//   return res

// }

// const decname = (arr) => {

//   const res = arr.sort((a,b) => b.name.localeCompare(a.name))
//   return res

// }

// console.log(age(people))

// console.log(decname(people))

//Question 15

let static_array = [
  { name: "Jack", age: 23 },
  { name: "Sam", age: 12 },
  { name: "Max", age: 20 },
];

let obj = {
  name: "Daniel",
  age: 25,
};
// for insert object 

const ins = (arr, pos, obj) => {
  
  if (pos === arr.length) {
    return [...arr, obj];
  } else {
    return [...arr.slice(0, pos), obj, ...arr.slice(pos, arr.length)];
  }
};


// for delete object 

const del = (arr, pos) => {
  let del = arr.filter((item, index) => index !== pos);
  return del;
};

const resIns= ins(static_array, 2, obj);
// const resDel= del(static_array, 2);
console.log(resIns);
// console.log(resDel)
