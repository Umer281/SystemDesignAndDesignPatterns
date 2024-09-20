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