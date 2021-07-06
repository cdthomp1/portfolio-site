import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ArticleCard from '../components/ArticleCard'
import ProjectCard from '../components/ProjectCard'
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import { sortByDate } from '../utils'

export default function Home({ articles, projects }) {
  return (
    <>
      <Head>
        <title>Cameron Thompson</title>
        <meta name="description" content="Cameron Thompson's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className="s1">
          <div className="main-container">
            <div className="greeting-wrapper">
              <h1>Hi, I'm Cameron Thompson</h1>
            </div>
            <div className="intro-wrapper">


              <div className="left-column">
                <img id="profile_pic" alt='Cameron Thompson' src="./images/thompsonCameron.jpg" />
              </div>

              <div className="right-column">
                <div id="preview">
                  <h3>What I Do</h3>
                  <p>I am a student of Software Engineering with an emphasis in Web Development! </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="s2">
          <div className="main-container">
            <div className="about-wrapper">
              <div className="about-me">
                <h4>More about me</h4>
                <p>I work hard to learn new technologies but I found a few to stick to!</p>
                <hr />
                <h4>Top Technologies</h4>
                <p>Fullstack developer with primary focus on Node + React: <a target="_blank"
                  href="./assets/resume.pdf">Download Resume</a></p>
                <div id="skills">
                  <div>JavaScript</div>
                  <div>Node.js</div>
                  <div>React</div>
                  <div>MongoDB</div>
                  <div>Express.js</div>
                  <div>Heroku</div>
                  <div>Netlify</div>
                  <div>HTML/CSS</div>
                  <div>JAM Stack (Learning)</div>
                  <div>Serverless (Learning)</div>
                </div>
              </div>
              <div className="skill-image-container">
                <img id="skill-image" alt="MERN Stack" src="./images/mern.jpg" />
                <h3>My Main Focus: <br />The MERN Stack</h3>
              </div>
            </div>
          </div>
        </div>
        <section className="s1">
          <div className="main-container">
            <h3 style={{ textAlign: "center" }}>Some of my latest projects</h3>
            <div className="post-wrapper" id="projects">
              {/* {projects.slice(0, 3).map(project => {
                return <ProjectCard key={project._id} project={project} />
              }
              )} */}
            </div>
            <div className="more-button">
              <a href="/projects">See More</a>
            </div>
          </div>


          <div className="main-container">
            <h3 style={{ textAlign: "center" }}>Some of my latest articles</h3>
            <div className="post-wrapper" id="articles">
              {articles.slice(0, 3).map((article, index) => {
                if (article.cover_image !== null) {
                  return <ArticleCard key={index} article={article} />
                } else {
                  return <></>
                }
              }
              )}
            </div>
            <div id="bottom-button" className="more-button">
              <a href="/articles">See More</a>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export async function getStaticProps() {
  // Get files from the articles dir
  const files = fs.readdirSync(path.join('articles'))

  // Get slug and frontmatter from articles
  const articles = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('articles', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })
  return {
    props: {
      articles: articles.sort(sortByDate),
    },
  }
}

/* export async function getStaticProps() {
  const data = await fetch('http://localhost:3000/api/getArticles')
  const { articles } = await data.json()
  const projData = await fetch('http://localhost:3000/api/getProjects')
  const { projects } = await projData.json()

  return { props: { articles, projects } }} */
