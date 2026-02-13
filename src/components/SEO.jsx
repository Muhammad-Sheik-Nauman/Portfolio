import { Helmet } from 'react-helmet-async'

const SEO = () => {
    const siteUrl = 'https://sheiknauman.tech'
    const title = 'Muhammad Sheik Nauman | Full Stack Developer Portfolio'
    const description = 'Muhammad Sheik Nauman is a Full Stack Developer from India specializing in building modern, high-performance web applications using JavaScript, TypeScript, React, Node.js, and modern full-stack technologies.'
    const ogImage = `${siteUrl}/og-image.svg`

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Muhammad Sheik Nauman",
        "url": siteUrl,
        "jobTitle": "Full Stack Developer",
        "description": description,
        "image": ogImage,
        "sameAs": [
            "https://github.com/Muhammad-Sheik-Nauman",
            "https://www.linkedin.com/in/muhammad-sheik-nauman-811238293",
            "https://x.com/SheikNauman"
        ],
        "knowsAbout": [
            "React",
            "JavaScript",
            "TypeScript",
            "Frontend Development",
            "Backend Development",
            "Full Stack Development",
            "Web Development",
            "UI/UX"
        ]
    }

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content="Muhammad Sheik Nauman, React Developer India, Frontend Developer, JavaScript Developer, TypeScript Developer, Web Developer Portfolio, UI Developer" />
            <meta name="author" content="Muhammad Sheik Nauman" />
            <link rel="canonical" href={siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="Muhammad Sheik Nauman Portfolio" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={siteUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Additional Meta Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="theme-color" content="#202023" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    )
}

export default SEO
