const mongoose = require('mongoose');
const Article = require('./models/Article.js')

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

const getArticle = async (id) => {
    const article = await Article.findById(id)

  return article;
}



exports.handler = async event => {
  connectDB();

  console.log(event.queryStringParameters.id);

  // const article = {name: "test"}


  const article = await getArticle(event.queryStringParameters.id)

  console.log(article)

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(article),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
