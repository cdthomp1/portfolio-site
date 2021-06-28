
const mongoose = require('mongoose');
const Project = require('./models/Project.js')

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

const getProjects = async () => {
    const Projects = await Project.find({})
    return Projects;
}

export default async (req, res) => {
    connectDB();
    const projects = await getProjects()
    res.status(200).end(JSON.stringify({ projects }))
}
