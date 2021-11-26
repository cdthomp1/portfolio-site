import 'tailwindcss/tailwind.css'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Prism from "prismjs";
import React, { useEffect } from 'react';
import styles from '../../styles/Article.module.css'
import SEO from '../../components/SEO'



export default function PostPage({
    frontmatter: { title, date, cover_image, excerpt, repo_link, live_link },
    slug,
    content,
}) {

    const seo = { title, date: date, cover_image: cover_image, excerpt: excerpt, url: `https://cameronthompson.io/projects/${slug}` }
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <SEO seo={{ seo }} />
            <div className="flex flex-col items-center justify-evenly h-screen">
                <h1 className="text-7xl">{title}</h1>
                <img className={styles.articleImg} src={cover_image} alt='' />
                <div><h4 className="text-4xl">Posted on {date}</h4></div>
                <div className="flex justify-evenly w-96">
                    <div><a className="text-link text-xl" href={repo_link} >Repo</a></div>
                    {live_link ? <div><a className="text-link text-xl" href={live_link} >Live</a></div> : <div></div>}
                </div>
                {/*  <div className={styles.postBody}>
                    <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                </div> */}
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('projects'))

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
        path.join('projects', slug + '.md'),
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