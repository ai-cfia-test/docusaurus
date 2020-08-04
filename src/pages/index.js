import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: <>Predictive modeling</>,
        imageUrl: 'img/predictive_modeling.png',
        description: (
            <>
                Using statistical learning models we try to answer this question: "Based on known past behavior, what is most likely to happen in the future?".
            </>
        ),
    },
    {
        title: <>AI solutions</>,
        imageUrl: 'img/Ai_solutions.png',
        description: (
            <>
                We engineer solutions at every layer of the AI pipeline. From the architecture and training of models to the optimization methods for efficient learning, we strive for innovation and performance.
            </>
        ),
    },
    {
        title: <>Applied Research</>,
        imageUrl: 'img/research.png',
        description: (
            <>
                We pursue novel research in the lab and use the best ideas to power solutions that deliver real impact      </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`Welcome to AI Lab Documentation ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/import/Introduction')}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                <div className="container">
                    <h1 className="center">Services</h1>
                </div>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
