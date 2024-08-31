const {Worker} = require('bullmq')
//queus has 2 component one is producer,consumer,consumer is also known as worker 
//producer queues the task in queue and consumer/worker is working on task or which does task 


async function sendMockEmail(payload) {
    const {from,to,subject,body} = payload;
    return new Promise((resolve, reject) => {
        console.log(`sending mail to ${to}`)
        setTimeout(() => {
          resolve("mail send to user");
        },3000)
    })
}

const emailWorked = new Worker('email-queue', async(job) => {
    //this async callback function  will run whenever there is any task in the queue
    console.log('job recieved', job)
    const data = job.data;
    await sendMockEmail({
         from : data.from,
         to : data.to,
         subject : data.subject,
         body: data.body 
    })
   

},{
    connection: {
        host: "",
        port: 2121,
        user: "default",
        password: ""
    }
});


module.exports = emailWorked