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

const getArticles = async () => {
  const articles = await Article.find({})
  if (articles) {
    return articles;
  } else {
    throw new Error('No Article Found');
  } 
}

exports.handler = async event => {
  try {
    connectDB();
    const articles = await getArticles()
    return {
      statusCode: 200,
      body: JSON.stringify({articles}),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
