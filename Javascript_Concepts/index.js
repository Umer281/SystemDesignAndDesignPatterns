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