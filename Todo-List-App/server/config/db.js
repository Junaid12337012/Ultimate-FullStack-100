import mongoose from "mongoose";

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);

        if(process.env.NODE_ENV === 'development') {
            console.log(`MongoDb connect ${conn.connection.host}`);
        }
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1); //Exit proecess
    }
};

export default connectDB;