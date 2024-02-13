import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';


function App() {
  // let name: string = "Devangi"
  // name = 34
  // console.log( typeof name)

  // let v : any = true
  // v= "Devangi"
  // console.log(typeof v)


    // const name: any[] = []
    // name.push("devangi", 2)
    // console.log(name)

// let ourTuple : [number, boolean, string] = [5, false, 'Coding God was here']
//   console.log(typeof ourTuple)

// const graph: [x: number, y: number] = [2,1]

// const [y, x] = graph
// console.log(x, y)

// const car: {
//   type: string,
//   model: string,
//   year: number
// } = {
//   type: "Toyota",
//   model: "DEeh",
//   year: 200
// }
// console.log(car)

// const car2 : {
//   type: string,
//   milage?: number
// } = {
//   type: "devangi",
//   // milage: 200
// }
// car2.milage = 2000
// console.log(car2)


// type carYear = number
// type carType = string
// type carModel = string

// const carYear: carYear = 2001
// console.log(carYear)

// interface Rectangle {
//   height: number,
//   width: number
// }

// const rectangle: Rectangle = {
//   height: 20,
//   width: 40
// }

// console.log(rectangle.height * rectangle.width)


// function alloweMoretype (code: string | number) {
//   console.log(code)
// }

// // alloweMoretype(33)
// alloweMoretype("Devangi")
  
// function returnType (): String {
//   return "DEvangi"
// }
// console.log(returnType())

// let x: unknown = "Devangi"
// console.log((x as string).length)


//Generics
// type Wrapped<T, S> = {value: T, assign?: S};
// const WrappedValue: Wrapped<number, string> = {value: 10, assign: "DE"}
// console.log(WrappedValue)

// interface Point {
//   x: number,
//   y: number
// }

// let pointArt:  Required<Point> = {
//   x: 10,
//   y: 20
// }
// console.log(pointArt)



// interface Person {
//   name?: string,
//   age: number,
//   location: string
// }

// let person:Pick<Person, "age" | "location"> = {
//   // name:"debangi",
//   age: 21,
//   location: "r4r43r"
// }


// interface House {
//   sqft: number;
//   yard?: {
//     sqft: number
//   }
// }

// function printYard(house: House) {
//     // console.log(house)
//     const yardSize = house?.yard?.sqft
//     // console.log(yardSize)
//     if(yardSize === undefined) {
//       console.log("No Yard")
//     } else {
//       console.log(`Yard size is ${yardSize}`)
//     }
// }
// let home: House = {
//   sqft: 500,
//   yard: {
//     sqft: 200
//   }
  
// };

// printYard(home)



// function PrintMilage (milage: number | undefined | null) {
    
//     console.log(`milage is ${milage ?? "not avaialable"}`)
// }

// PrintMilage(null)
return (
  <div>
    <ProjectsPage/>
  </div>
  

  );
}

export default App;
