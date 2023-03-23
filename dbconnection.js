const mongoose = require('mongoose');


const connect = () => {

    
    const url = "mongodb+srv://surajsah0539:Surajsah97@cluster0.wstxowj.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(url, {
        useNewUrlParser: true,
        // useFindAndModify: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    })

    mongoose.connection.on("open", async () => {
        console.log("connected");
    });
      
    mongoose.connection.on("error", (err) => {
        console.log(err);
    });
}

const disconnect = () => {
    
    if (!mongoose.connection) {
      return;
    }
    
    mongoose.disconnect();

    mongoose.once("close", async () => {
        console.log("Diconnected  to database");
    });

};

module.exports = {
    connect,
    disconnect
}