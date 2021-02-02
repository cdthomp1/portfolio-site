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

const getProject = async (id) => {
    const project = await Project.findById(id)

  return project;
}



exports.handler = async event => {
  connectDB();

  console.log(event.queryStringParameters.id);

  // const project = {name: "test"}


  const project = await getProject(event.queryStringParameters.id)

  console.log(project)

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(project),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
