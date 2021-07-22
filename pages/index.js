import React, { useEffect } from 'react'
import Link from 'next/link'
import Card from '../components/Card'
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import { sortByDate } from '../utils'
import { useInView } from 'react-intersection-observer';
import Seo from '../components/SEO'
import 'tailwindcss/tailwind.css'


export default function Home({ articles, projects }) {
    const seo = {
    seo: {
      title: "Cameron Thompson",
      excerpt: "Cameron Thompson's portfolio site",
      url: "",
      cover_image: "https://res.cloudinary.com/cameron-projects/image/upload/v1626762649/faqao1ne2ij2iuufnvpu.png",
      date: Date.now()

    }
  }
  return (
    <>
      <Seo seo={seo} />

      <div className="content">
        <div className="hero">
          <div id="profile_pic"></div>
          <div className="heroInfo">
            <div className="heroTitle">
              <h1>Hi, I'm Cameron Thompson <span className="hand">👋🏻</span></h1>
            </div>
            <h2>I am a student of Software Engineering with an emphasis in Web Development!</h2>
            <div className="heroLinkContainer">
              <div className="heroLink"><Link href="/about" >About Me &gt;</Link></div>
            </div>
          </div>
        </div>

        <hr />
        <div className="about-wrapper">
          <div className="about-me">
            <h3>Top Technologies</h3>
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

        <div className="flex flex-col items-center">
          <h3 className="text-3xl m-6 text-center">What I am working on!</h3>
          <div className="post-wrapper" id="projects">
            {projects.slice(0, 3).map((project, index) => {
              var document = {
                cover_image: project.frontmatter.cover_image,
                title: project.frontmatter.title,
                link: `/projects/${project.slug}`
              }
              return <Card key={index} document={document} />
            }
            )}
          </div>
          <div className="heroLink">
            <Link href="/projects">See More</Link>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-3xl m-6 text-center">What I am writing about!</h3>
          <div className="cardContainer">
            {articles.slice(0, 3).map((article, index) => {
              var document = {
                cover_image: article.frontmatter.cover_image,
                title: article.frontmatter.title,
                link: `/articles/${article.slug}`
              }
              return (<Card key={index} document={document} />)
            }
            )}
          </div>

          <div className="heroLink">
            <Link href="/articles">See More</Link>
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
