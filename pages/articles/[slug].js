import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Head from 'next/head'
import Prism from "prismjs";
import React, { useEffect } from 'react';
import styles from '../../styles/Article.module.css'


export default function PostPage({
    frontmatter: { title, date, cover_image },
    slug,
    content,
}) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
                <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
            </Head>
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
            content,
        },
    }
}