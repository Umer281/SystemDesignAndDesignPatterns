// const p1 = new Promise((resolve, reject) => {


//    setTimeout(() => {
//     // console.log("users fetched")
//     reject("network error")
//    }, 1000);

// });


// const p2 = 12333;


// Promise.all([p1,p2]).then((res) => {
//   console.log(res)
// }).catch((error) => {
//   console.log(error, "erroe");
// })



Array.prototype.myMap = function(cb ) {
    let arr= [];

    for(let i=0;i<this.length;i++){
       ans.push(cb(this[i], i))
    }

    return ans;
}


Array.prototype.myFilter = function(cb){

     let ans =[];

     for(let i=0;i<this.length;i++){
         if(cb(this[i],this)){  ans.push(this[i])}
     };
     return ans;
}


