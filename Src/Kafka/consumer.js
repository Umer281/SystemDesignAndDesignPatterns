const {kafka} = require("./client");


async function init() {
     const consumer = kafka.consumer({groupId: "user-1"});

     console.log("connecting consumer");
     await consumer.connect();
     
     await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
          console.log(
            `${group}: [${topic}]: PART:${partition}:`,
            message.value.toString()
          );
        },
      });
     console.log("running consumer");
    //  await consumer.disconnect();
    //  console.log("consumer disconneted");
 
}   

init();