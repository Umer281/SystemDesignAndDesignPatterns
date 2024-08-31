
const {kafka} = require('./client')
 


async function init() {
    console.log("admin connecting");
    const admin = kafka.admin();
     admin.connect();
     console.log("admin connection success");
     
     console.log("creating topics")
    await admin.createTopics({
        topics: [{
            topic: 'rider-updates',
            numPartitions: 2,
        }]
     })

     console.log("topic created success");

     await admin.disconnect();
     console.log("disconnecting admin");
    
}


init();