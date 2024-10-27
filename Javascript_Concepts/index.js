const { promise } = require("bcrypt/promises");


function printNumners(){

    for(var i=1;i<=5;i++){
        function f1(num){
           setTimeout(() => {
                console.log(num,"num");
           },num*1000)
        }

        f1(i)
    }
}

printNumners();

Array.prototype.myMap = function(cb) {
  
    let temp = [];
    for(let i=0;i<this.length;i++) {
        temp.push(cb(this[i],i, this));
    }
    return temp;
}


let nums  = [1,2,3,4,5];

let res = nums.myMap((num,index,arr) => {
      return num*3;
})

// console.log(res);

Array.prototype.myFilter = function(cb) {

    let temp = [];
    for(let i=0;i<this.length;i++){

        if(cb(this[i],i,this)){
            temp.push(this[i]);
        }
    }

    return temp;
}


let result  = nums.myFilter((num,i,arr) => {
     console.log(arr)
     return num >3;
}) 
// console.log(result);

// node js concepts buffer,middlewares,stubs,how using we can improve node perfomance clustering, how clusters are different from work sites ,
//what is range axia search pattern

let red1 = [1,2,3,4,5];

 function square(num) {
     return num*num;
 }

 function displaySquare(fn, num){
    //  console.log(fn,"22222")
     let sq =   fn(num);
     console.log(sq,"333333333")
 }

 displaySquare(square,2);

Array.prototype.myReduce = function(cb,initialValue) {

    let val =0;
    let acc =this[0];
    for(let i=1;i< this.length;i++){
       val = cb(acc,this[i]);
       acc = val;
    }
    return   initialValue ? initialValue + val : val;
}

Array.prototype.myReduce2 = function(cb,initialValue){
    let accumilator = initialValue;
    for(const i=0;i<this.length;i++) {
        accumilator =  accumilator ? cb(accumilator,this[i]) : this[i];
    }
}

let l2= [1,2,3,4,5];

let sum = l2.myReduce(function(acc,curr){
   return acc+ curr;
}, 0)

console.log(sum,"sum");

const list3 = [[1,2],[3,4], [5,6]];

const list4 = list3.reduce((acc,curr) => acc.concat(curr),[]);
console.log(list4);


let students =  [{name: 'Umer', Rollno: 101, marks:100}, {name: 'Ahmad', Rollno: 103, marks:40}, {name: 'Parvaiz', Rollno: 102, marks:20}];

let studentsName = students.map((stu) => stu.name.toUpperCase());
console.log(studentsName);

let marksSum =students.reduce((acc,curr, index) => {
    return acc +=curr.marks
},0)
console.log(marksSum, "marks sum");

const s1 = students.reduce((acc, curr) =>  {
      curr.marks = curr.marks < 60 ? curr.marks+20 : curr.marks;
      return acc +=curr.marks >= 60 ? curr.marks : 0;
}, 0);

console.log(s1);

// module pattern 
 const modulePattern = (function (){
    
    const cart  =  [];

     const addToCart = function(item) {
         cart.push(item)
    };

    const calculateTotal = function(){
        cart.reduce((acc,curr,index)=> acc + curr.price);
    }


    return   {
        addItemToCart:  function(item){
            console.log("public methid called");
            addToCart(item);
      },
      calculateTotalPrice: function(){
         calculateTotal()
      },
      getCart: function(){
        return cart.slice();
      }

    }
}())

modulePattern.addItemToCart({name: 'chips', price: 100});
console.log(modulePattern.getCart());


//use closures to create memoization 

// function memoization(n){
//     let cache = {};
   

//     return function fib(n){
//         //  console.log(cache);
//          //base case
//          if(n in cache){
//             return cache[n];
//         }
//         if(n<=1){
//             return n;
//         }
        
//         cache[n] = fib(n-1) + fib(n-2);
//         return cache;

//     }

// }

// const fibonnaci = memoization();
// console.log(fibonnaci(3))
// console.log(fibonnaci(2));
// console.log(fibonnaci(4));


function memoizedFib() {
    let cache = {};  // Cache will persist across function calls
  
    return function fib(n) {  // fib has access to 'cache' through closure
      if (n in cache) {
        return cache[n];
      } else {
        if (n <= 1) {
        //   cache[n] = n;
        return n;
        } else {
          cache[n] = fib(n - 1) + fib(n - 2);
        }
        return cache[n];
      }
    };
  }
  
  const fibonacci = memoizedFib();  // Create a memoized Fibonacci function
  console.log(fibonacci(2));  // First call, stores results in the cache
  console.log(fibonacci(1));  // Second call, reuses the cache from the first call
  

