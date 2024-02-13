// ------------------------->Task 1<--------------------------

//Question 1:
// const email = "devangibhutiya@rapidops.com"; 
// const pattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
// const isValid = pattern.test(email); 
// console.log(`${email} <--validation result is ${isValid} `);

//Question 2: 
// const hide = email.replace(/(\w{4})[\w.-]+@([\w.]+\w)/, "$1***@$2")
// console.log(hide)

//Question 3: 

// function removeTags(str) {
//     return str.replace(/<\/?[^>]+(>|$)/g, '');
//   }
  
//   // Example usage:
//   const input = '<p><strong><em>Javascript Exercises</em></strong></p>';
//   const output = removeTags(input);
//   console.log(output);
  

//Question 4: 

const generateTable =(ro, column)=>{
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    
    for(let i = 0; i<ro; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < column; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`Row ${i} Column ${j}`);
            cell.appendChild(cellText);
            row.appendChild(cell);


        }
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);

    document.body.appendChild(tbl);

    tbl.setAttribute("border", "1");

}


generateTable(2,4)

// ------------------------->Task 2<--------------------------

// const arrobj = (ar) => {
//   let outArray = [];
//   ar.map((obj) => {
//     const { Name, Sports } = obj;
//     Sports.map((sport) => {
//       const outputObj = outArray.find((item) => Object.keys(item)[0] === sport);

//       if (!outputObj) {
//         let newObj = {};
//         newObj[sport] = [Name];
//         outArray.push(newObj);
//       } else {
//         outputObj[sport].push(Name);
//       }
//     });
//   });
//   return outArray;
// };

// let arr = [
//   {
//     Name: "Ravindra",
//     Sports: ["Chess", "Cricket"],
//   },

//   {
//     Name: "Ravi",
//     Sports: ["Cricket", "Football"],
//   },

//   {
//     Name: "Rishabh",
//     Sports: ["Table-Tennis", "Football"],
//   },
// ];

// const res = arrobj(arr);
// console.log(res);
