import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to use',
    Svg: require('@site/static/img/undraw_noobcloud_easy_to_use.svg').default,
    description: (
      <>
        NoobCloud was designed from the ground up to be easily installed and
        used.
      </>
    ),
  },
  {
    title: 'Lightweight',
    Svg: require('@site/static/img/undraw_noobcloud_lightweight.svg').default,
    description: (
      <>
        NoobCloud only contains necessary features. This makes NoobCloud very efficient
        and easy to understand.
      </>
    ),
  },
  {
    title: 'Open source',
    Svg: require('@site/static/img/undraw_noobcloud_open_source.svg').default,
    description: (
      <>
        NoobCloud is open source and free to use. I appreciate your contribution in
        form of pull requests and issues.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
