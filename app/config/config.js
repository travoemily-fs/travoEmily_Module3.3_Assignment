const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log("MONGODB_URI =", process.env.MONGODB_URI)
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;