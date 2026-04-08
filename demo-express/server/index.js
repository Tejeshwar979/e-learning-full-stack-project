const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
require('dotenv').config()
const connectdb = require('./db.js')
app.use(express.json())
const cors = require('cors')
app.use(cors())
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
// const { exec } = require("child_process")
const { spawn } = require("child_process")
connectdb()

const courseSchema = new mongoose.Schema({}, { collection: "Courses" })

const course = mongoose.model("Course", courseSchema)

const studentSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    web: String,
    ai: String,
    cyber: String,
    devops: String,
    videos_completed: {
        type: Map,
        of: [String]
    }
}, { collection: "StudentRegister" })

const studentLogin = mongoose.model("studentLogin", studentSchema)

const notesSchema = new mongoose.Schema({}, { collection: "studentlogins" })

// user register           


app.post('/register', async (request, response) => {
    try {
        let { name, username, email, password } = request.body
        name = name.trim()
        username = username.trim()
        email = email.trim()
        password = password.trim()
        const enc_pass = await bcrypt.hash(password, 10)
        try {
            const data = await studentLogin.find({ username: username })
            if (data.length > 0) {
                response.status(409)
                response.send({
                    "message": "user already exists"
                })
            }
            else {
                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: {
                        user: "tejeshwarorg@gmail.com",
                        pass: "cuywlcbpaatgehch"
                    }
                });

                const mailOptions = {
                    from: "tejeshwarorg",
                    to: `${email}`,
                    subject: "Start Building Your Future Today with Learnova",
                    text: `Hello ${name} 
Welcome to Learnova, your gateway to smarter and more effective learning.
We’re excited to have you join our growing community of learners.
At Learnova, our goal is to help you build skills, gain knowledge, and achieve your goals with confidence.
You can now explore courses, track your progress, and start learning at your own pace.
Our platform is designed to provide a seamless and engaging learning experience.
If you ever need assistance, our support team is always here to help.
We encourage you to log in and begin your learning journey today.
Thank you for choosing Learnova as your learning partner.

Best regards,
The Learnova Team`
                };

                try {
                    const info = await transporter.sendMail(mailOptions);
                    // console.log("Email sent:", info.response);
                } catch (error) {
                    response.send({ "message": error.message })
                }
                const web = 0
                const ai = 0
                const cyber = 0
                const devops = 0
                const data = await studentLogin.insertOne({ name: name, username: username, email: email, password: enc_pass, web: web, ai: ai, cyber: cyber, devops: devops })
                response.status(201)
                response.send({ "message": "Registered Successfully" })
            }
        }
        catch (error) {
            response.send(error.message)
        }
    }
    catch (error) {
        response.status(500)
        response.send(error.message)
    }
})

// user login               

app.post('/login', async (request, response) => {
    try {
        let { username, password } = request.body
        username = username.trim()
        password = password.trim()
        const data = await studentLogin.find({ username: { $eq: username } })
        if (data.length == 0) {
            response.send("enter valid username or register if you are not registered")
        }
        else {
            const isVerified = await bcrypt.compare(password, data[0].password)
            if (isVerified) {
                const payload = {
                    username: username
                }
                const jwtKey = jwt.sign(payload, "MY_SECRET_KEY")
                response.send({ jwtKey })
            }
            else {
                response.status(401)
                response.send("password is incorrect")
            }
        }
    }
    catch (error) {
        response.status(500)
        response.send(error.message)
    }
})

// iwt verification  

const jwtVerification = (request, response, next) => {
    try {
        const { authorization } = request.headers
        if (!authorization) {
            response.status(401)
            response.send("no authorization")
        }
        const jwt_Token = authorization.split(" ")
        const Token = jwt_Token[1]
        if (!Token) {
            response.status(401)
            response.send({ "message": "error no JWT token" })
        }
        else {
            const decoded = jwt.verify(Token, "MY_SECRET_KEY")
            request.user = decoded
            next()
        }
    }
    catch (error) {
        response.send(error.message)
    }
}

