import mongoose from "mongoose";
import logger from "../middleware/logger.js";

// Connecting Database through Mongoose
const connectDb = async () => {

    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        if (connectionInstance) {
            logger.info('🍀 MongoDB Connected Successfully')
        }
    } catch (error) {
        console.error(error)
        throw error
    }   

}

export default connectDb;