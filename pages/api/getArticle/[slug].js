const mongoose = require('mongoose');
const Article = require('../models/Article.js')

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



export default async (req, res) => {
    const {slug} = req.query;
    connectDB();
    const article = await getArticle(slug)
    res.status(200).json(article)
}
