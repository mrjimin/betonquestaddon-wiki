import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>

                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Get Started with Documentation
                    </Link>
                </div>

                <br />
                <div>
                    <div>
                        <a href="https://modrinth.com/plugin/betonquestaddon" target="_blank">
                            <img src="https://img.shields.io/modrinth/dt/betonquestaddon?style=for-the-badge&color=adadad" alt="BetonQuestAddon Dowload"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://modrinth.com/plugin/betonquestaddon" target="_blank">
                            <img src="https://img.shields.io/modrinth/v/betonquestaddon?style=for-the-badge&color=adadad" alt="BetonQuestAddon Version"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}