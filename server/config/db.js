import mongoose from 'mongoose'

const url = "mongodb+srv://joeshajan:joeshajan1551@cluster0.iyoqm.mongodb.net/dunzo?retryWrites=true&w=majority"
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })


        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB