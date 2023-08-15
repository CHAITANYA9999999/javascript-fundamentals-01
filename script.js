// let js = 'amazing';
// console.log(typeof Null == "undefined");

// const marks_w=78;
// const marks_h=1.69;
// const john_w=92;
// const john_h=1.95;
// const marks_bmi = marks_w/(marks_h**2);
// const john_bmi = john_w/(john_h**2);
// markHigherBMI = marks_bmi > john_bmi;
// alert("mark has higher bmi: "+markHigherBMI);

// const a = `I'm Marks, my weight is ${marks_w} and my height is ${marks_h}`;
// console.log(a);
// alert(a);

// 'use strict';

// //can call it before declaration
// logger();
// calcage2(1990);

//calcage2(1990) cannot call it before it is declared

//This is a function declaration because it has a name
// function logger(hello){
//     console.log('sample log');
// }

// for(let i=0;i<5;i++){
//     logger();
// }

// //This is a function expression because it does not have a name
// const calcage2 = function (birthYear){
//     return 2023 - birthYear;
// }

// const age2 = calcage2(1990);
// console.log(typeof age2); //number
// console.log(typeof calcage2);  //function
// console.log(age2);

//arrow expression of function expression
//arrow function

// const calcage3 = birthYear => 2023 - birthYear;
// console.log(calcage3(1999)); 

// const yearsUntilRetirement = birthYear => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// const retirementYears = yearsUntilRetirement(2003);
// console.log(retirementYears);

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

// function checkWinner(dolphinsAvg, koalasAvg){
//     let str;
//     if(dolphinsAvg >= 2*koalasAvg) str = `Dolphins win (${dolphinsAvg} vs ${koalasAvg})`;
//     else if(koalasAvg >= 2*dolphinsAvg) str = `Koalas win (${koalasAvg} vs ${dolphinsAvg})`;
//     else str = `No Winner`;

//     console.log(str);
// }

// const ds1=44;
// const ds2=23;
// const ds3=71;
// const ks1=65;
// const ks2=54;
// const ks3=49;

// const d_avg=calcAverage(ds1,ds2,ds3);
// const k_avg=calcAverage(ks1,ks2,ks3);
// checkWinner(d_avg,k_avg);

// //even though it is const, we can still change the value of elements, but we cannot replace the entire array,
// //can do years1[2] = 1978;
// //cannot do years1 = [1991,1984];
// const years1 = [1991,1984,2008,2020];
// const years = new Array(1991,1984,2008,2020);
// const y_len = years.length;

// const diff_var_arrays = [d_avg,'dolphins',2023-1990,years1, years];
// console.log(diff_var_arrays);

// //basic array operations
// const new_len1 = years.push(2023);   //returns the lenght of the new array
// const new_len2 = years.unshift(2023); //adds element to the start of the array
// const popped_element = years.pop();
// const removed_element = years.shift(); //removes the first element of the array
// const index1 = years.indexOf(2023); //ofcourse, if not in the array, then -1
// const isThereInArray = years.includes(2023); //true if the element is present in the array

// //object: literal syntax
// const jonas = {
//     firstName:'Jonas',
//     lastName:'schemmdsfa',
//     age: 2037-1990,
//     job:'teacher',
// }

// //ways to retrieve
// jonas.firstName
// jonas['firstName']
// console.log(jonas['firstName'])
// //jonas.retirement returns undefined

// jonas.location = 'Portugal';
// jonas['Twitter']='fadfsf';

// const jonas1 = {
//     firstName:'Jonas',
//     lastName:'schemmdsfa',
//     birthYear: 1990,
//     job:'teacher',

//     //function can also be a property of an object
//     // calcAge: function (birthYear){
//     //     return 2023 - birthYear;
//     // }

//     // calcAge: function (){
//     //     return 2023 - this.birthYear;
//     // }


//     calcAge: function (){
//         this.age = 2023 - this.birthYear; //we can also create new propery like this
//         return this.age;
//     }
// }

// jonas1.calcAge();
// jonas1['calcAge'];

// console.log(jonas1.age);

