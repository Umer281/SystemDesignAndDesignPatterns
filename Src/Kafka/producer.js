const {kafka} = require("./client");

async function init() {

    const producer= kafka.producer();
    console.log("Connecting producing");

    await producer.connect();
    console.log("Producer Connected Successfull");


    await producer.send({
        topic: "rider-updates",
        messages: [
            
            {partition:0,
                key: "location-update", 
                value: JSON.stringify({name: 'Tony grey', loc: "South"})}
        ]
    });
    console.log("disconnecting producer");
    await producer.disconnect();
    console.log("producer disconnected");

}


init();