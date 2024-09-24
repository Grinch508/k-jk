import mongoose from "mongoose";

const uri = process.env.MONGO_URI

if (!uri) {
    throw new Error('unable to find uri')
}

export default async function connectToDB() {
    if (mongoose.connection.readyState !== 1) {
        try {
            await mongoose.connect(uri)
            console.log('connected to db')
        } catch(err) {
            throw new Error('Unable to connect to database.')
        }
    } else {
        console.log('already connected to database')
    }
}