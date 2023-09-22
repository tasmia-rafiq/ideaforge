import mongoose from "mongoose";

let isConnected = false; // it allows us to track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDb is already connected.');
        return;
    }

    //if we are not already connected
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "ideaForge",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('MongoDB Connected.');
    } catch (error) {
        console.log(error);
    }
}

// username: tasmiarafiq14033
// password: rUABK51GRDOUwY6s