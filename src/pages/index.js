import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import React from 'react';
import PortfolioTimeline from '@site/src/components/PortfolioTimeline';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header 
      style={{
        width: '100%',
        padding: '6rem 0', 
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('img/banner-bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '500px', margin: '0 auto', background: 'rgba(0, 0, 0, 0.01)', padding: '2.5rem', borderRadius: '12px', backdropFilter: 'blur(4px)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: '800', color: '#ffffff', marginBottom: '2rem', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          {siteConfig.title}
        </h1>
        <p style={{ fontSize: '1.7rem', fontWeight: '600', color: '#f3f4f6', maxWidth: '400px', margin: '0 auto', opacity: '0.95', marginBottom: '2rem', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/Introduction"
            style={{ 
              fontSize: '1.1rem', 
              padding: '0.75rem 2rem',
              backgroundColor: '#1394E6', 
              borderColor: '#60A5FA',
              color: '#ffffff',
              fontWeight: '600'
            }}
          >
            My Case Studies
            <svg style={{ marginLeft: '10px', width: '20px', height: '15px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Jay Pitkänen - I build AI Implementations that solve real world business problems">
      <HomepageHeader />
      <main>
        <section style={{ padding: '4rem 0 2rem 0', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.0rem', maxWidth: '900px', margin: '0 auto', fontWeight: '700', lineHeight: '1.2' }}>
              Retention Through Trust, Not Just Tickets
            </h2>
          </div>
          <p style={{ fontSize: '1.2rem', color: 'var(--ifm-color-focus)', maxWidth: '800px', margin: '1.5rem auto 0 auto', lineHeight: '1.6', opacity: '0.9' }}>
            Most Customer Success is reactive: wait for the complaint, then respond. That's not retention, that's damage control.
          </p>
          <p style={{ fontSize: '1.2rem', color: 'var(--ifm-color-focus)', maxWidth: '700px', margin: '1.5rem auto 0 auto', lineHeight: '1.6', opacity: '0.9' }}>
            I manage technical accounts the way I build systems: understand the workflow first, find where the value is getting lost, and fix it before it becomes a churn conversation.
          </p>
          <p style={{ fontSize: '1.2rem', color: 'var(--ifm-color-focus)', maxWidth: '800px', margin: '1.5rem auto 0 auto', lineHeight: '1.6', opacity: '0.9' }}>
            The result: customers who don't just renew, but expand. They finally understand what your product can <strong>actually do for them.           </strong>
          </p>
          <p style={{ fontSize: '1.2rem', color: 'var(--ifm-color-focus)', maxWidth: '800px', margin: '1.5rem auto 0 auto', lineHeight: '1.6', opacity: '0.9' }}>
            Technical trust isn't a soft skill. It's the retention strategy.
          </p>
        </section>

        <HomepageFeatures />

        <hr style={{ margin: '2rem auto', maxWidth: '80%', opacity: '0.2' }} />

        {/* Section: Why AI Projects Fail */}
        <section style={{ padding: '1rem 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <Heading as="h2" style={{ marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.8rem' }}>
              How I Actually Work
            </Heading>
            <blockquote style={{ 
              fontSize: '1.1rem', 
              fontStyle: 'normal', 
              borderLeft: '4px solid var(--ifm-color-primary)', 
              padding: '1.5rem', 
              backgroundColor: 'var(--ifm-background-color-neutral)', 
              borderRadius: '4px',
              lineHeight: '1.6'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Most account churn isn't a surprise. It's a signal that got ignored for months.
              </p>
              <p><strong>My operating rules are simple:</strong></p>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Read the data before the customer has to tell you: </strong> If a customer has to escalate before you know something's wrong, you were already too late.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Solve it yourself first: </strong> A technical question deserves a technical answer — not a ticket routed to three teams while the customer waits.</li>
                <li><strong>Treat every account as a relationship, not a number: </strong> A $20k account and a $100k account both deserve to feel like the most important one in the room.</li>
              </ul>
              <p>The goal isn't to hit a retention target. It's to make sure the customer never has a reason to leave in the first place.</p>
            </blockquote>
          </div>
        </section>

        <hr style={{ margin: '2rem auto', maxWidth: '80%', opacity: '0.2' }} />
          <div className="container" style={{ padding: '1rem 0', maxWidth: '900px' }}>
            <Heading as="h1" style={{ textAlign: 'center', fontSize: '3rem' }}>
              Hi, I'm Jay
            </Heading>
          </div>
        <section style={{ padding: '1rem 0', display: 'flex', justifyContent: 'center' }}>
          <div className="container" style={{ maxWidth: '900px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ flexShrink: 0 }}>
              <img 
                src="img/headshot.webp"
                alt="Jay Pitkänen" 
                style={{ width: '350px', height: '350px', borderRadius: '50%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ margin: '0 0 1rem 0', color: '#4b5563' }}>Need help with Customer Success?</p>
              <a href="https://www.linkedin.com/in/jaypitkanen/" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#3B82F6', textDecoration: 'none' }}>
<img src="img/LI-In-Bug.png" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
              Connect With Me on LinkedIn &rarr;
              </a>
            </div>
          </div>
        </section>

        <section style={{ padding: '1rem 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <Heading as="h2" style={{ marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.8rem' }}>
              I Turn Technical Trust Into Retention
            </Heading>
            <blockquote style={{
              fontSize: '1.1rem',
              fontStyle: 'normal',
              borderLeft: '4px solid var(--ifm-color-primary)',
              padding: '1.5rem',
              backgroundColor: 'var(--ifm-background-color-neutral)',
              borderRadius: '4px',
              lineHeight: '1.6'
            }}>
              <p><strong>Not sure if my background fits the mold?</strong></p>
              <p>Here's how it actually breaks down:</p>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>"We need someone who can debug a real problem, not just log a ticket"</strong> I've spent years diagnosing exactly where a system or workflow breaks down, and fixing it myself before escalating it to someone else.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>"We need someone who can talk to both the CFO and the engineer"</strong> I translate technical constraints into business outcomes and business goals into technical requirements in the same conversation, without losing either side.</li>
                <li><strong>"We need someone who actually cares if the customer stays"</strong> Retention isn't a metric I report on. It's the outcome of doing the diagnostic and communication work well, every time.</li>
              </ul>
              <p>The goal isn't to hit a quarterly retention number. It's to make sure the customer never had a reason to think about leaving.</p>
            </blockquote>
          </div>
          <div className={styles.buttons}>
          <Link
          className="button button--secondary button--lg"
          to="docs/Introduction"
          style={{
            fontSize: '1.1rem',
          padding: '0.75rem 2rem',
          backgroundColor: '#1394E6',
          borderColor: '#60A5FA',
          color: '#ffffff',
          fontWeight: '600'
          }}
          >
          My Case Studies
          <svg style={{ marginLeft: '10px', width: '20px', height: '15px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          </Link>
          </div>
        </section>

        {/* Section: Who is Jay? */}
        <section style={{ marginTop: '2rem' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <Heading as="h2" style={{ marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.8rem' }}>
              Who Am I Really?
            </Heading>
              <p style={{ marginBottom: '1rem' }}>
                I'm a communicator, explorer, dreamer and builder. My brain has never been very good at the whole "stick to the status quo, don't rock the boat, get a traditional career"-sort of thing.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                When I wanted to study SEO and blogging, Aalto University didn't even recognize the concept of <strong> "content marketing." </strong> I eventually realized I wasn't built for a traditional career path. No, my people were out there and I needed to go find them.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                It took a few years, but eventually I found my people: <strong> Dreamers. Shapers. Singers. Makers. </strong>
              </p>
              <p style={{ marginBottom: '1rem' }}>
                And we've done some amazing stuff together.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                My professional career is hardly traditional. Marketing, relationship coaching, hacking MVPs with the strangest people on the planet. But a defining through-line has always been my desire to teach and help people understand. In coaching it was helping people understand themselves. In business, it's helping customers understand the product and <strong>succeed in using it to grow their business.</strong>
              </p>
              <p style={{ marginBottom: '0rem' }}>
                Here are some achievements I'm proud of:
              </p>
          </div>
         <div className="container" style={{ maxWidth: '900px' }}>
          <PortfolioTimeline />
         </div>

         <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/Introduction"
            style={{ 
              fontSize: '1.1rem', 
              padding: '0.75rem 2rem',
              backgroundColor: '#1394E6', 
              borderColor: '#60A5FA',
              color: '#ffffff',
              fontWeight: '600',
              marginBottom: '5rem'
            }}
          >
            My Case Studies
            <svg style={{ marginLeft: '10px', width: '20px', height: '15px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
         </div>
        </section>
      </main>
    </Layout>
  );
}
