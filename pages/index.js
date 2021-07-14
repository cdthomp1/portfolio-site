import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ArticleCard from '../components/ArticleCard'
import ProjectCard from '../components/ProjectCard'
import Card from '../components/Card'
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import { sortByDate } from '../utils'
import Ticker from '../components/Ticker'

export default function Home({ articles, projects }) {
  return (
    <>
      <Head>
        <title>Cameron Thompson</title>
        <meta name="description" content="Cameron Thompson's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="content">
        <div className="hero">
          <div id="profile_pic"></div>
          <div className="heroInfo">
            <h1>Hi, I'm Cameron Thompson 👋🏻</h1>
            <h2>I am a student of Software Engineering with an emphasis in Web Development!</h2>
            <div className="heroLinkContainer">
              <div className="heroLink"><Link href="/about" >About Me &gt;</Link></div>
            </div>
          </div>
        </div>

        <hr />
        <div className="about-wrapper">
          <div className="about-me">
            <h4>Top Technologies</h4>
            <p>Fullstack developer with primary focus on the JAM Stack!</p>
            <div id="skills">
              <div>JavaScript</div>
              <div>Node.js</div>
              <div>React</div>
              <div>MongoDB</div>
              <div>Express.js</div>
              <div>HTML/CSS</div>
              <div>JAM Stack</div>
              <div>Serverless</div>
            </div>
          </div>
          <div className="skill-image-container">
            <img id="skill-image" alt="JAM Stack" src="./images/jam.png" />
          </div>
        </div>



        <div>
          <h3 style={{ textAlign: "center" }}>What I am working on!</h3>
          <div className="post-wrapper" id="projects">
            {projects.slice(0, 3).map((project, index) => {
                return <Card key={index} document={project} />
              }
              )}
          </div>
          <div className="more-button">
            <a href="/projects">See More</a>
          </div>
        </div>

        <div>
          <h3 style={{ textAlign: "center" }}>What I am writing about!</h3>
          <div className="cardContainer">
            {articles.slice(0, 3).map((article, index) => {
              return (<Card key={index} document={article} />)
            }
            )}
          </div>
          <div id="bottom-button" className="more-button">
            <a href="/articles">See More</a>
          </div>
        </div>

      </div>

    </>
  )
}

export async function getStaticProps() {
  // Get files from the articles dir
  const files = fs.readdirSync(path.join('articles'))

  const projectFiles = fs.readdirSync(path.join('projects'))

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

  const projects = projectFiles.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('projects', filename),
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
      projects: projects.sort(sortByDate)
    },
  }
}

/* export async function getStaticProps() {
  const data = await fetch('http://localhost:3000/api/getArticles')
  const { articles } = await data.json()
  const projData = await fetch('http://localhost:3000/api/getProjects')
  const { projects } = await projData.json()

  return { props: { articles, projects } }} */
