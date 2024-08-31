const express = require('express');
const {Queue} = require('bullmq');
const PORT = 5700;
const app = express();



const emailQueue = new Queue('email-queue',{
    connection: {
        host: "",
        port: 197,
        user: "",
        password: ""
    }
});

app.get('/', (req, res) => {
    return res.json({"message": '/get working'});
});


app.post('/add-course', async(req, res) => {
    console.log("Adding course to user");

    //Critical task 
    await addUserToCourseQuery();
      
    //non critical task, we can use thirdparty emial service SES,Sendgrid to send email
    // push the email task in emailQueue and consume that in worker/consumer which is running in different server 
    // in this we are producing the task ny pushing into queue and consumer consumes it, this reduces the load on server
   
    emailQueue.add(`${Date.now()}`, {
        "from": 'umerbaba86@gmail.com',
        'to': 'umerbaba86@yahoo.in',
        'subject': 'Congratulation on enrolling Course',
        'body': 'Dear Student, you are enrolled in this course'
    })
    
    res.json({'status': 'success', data:{message: 'enrolled course'}});
});


 


app.listen(PORT,(req, res) => {
    console.log(`"server is running at localhost:${PORT}`)
})

function addUserToCourseQuery() {
    console.log("added course to user");
    // return
 }

 function sendEmailToUser() {

 }
