import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      description={siteConfig.tagline}>
      <header>
        <div className="container">
          <h1 className="hero__title">About</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div class="hero__avatar">

          </div>
          <ul className="no-margin no-padding">
            <li className="badge badge--primary mr-8">#UX</li>
            <li className="badge badge--primary mr-8">#Product Design</li>
            <li className="badge badge--primary mr-8">#Front-End Development</li>
            <li className="badge badge--primary mr-8">#CS Graduate</li>
          </ul>
          <div className="mt-16">
            <p>🎓 Graduated: Bilkent CS 2017</p>
            <p>📕 Currently Reading: Book I Read</p>
            <p>🎙 Listen My Podcast: Nitelikli Boş (in Turkish)</p>
          </div>
        </div>
      </header>
      <main>
        
      </main>
    </Layout>
  );
}

export default Home;
