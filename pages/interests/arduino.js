import React from 'react'
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import { sortByDate } from '../../utils'
import SEO from '../../components/SEO';
import styles from '../../styles/Articles.module.css'
import Card from '../../components/Card';

const arduino = ({aprojects}) => {
    const seo = { title: "Cameron Thompson: Arduino Projects", date: Date.now(), cover_image: "https://res.cloudinary.com/cameron-projects/image/upload/v1626762649/faqao1ne2ij2iuufnvpu.png", excerpt: "All of my arduino projects are on this page", url: `https://cameronthompson.io/interests/arduino` }
    return (
        <>
            <SEO seo={{ seo }} />
            <h1 className="text-6xl">Arduino Projects</h1>
            <div className={styles.postWrapper} id="articles">
                {aprojects.map((project, index) => {
                    var document = {
                        cover_image: project.frontmatter.cover_image,
                        title: project.frontmatter.title,
                        link: `/interests/arduino/${project.slug}`
                    }
                    return (<Card key={index} document={document} />)
                }
                )}
            </div>
        </>
    )
}


export async function getStaticProps() {
    // Get files from the articles dir
    const files = fs.readdirSync(path.join('arduino-projects'))

    // Get slug and frontmatter from articles
    const aprojects = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('arduino-projects', filename),
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
            aprojects: aprojects.sort(sortByDate),
        },
    }
}

export default arduino
