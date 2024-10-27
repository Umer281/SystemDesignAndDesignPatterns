 const fs = require('fs');
 const crypto = require('crypto');

const start = Date.now();



//importing more thread 

//process.env.UV_THREADPOOL_SIZE =10;


// how node js works 
console.log("top level code ");

setTimeout(() => {
    console.log("timeout is executed")
}, 1000);


setImmediate(() => console.log('immediate is executed'));


fs.readFile('file.txt' ,'utf-8', () => {
    console.log('IO Poling finish');

    setTimeout(() => {
        console.log("timer 1");
    }, 3000);
    setTimeout(() => {
        console.log('timer 2')
    }, 4000);

    setImmediate(() => console.log('immediate 1'));

    //cpu intersive  below are cpu intensive tasks, that is hashing of password, below tasks will be executed on thread pool

    crypto.pbkdf2('password 1', 'salt1', 100000, 1024, 'sha512', () => {
        console.log('password 1 done',Date.now() - start)
    });

    crypto.pbkdf2('password 2', 'salt1', 100000, 1024, 'sha512', () => {
        console.log('password 2 done', Date.now() - start)
    });

    crypto.pbkdf2('password 3', 'salt1', 100000, 1024, 'sha512', () => {
        console.log('password 3 done',Date.now() - start)
    });

    crypto.pbkdf2('password 4', 'salt1', 100000, 1024, 'sha512', () => {
        console.log('password 4 done', Date.now() - start)
    });
    crypto.pbkdf2('password 5', 'salt1', 100000, 1024, 'sha512', () => {
        console.log('password 5 done', Date.now() - start)
    });

    crypto.pbkdf2('password 6', 'salt1', 100000, 1024, 'sha512', () => {
        console.log('password 6 done', Date.now() - start)
    });
    

    
});

console.log("hello from top level code 2");

