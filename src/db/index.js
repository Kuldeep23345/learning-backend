import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    const connectionInstanc = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `/n MongoDB connected !! DB HOST : ${connectionInstanc.connection.host}`
    );
    // console.log(connectionInstanc);
  } catch (error) {
    console.log(`MONGODB connection error `, error);
    process.exit(1);
  }
};
export default connectDB;
