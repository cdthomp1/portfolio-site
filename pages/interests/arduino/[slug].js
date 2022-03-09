import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Prism from "prismjs";
import React, { useEffect } from 'react';
import styles from '../../../styles/Article.module.css'
import SEO from '../../../components/SEO'
import ReactMarkdown from 'react-markdown'



export default function ArduinoArticle({
    frontmatter: { title, date, cover_image, excerpt },
    slug,
    content,
}) {
    const seo = { title, date: date, cover_image: cover_image, excerpt: excerpt, url: `https://cameronthompson.io/interests/arduino/arduino-zoom-box` }
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <SEO seo={{ seo }} />
            <div className={styles.article}>
                <h1>{title}</h1>
                <img className={styles.articleImg} src={cover_image} alt='' />

                <div className={styles.postBody}>
                    <ReactMarkdown children={content} />

                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('arduino-projects'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('arduino-projects', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        },
    }
}