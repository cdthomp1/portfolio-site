import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Head from 'next/head'
import Prism from "prismjs";
import React, { useEffect } from 'react';
import styles from '../../styles/Article.module.css'
import SEO from '../../components/SEO'


export default function PostPage({
    frontmatter: { title, date, cover_image, excerpt },
    slug,
    content,
}) {
    const seo = {title, date: date, cover_image: cover_image, excerpt: excerpt, url: `https://cameronthompson.io/articles/${slug}`}
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <SEO seo={{seo}}/>
            <div className={styles.article}>
                <h1>{title}</h1>
                <div><h4>Posted on {date}</h4></div>
                <img src={cover_image} alt='' />
                <div className='post-body'>
                    <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('articles'))

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
        path.join('articles', slug + '.md'),
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