import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected :o`.green);

    } catch (err) {
        console.log(`MONGODB NOT CONNECTED : ${err}`.bgRed.white)
    }
}
export default connectDB;