require('dotenv').config()
const mongoose = require('mongoose')


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connection successful")
    }
    catch (error) {
        console.log(error.message)
    }
}

connectDb()

module.exports = connectDb

/*

const courseSchema = new mongoose.Schema({}, { collection: "Courses" })

const Course = mongoose.model("Course", courseSchema)

 */