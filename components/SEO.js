import Head from 'next/head'
import React from 'react'

const SEO = ({ seo }) => {
    const { title, date, cover_image, excerpt, url } = seo.seo
    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={excerpt} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={cover_image} />
            <meta property="og:date" content={date} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description"
                content={excerpt} />
            <meta property="twitter:image" content={cover_image} />
        </Head>
    )
}

export default SEO
