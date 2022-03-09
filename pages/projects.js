import React from 'react'
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import { sortByDate } from '../utils'
import SEO from '../components/SEO';
import styles from '../styles/Articles.module.css'
import Card from '../components/Card';

const projects = ({ projects }) => {
    const seo = { title: "Cameron Thompson: Projects", date: Date.now(), cover_image: "", excerpt: "All of my projects are on this page", url: `https://cameronthompson.io/projects` }
    return (
        <>
            <SEO seo={{ seo }} />
            <h1 className="text-5xl">Projects</h1>
            <div className={styles.postWrapper} id="articles">
                {projects.map((project, index) => {
                    var document = {
                        cover_image: project.frontmatter.cover_image,
                        title: project.frontmatter.title,
                        link: `/projects/${project.slug}`
                    }
                    return <Card key={index} document={document} />
                }
                )}
            </div>
        </>
    )
}

export async function getStaticProps() {
    // Get files from the projects dir
    const files = fs.readdirSync(path.join('projects'))

    // Get slug and frontmatter from projects
    const projects = files.map((filename) => {
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
            projects: projects.sort(sortByDate),
        },
    }
}

export default projects
