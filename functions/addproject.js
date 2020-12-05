const mongoose = require('mongoose');
const Project = require('../models/Project.js')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connect: ${conn.connection.host}`)

    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

exports.handler = async (event, context) => {
    try {
        //connectDB();
        
        const { title, description, image, repoLink, liveLink } = JSON.parse(event.body)

        console.log(event.body)

        const project = new Project({
            title: title, 
            description: description, 
            image: image, 
            repoLink: repoLink, 
            liveLink: liveLink
        });

        console.log(project)

        // const createdProject = await Project.create(project)
        return {
            statusCode: 200,
            body: JSON.stringify({ message: event, context }),
            // // more keys you can return:
            // headers: { "headerName": "headerValue", ... },
            // isBase64Encoded: true,
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}