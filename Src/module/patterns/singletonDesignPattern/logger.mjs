  class Logger {
      // logs = [];
    constructor(){
       if(Logger.instance == null) {
          this.logs  = [];
          // Logger = this;
       }

       return Logger.instance 
    }

    log(message){
       this.logs.push(message);
      //  console.log(this.logger)
    }

    getLog(){
        return this.logs;
    }
}


const logger = new Logger();
Object.freeze(logger);


// here we are importing insrtance rather then class
export default logger
