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
  const projects = await Project.find({})
  return projects;
}


export default async function handler(req, res) {
  try {
    connectDB();
    const projects = await getProjects()
    res.status(200).json({ projects: projects })
  } catch (error) {
    res.status(500).json({error})
  }
}
