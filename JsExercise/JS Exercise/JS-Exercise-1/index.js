//Task 1: 


// let num = 5;
// let string = "";

// for(let row = 1; row<=num; row++) {
   
//   for(let col = 1; col<=num; col++) {
//     if(row === col || col === num - row + 1) {
//       string+="*"
//     }
//     else {
//       string+=" "
//     }
//   }
//    string+= "\n"
// }

// console.log(string)



//Task 2: 

// let num = +prompt("Enter number")
// let string = "";

// for(let i=0;i<num;i++)
// {
//   for(let j=0;j<num;j++){
//       if(i>0&&i<num-1&&j>0&&j<num-1){
//         string+=" ";
//       }else{
//         string+="*";
//       }

//   }
//   string += "\n";
// }
// console.log(string);



//Task3: 

// let num = 3;
// let string = ""

// for(let row = 1; row<= 2 * num; row++) {
//   let totalCols = row> num ? 2 * num -row : row 
//   let totalSpace = num - totalCols
//     for(let s = 0; s<totalSpace; s++) {
//       string+=" "
//     }
    
//   for(let col = 1; col<=totalCols; col++) {
//     if (row === 1 || row === 2 * num || col === 1 || col === totalCols) {
//       string += "* ";
//     } else {
//       string += "  "; // Two spaces for hollow pattern
//     }
//   }
//   string+="\n"
// }
// console.log(string)


//Task 4: 


// let num = 3 ;
// let string = ""

// for(let row = 1; row<= 2 * num; row++) {

//   let totalCols = row> num ? 2 * num -row : row 
//   for(let col = 1; col<=totalCols; col++) {
//     string += "*"
//   }


//   string+="\n"
// }
// console.log(string)



//Task 5: 

let n = 5;
let string = "";

for (let i = 1; i <= 2 * n - 1; i++) {
  let spaces = i <= n ? i - 1 : 2 * n - i - 1;
  let startK = i <= n ? i : 2 * n - i;

  for (let j = 1; j <= spaces; j++) {
    string += " ";
  }
  for (let k = startK; k <= n; k++) {
    string += k + " ";
  }

  string += "\n";
}

console.log(string);

