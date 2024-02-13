import React from "react";

const DemoComp = () => {
  //interface can extend
  // interface Person {
  //     name: string
  // }
  // interface Person1 extends Person {
  //     age: number
  // }

  // const obj: Person1 = {
  //     name: "Devangi",
  //     age: 7
  // }

  //we can combine two type using intersection

  // type PersonName = {
  //     name: string
  // }
  // type PersonAge = {
  //     age: number
  // }

  // type Person1 = PersonName & PersonAge

  //we can combine two interface

  // interface DevangiName {
  //     name: string
  // }
  // interface DevangiAge {
  //     age?: number
  // }

  // type Devangi = DevangiName & DevangiAge

  // const Devangi: Devangi = {
  //     name: "DE",
  //     // age: 34
  // }

  // console.log(Devangi)

  //type aliases can be used to additional types

  // type Data = [number, string]

  // const arr: Data = [1,"devangi"]
  // console.log(arr)

  // interface Person{
  //     name: string
  //     obj: {}
  //     union: string | number
  //     tuple: [string, number]
  // }

  // const Data: Person = {
  //     name: "devangi",
  //     obj: {},
  //     union: 23,
  //     tuple:["devu", 23]
  // }
  // console.log(Data.tuple.map((item)=> item))

  //function
  // const greet = (name: string): void => {
  //     console.log(`Helllo ${name}`)
  // }

  // greet("Devangi")

  //Create a function named addNumbers that takes two parameters a (number) and b (number), adds them together, and consoles the result.

  // const addNumbers = (a: number, b: number): void => {
  //     const sum = a + b;
  //     console.log(sum)
  // }
  // addNumbers(2,8)

  //  ex03: function with three inputs and return value#

  // const calculateVolume = (length: number, width: number, height: number) : number => {

  //     return length * width * height
  // }
  // console.log(calculateVolume(2,2,2))

  //function with union types

  // const printInfo = (info: string | number): void => {
  //     console.log(info)
  // }
  // console.log(printInfo(23))

  // type Person = {
  //     name: string
  //     age: number
  // }

  // type Student = Person & {
  //     studentId: string
  // }

  // const convertPersonToStudent = (param: Person): Student => {
  //     return {...param, studentId: "S123"}
  // }
  // const stu = {
  //     name: "devangi",
  //     age: 23
  // }
  // console.log(convertPersonToStudent(stu))

  // function that return array

  // const doubleNumbers = (numbers: number[]): number[] => {

  //     return numbers.map((item)=> item * 2)
  // }

  // console.log(doubleNumbers([2,3,4,5,6]))

  // function as interface

  //function with generics

  // interface func {
  //     (a: number, b: number): number
  // }

  // const func: func = (a,b )=> a+b
  // console.log(func(2,3))

  //function with generics

  // const identity = <T,>(value: T) =>{
  //     return value;
  // }

  // console.log(identity<number>(2))
  // console.log(identity<string>("DEvangi"))

  // const findItem = <T,>(items: T[], item: T): number => {
  //     console.log(item)
  //     return items.indexOf(item)
  // }

  // // console.log(findItem([1,4,3,4,5,6], 4))
  // console.log(findItem(["Apple", "Banana", "Guava"], "Guava"))

//   interface QuizQuestion {
//     question: string;
//     options: string[];
//     correctOption: number;
//   }

//   const question: QuizQuestion = {
//      question: "What is My Name", options: ["dev", "deb"],correctOption: 20 
//   };


// interface quizchecker {
//     (quizQuestion: QuizQuestion, userAnswer: number): boolean
// }

// const checkQuiz: quizchecker = (que, ans) => {
//     return ans === que.correctOption
// }

// console.log(checkQuiz(question,20))

// filter function of take argument of 

// type filterFunction = (array: number[], predicate: (num: number) => boolean) =>number[]
// const isEven = (num: number) => num % 2 === 0

// const filterArray: filterFunction= (arr, prec) => {
//     return arr.filter(prec)
// }

// console.log(filterArray([1,2,3,4,5,6,7,8],isEven))

// type mapfunc = (arr: number[], map: (num: number)=> string) => string[]

// const mapFunction: mapfunc = (arr,mapper) => {
//     return arr.map(mapper)
// }

// const numbers =[1,2,3,4,5]
// const mapper = (num: number) => (num * 2).toString()
// console.log(mapFunction(numbers, mapper))

// type reducFunc = (arr: number[], acc: (num: number, init: number)=> number, num: number) => number

// const reduceFunction: reducFunc = (num, acc, init) => {
//     return num.reduce(acc, init)
// }

// const numbers = [1, 2, 3, 4, 5]

// const acc = (acc: number, num: number) => acc + num
// console.log(reduceFunction(numbers,acc, 0))

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default DemoComp;
