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

const getArticle = async (slug) => {
  const article = await Article.findOne({ slug })
  if (article) {
    return article;
  } else {
    throw new Error('No Article Found');
  } 
}



exports.handler = async event => {
  
  //console.log(event.headers.slug);
  
  
  try {
    connectDB();
    const article = await getArticle(event.headers.slug)
    return {
      statusCode: 200,
      body: JSON.stringify({article}),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
