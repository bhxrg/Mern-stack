import mongoose from "mongoose";


const DBConnection = async() => {
    const MONGODB_URL=`mongodb://bhxr:bhxr1503@ac-4ebzogd-shard-00-00.xcgumqd.mongodb.net:27017,ac-4ebzogd-shard-00-01.xcgumqd.mongodb.net:27017,ac-4ebzogd-shard-00-02.xcgumqd.mongodb.net:27017/?ssl=true&replicaSet=atlas-pbkwe5-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONGODB_URL, {useNewUrlParser: true });
        console.log("Database connected successfully");
    } catch(error) {
        console.error('Error while connecting with the database',error.message);
    }
}

export default DBConnection;