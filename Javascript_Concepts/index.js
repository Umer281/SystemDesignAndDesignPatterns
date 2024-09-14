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
