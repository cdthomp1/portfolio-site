import React from 'react'
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import { sortByDate } from '../utils'
import SEO from '../components/SEO';
import styles from '../styles/Articles.module.css'
import Card from '../components/Card';

const articles = ({ articles }) => {
    const seo = { title: "Cameron Thompson: Articles", date: Date.now(), cover_image: "https://res.cloudinary.com/cameron-projects/image/upload/v1626762649/faqao1ne2ij2iuufnvpu.png", excerpt: "All of my articles are on this page", url: `https://cameronthompson.io/articles` }
    return (
        <>
            <SEO seo={{ seo }} />
            <h1 className="text-6xl">Articles</h1>
            <div className={styles.postWrapper} id="articles">
                {articles.map((article, index) => {
                    var document = {
                        cover_image: article.frontmatter.cover_image,
                        title: article.frontmatter.title,
                        link: `/articles/${article.slug}`
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
export default articles