function calculateAddingAndStore() {
    let cache ={};

    return function add(n1,n2){
        if(cache[n1+n2]){
            return cache[n1+n2]
        }
        cache[n1+n2] = n1+n2;
    }
}

//another example of memoization in javascript


function productOfTwo(num1,num2) {
    for(let i=0;i<1000000000;i++){

    }
     
    // console.log(num1, num2)
    return num1 * num2
}

function cacheProduct(fn) {
      let cache ={};

      return function calculateProduct(num1, num2) {
        console.log(num1,num2)
        let a = num1+num2;
        let key = JSON.stringify(a);
        if(cache[key]){
            return cache[key];
        }
         console.log(fn(num1,num2))
        cache[key] =  fn(num1,num2);
        console.log(cache)
      }
}



// let getProduct = cacheProduct(productOfTwo);
// console.time();
// let p1 = getProduct(12,10);
// console.timeEnd();
// console.time();
// let p2 = getProduct(12,11) 
// console.timeEnd();
// console.time();
// let p3 = getProduct(12,10);
// console.time();
let getProduct = cacheProduct(productOfTwo);

console.time("start of first program");
let p1 = getProduct(12, 12);
console.timeEnd("start of first program");

console.time("start of second program");
let p2 = getProduct(12, 11);
console.timeEnd("start of second program");

console.time("start of third program");
let p3 = getProduct(12,12);
console.timeEnd("start of third program");

console.time("start of third program");
let p4 = getProduct(12,17);
console.timeEnd("start of third program");



//implement sum(6)(2)(1) curring 
// function currying is used 
function f1(a){
    return function f2(b){
        return function f3(c){
            return a+b+c
        }
    }
}

console.log(f1(2)(3)(4));

// in currying a function takes one argument at a time and returns a function expecting a new argument,currying means converting f(a,b) into f(a)(b)
//Here’s a real-world example of currying using payment processing in an e-commerce application.
//Currying can be used to handle different aspects of payment processing in stages, such as choosing the payment method,
// applying a discount, and finally charging the customer.
//Example: Payment Processing System

function paymentMethod(method){
    return  function discount(discount){
        return function calculateAmountAfterDiscount(amount){
            return amount - amount * discount
        }
    }
}


let payMethod = paymentMethod('credit_card');
let dis = payMethod(0.10)(100);
console.log(dis, "discount")


//Example: Configuring a Database Connection with Currying with different environments

const dbConfig = {
    production: {
        host: 'prod-db.example.com',
        user: 'prodUser',
        password: 'prodPassword',
        database: 'prodDb'
    },
    staging: {
        host: 'staging-db.example.com',
        user: 'stagingUser',
        password: 'stagingPassword',
        database: 'stagingDb'
    },
    development: {
        host: 'dev-db.example.com',
        user: 'devUser',
        password: 'devPassword',
        database: 'devDb'
    }
}

function dbConnection(env) {
    return () => {
        console.log(`connected to ${env}`);
        return dbConfig[env];
    }
}

const db = dbConnection('staging');
db();

//Resue varible for logic 

function evaluate(type){
     return function(a){
         return function(b){
             if(type == 'add') return a+b;
             if(type == 'multiply') return a*b;
             if(type == 'subtract')  return a-b;
             if(type == 'divide')   return a/b;
         }
     }
}

let mul = evaluate('multiply');
console.log(mul(2)(4));
console.log(mul(10)(2))

//Infinite currying  sum(1)(2)(3).... (n), eg implement sum(5)(2)(4)(5)

let addAll = function (a) {
    return function (b) {
        if (b !== undefined) {
            return addAll(a + b); // Recursive call to accumulate the sum
        }
        return a; // Final return when no argument is provided
    };
};

// Usage
console.log(addAll(5)(2)(3)(), "infinite currying"); // Outputs: 10 "infinite currying"



let partailApplication = function (a){
    return function(b,c){
        return a+b+c
    }
}


const pr1 = new Promise((resolve,reject) => {
  
    setTimeout(() => {
       resolve("timer done") 
    }, 1000);
});

const pr2 = "umer";
const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("network error")
    }, 2000);
});

// Promise.all([pr1,pr2,pr3]).then((values) => {
//     console.log(values)
// }).catch((error) => {
//     console.log(error);
// })

Promise.allSettled([pr1,pr2,pr3]).then((values) => {
    console.log(values)
}).catch((error) => {
    console.log(error,"error")
})

