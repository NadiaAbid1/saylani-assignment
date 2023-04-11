
// // Assignment 1

// let total= 5;
// add();

// function add(){
// return ans = total + total;
   
// };

// console.log(ans);

// // Assignment 2

// const arr = [1, 2, 3, 4, 5];
// const val = 3;
// const val2 = 6;
// function searchArray(arr, val) {
//   if (arr.length === 0) {  
//     return false;
//   } else if (arr[0] === val) {  
//     return true;
//     console.log(searchArray(arr, val));  
//   } else {
//     return searchArray(arr.slice(1), val);  
//   }
// }

// console.log(searchArray(arr, val2));



// Assignment3:

// function newPara(content){
//   let addPara = document.createElement("p");
//   let TextNode= document.createTextNode(content);
//   addPara.appendChild(TextNode);
//   document.body.appendChild(addPara);
// }

// newPara("Hello World");


// Assignment4:

// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//       alert("You must write something!");
//   } else {
//       document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";
// }

  // Assignment5:

//   function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }
//   const container = document.getElementById("container");
// changeBackgroundColor(container, "red")

// Assignment6:

// function saveObjectToLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
//   let myObj = { name: "Ali", age: 20 };
//   saveObjectToLocalStorage("myKey", myObj);

//   let storedObj = JSON.parse(localStorage.getItem("myKey"));
//   console.log(storedObj); 

// Assignment7:


// const myObject = { name: "John Doe", age: 30 };
// localStorage.setItem("myObject", JSON.stringify(myObject));
// const retrievedObject = getObjectFromLocalStorage("myObject");



// function getObjectFromLocalStorage(key) {
  
//   const objectString = localStorage.getItem(key);

 
//   if (!objectString) {
//     return null;
//   }

//   return JSON.parse(objectString);
// }

// console.log(retrievedObject);


// Assignment8:

// let myObj = { name: "John", age: 30, city: "New York" };
// let savedObj = saveObjectToLocalStorage(myObj);


// function saveObjectToLocalStorage(obj) {
 
//   for (let prop in obj) {
   
//     localStorage.setItem(prop, JSON.stringify(obj[prop]));
//   }
  
  
//   let retrievedObj = {};

//   for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     retrievedObj[key] = JSON.parse(localStorage.getItem(key));
//   }

//   return retrievedObj;
// }