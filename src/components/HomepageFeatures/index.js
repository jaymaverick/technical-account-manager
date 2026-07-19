import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The Goal',
    imgSrc: 'img/hunting-ai.jpeg',
    description: (
      <>
        No vanity metrics. Just retention. I don't measure success by how many tickets got closed. I measure it by whether the customer is still here next year, and getting more value than they were last year.
      </>
    ),
  },
  {
    title: 'The Method',
    imgSrc: 'img/prototype.jpeg',
    description: (
      <>
        I diagnose before I respond. Every account has a health signal hiding somewhere: usage patterns, quiet champions, half-finished integrations. I find it before the renewal call, not during it.
      </>
    ),
  },
  {
    title: 'The Grind',
    imgSrc: 'img/sisyphus.jpeg',
    description: (
      <>
        I don't just manage relationships. I debug them. Check out the Case Studies to see how I've turned technical friction into commercial trust. <strong>Real accounts, real fixes, real numbers.</strong>
      </>
    ),
  },
];

function Feature({Svg, imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img 
            src={imgSrc} 
            className={styles.featureSvg} 
            alt={title} 
            style={{ width: '300px', height: '200px', objectFit: 'contain' }}
          />
        )} 
     </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
