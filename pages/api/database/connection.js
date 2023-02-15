import mongoose from "mongoose";

const mongoConnection = async () => {
    try {
        return await mongoose.connect("mongodb://localhost:27017/manufacture");
    } catch (error) {
        console.log('Mongo Error', error);
        return error;
    }
};

export default mongoConnection;