// profile data fetch   

app.get('/profile', jwtVerification, async (request, response) => {
    try {
        const { username } = request.user
        const data = await studentLogin.find({ username: username })
        response.status(200)
        response.send(data)
    }
    catch (error) {
        response.status(500)
        response.send({ "message": error.message })
    }
})


app.get("/subscribed", jwtVerification, async (request, response) => {
    try {
        const { username } = request.user
        const { course } = request.query
        const data = await studentLogin.find({ username: { $eq: username } })
        if (data[0][course] === "1") {
            response.status(200)
            response.send({
                "message": "subscribed"
            })
        }
        else {
            response.status(401)
            response.send({
                "message": "not subscribed"
            })
        }
    }
    catch (error) {
        response.status(500)
        response.send({
            "message": error.message
        })
    }
})

// course data    

app.get('/coursedata', jwtVerification, async (request, response) => {
    try {
        const { topic } = request.query
        const data = await course.find({ topic: { $eq: topic } })
        response.status(200)
        response.send(data)
    }
    catch (err) {
        console.log(err.message)
    }
})

// single course data fetch     

app.get('/courseSingleData/:id', jwtVerification, async (request, response) => {
    try {
        const { id } = request.params
        const data = await course.find({ _id: { $eq: id } })
        response.send(data)
        response.status(200)
    }
    catch (error) {
        response.status(500)
        response.send(error.message)
    }
})

// buy the course      


app.post('/updatePayment/:topic', jwtVerification, async (request, response) => {
    try {
        const { topic } = request.params
        const { username } = request.user
        await studentLogin.updateOne({ username: username }, { $set: { [topic]: "1" } })
        response.status(200)
        response.send({
            "message": 'Updated successfully'
        })
    }
    catch (error) {
        console.log(error.message)
        response.status(500)
        response.send({
            "message": error.message
        })
    }
})

// no_of_videos completed or video completion  updation   

app.post('/videosCompleted', jwtVerification, async (request, response) => {
    try {
        const { username } = request.user
        const { videoId, topic } = request.body
        await studentLogin.updateOne({ username: username }, {
            $addToSet: {
                [`videos_completed.${topic}`]: videoId
            }
        })
        response.status(201)
        response.send({
            "message": `video with id ${videoId} is completed`
        })
    }
    catch (error) {
        response.status(500)
        response.send({
            "message": error.message
        })
    }
})

// code editor code     

app.post('/run', async (request, response) => {
    const { code, language } = request.body
    if (language === "javascript") {
        const child = spawn("node", ["-e", code])
        let stdout = ""
        let stderr = ""
        child.stdout.on("data", (data) => {
            stdout += data.toString()
        })
        child.stderr.on("data", (data) => {
            stderr += data.toString()
        })
        child.on("close", () => {
            if (stderr) {
                response.send({ "message": stderr })
            }
            else {
                response.send({ "message": stdout })
            }
        })
    }
    else if (language === 'python') {
        const child = spawn("python", ["-c", code])
        let stdout = ""
        let stderr = ""
        child.stdout.on("data", (data) => {
            stdout += data.toString()
        })
        child.stderr.on("data", (data) => {
            stderr += data.toString()
        })
        child.on("close", () => {
            if (stderr) {
                response.send({ "message": stderr })
            }
            else {
                response.send({ "message": stdout })
            }
        })
    }
})

/* app.post('/run', async (request, response) => {
    const { code, language } = request.body
    let command = ""
    if (language === "javascript") {
        command = `node -e ${code}`
    }
    exec(command, (error, stdout, stderr) => {
        if (error) {
            response.send({ stderr })
        }
        else {
            response.send({ stdout })
        }
    })
}) */

// port calling    

app.listen(3000, () => {
    console.log('app is running in the port 3000')
})


