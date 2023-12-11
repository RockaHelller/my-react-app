// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import ReactDOM from "react-dom";
import React from "react";
import App from './component/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/style.css';


ReactDOM.render(<App />, document.getElementById("root"));




// let list = [1,4,2,5,8,4,23];

// // let[x, y] = list;
// let[x, , , y, z] = list;

// console.log(x);
// console.log(y);
// console.log(z);


// function calc(a, b) {
//     return [a+b, a-b, a*b];
// }

// let res = calc(5,10);
// console.log("Sum is", res[0]);
// console.log("Sum is", res[1]);


let person = {
    name: "Murad",
    age: 20,
    gpa: 2.3,
    email: "murad@gmail.com",
    address: {
        country: "Azerbaijan",
        city: "Baku"
    }
}

let { name, age, gpa, address: { city } } = person;

console.log(`${name} is ${age} years old!`)
console.log(`${name} lives in ${city} city!`)
console.log(gpa)