//4 How do you cancel a Promise? , we can use library cancel-token
// in async await we can use timeout to cancel the promise, if the promise is not retuned within then it is rejected 

async function requestWithinTimeLimit() {
    try {
        const promise1  = setTimeout(() => {
            resolve("the promise is resolved")
        }, 4000);
        await promise1.timeout(3000)
    } catch (error) {
        console.log(error);
    }
}


 requestWithinTimeLimit();


 let arr = [1,2,3,4];

let res1 =arr.reduce((acc,pre,index, def) => {
     return acc+pre
});

console.log(res1,"result");

//spread operators and rest operators 



let numsArr = [1,2,3,4];

function add(num1,num2,num3,num4){
     return num1+num2+num3+num4;
}


console.log(add(...numsArr), "33333333");


let ar1 = [1,2,3,4];
let ar2 = [4,5,6,7];

let sp  = [...ar1,...ar2];


console.log(sp,"555555555");

function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
 console.log(sumAll(1, 2, 3, 4)); // 10
  



 var num1 =1;
 var num2 = 2;


 function add(){
        let num1 = 2;
        let num2 = 4;
        return num1 +num2
 }


 console.log(add(),"dddddd")


//  for(let i=1;i<5;i++){
//        setTimeout(() => {
//              console.log(i)
//        }, i*1000)
//  }



let user = {
      username: "Javascript",
      fn1(){
           // this -> here referes to global obj
        console.log(this.username,"in normal function 1")
      },
      fn2: () => {
         
          console.log(this.username,"in arrow function 2")
      }
}


user.fn1();
user.fn2();

//lexical scope 
const subject = "Cs";

function getSubject(){
    // this is lexical scope as subject is accessed inside fn from outside
    console.log(subject);
}


function init (){
    const name = 'Computer science';
     //this display name is called closure, it gives access to outer fucntion scope from inner 
    function displayName() {
           console.log(name);
    }

    displayName();
}



init();

// scope chain 


const e = 10;

function sumAll(a){
       
    return function(b){

        return function(c){
            return function(d){
                console.log(a+b+c+d+e, "sum all ");
            }
        }
    }
}


sumAll(1)(2)(3)(4);



  function createBase(num){
        
    return function(innerNum) {
         console.log(innerNum + num, "num will be constant as this is closure");
    }
  }   


  var closure1 = createBase(6);
  closure1(10);
  closure1(20);


function find(num){
    let a = [];

    for(let i=0;i<1000000;i++){
      a[i] = i*i;

    }

    return a[num];
}



console.time("6");
find(6);
console.timeEnd("6")

console.time("12");
find(12);
console.timeEnd("12");

function find() {
    let a = [];

    // Precompute the values once when the closure is created
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }

    // Return a function that accesses the precomputed array
    return function(num) {
        return a[num];
    };
}

// Create the closure that retains access to the precomputed array
const getSquare = find();

console.time("6");
console.log(getSquare(6));  // Reuses the precomputed array
console.timeEnd("6");

console.time("12");
console.log(getSquare(12)); // Reuses the precomputed array
console.timeEnd("12");



// how would you use closure to create private counter 



// example of modulo pattern

const paymentMethodImplemantation = (() => {
    let paymentMethod;

   function upiPayment(){
       console.log("upiPayment");
       paymentMethod = 'UPI';
   }

   function cardPayment() {
        console.log("card payment");
        paymentMethod = 'Card';
        //implemsntio 
   }


   return {
       upiPayment,
       cardPayment,
       getPaymentMethod: () =>  paymentMethod
   }





})();




paymentMethodImplemantation.cardPayment();
paymentMethodImplemantation.upiPayment();
console.log(paymentMethodImplemantation.getPaymentMethod());


const memoryCache = function(fn){
     let cache ={};
     return function(...arguments){
          let cacheKey = JSON.stringify(arguments);
          if(!cache[cacheKey]){
              cache[cacheKey] = fn(...arguments);
          }
          return cache[cacheKey];
     } 
}


function calculateSquare(num){
    let squareObj ={};
    for(let i =1;i<1000000;i++){
        squareObj[i] = i*i;
    }

    return squareObj[num];
}



let memoise = memoryCache(calculateSquare);
console.time("10")
console.log(memoise(10),"10 memoise")
console.timeEnd("10");


console.time("20");
console.log(memoise(20))
console.timeEnd("20");




//Difference between Closure and scope 
// when we create function inside fucntion the inner function is a closure and can access the varaible of outer function later,
// where as scope in javascript defines what varible we have access to.



// what is currying     