import React from 'react';
import Helmet from 'react-helmet';
import resumePdf from '../assets/valentin-radulescu-resume.pdf';
import './resume.less';

const Resume = () => (
  <div>
    <Helmet>
      <base target="_blank" />
    </Helmet>
    <div className="resume-overlay">
      <div className="resume">
        <h1>
          <span>Valentin Radulescu</span>
          <br />
          <span className="role">Front-End Developer</span>
        </h1>
        <header>
          <div className="social">
            <a href="https://twitter.com/RadValentin">
              <i className="fa fa-twitter" /> @RadValentin
            </a>
            <a href="https://github.com/RadValentin">
              <i className="fa fa-github" /> RadValentin
            </a>
            <a href="https://codepen.io/valentin">
              <i className="fa fa-codepen" /> @valentin
            </a>
            <a href="https://stackoverflow.com/users/1333383/valentin">
              <i className="fa fa-stack-overflow" /> Valentin
            </a>
            <a href={resumePdf}>
              <i className="fa fa-file-pdf-o" /> PDF version
            </a>
          </div>
          <div className="summary">
            <p>
              Experienced front-end developer searching for an awesome remote
              team.
            </p>
            <p>
              Driven by curiosity I spend my time between working on large scale
              web applications or building smaller personal projects, often
              trying out new APIs or emerging libraries, eager to bind them to
              my will.
            </p>
            <p>
              I love to work with:{' '}
              <span className="tag">React</span>{' '}
              <span className="tag">Redux</span>{' '}
              <span className="tag">Webpack</span>{' '}
              <span className="tag">LESS</span>{' '}
              <span className="tag">SASS</span>{' '}
              <span className="tag">WebVR</span>{' '}
            </p>
          </div>
        </header>
        <section className="experience">
          <h2>Experience</h2>
          <div className="subsection">
            <h3>
              Front-End Developer at{' '}
              <a href="https://hootsuite.com/">Hootsuite</a>
            </h3>
            <p className="subsection-period">
              May 2014 → Jul 2017 (3 years, 3 months)
            </p>
            <p className="subsection-tags">
              <span className="tag">React</span>{' '}
              <span className="tag">Redux</span>{' '}
              <span className="tag">Webpack</span>{' '}
              <span className="tag">LESS</span>{' '}
              <span className="tag">Jest</span>{' '}
            </p>
            <p>
              As part of the Bucharest team I helped build the UI for{' '}
              <a href="https://hootsuite.com/pages/analytics">
                Hootsuite's Analytics app
              </a>{' '}
              from scratch using React, Redux and LESS. My main focus outside
              day-to-day tasks was on improving developer experience through
              documentation and better tooling. I was also involved with
              organizing a biannual React Meetup.
            </p>
            <p>
              <b>Achievements:</b> Kickstarted an internal repo of shared React
              components during a hackathon that ended up being used across the
              company.
            </p>
          </div>
          <div className="subsection">
            <h3>
              Freelance Front-End Developer at{' '}
              <a href="https://www.upwork.com/">Upwork</a>
            </h3>
            <p className="subsection-period">
              Jan 2013 → May 2014 (1 year, 5 months)
            </p>
            <p className="subsection-tags">
              <span className="tag">ASP.NET</span>{' '}
              <span className="tag">Wordpress</span>{' '}
              <span className="tag">jQuery</span>{' '}
              <span className="tag">HTML5</span>{' '}
              <span className="tag">SASS</span>{' '}
            </p>
            <p>
              Worked with international clients and gained a good reputation as
              a freelance front-end developer. Successfully completed multiple
              projects for both large and small businesses and gained consistent
              positive feedback.
            </p>

            <p>
              <b>Achievements:</b> Many happy customers and a total rating of
              4.97 out of 5 👌
            </p>
          </div>
          <div className="subsection">
            <h3>
              Front-End Developer at{' '}
              <a href="http://www.winarrow.com/">Winarrow</a>
            </h3>
            <p className="subsection-period">
              Jan 2012 → Jan 2013 (1 year, 1 month)
            </p>
            <p className="subsection-tags">
              <span className="tag">Wordpress</span>{' '}
              <span className="tag">jQuery</span>{' '}
              <span className="tag">HTML5</span>{' '}
              <span className="tag">CSS3</span>{' '}
            </p>
            <p>
              I was tasked with writing standards compliant, cross-browser
              compatible HTML and CSS for a large number of niche e-commerce
              websites.
            </p>

            <p>
              <b>Responsibilities:</b> PSD to HTML slicing, convert sliced
              designs to Wordpress themes, SEO, A/B testing
            </p>
          </div>
        </section>
        <section>
          <h2>Freelance Projects</h2>
          <div className="subsection">
            <h3>
              A Watch by You{' '}
              <a
                href="http://designawatch.okmylo.com/"
                className="freelance-link">
                <i className="fa fa-link" />
              </a>
            </h3>
            <p className="subsection-period">Apr 2014</p>
            <p className="subsection-tags">
              <span className="tag">JavaScript</span>{' '}
              <span className="tag">SASS</span>{' '}
              <span className="tag">Responsive Design</span>{' '}
            </p>
            <p>
              A microsite built to get user feedback for an upcoming Kickstarter
              campaign. The gathered feedback was used to dictate what the final
              product (a set of watches) looked like.
            </p>
          </div>
          <div className="subsection">
            <h3>
              MYLO: Essentials x A Better Backpack{' '}
              <a
                href="http://essentials.okmylo.com/"
                className="freelance-link">
                <i className="fa fa-link" />
              </a>
            </h3>
            <p className="subsection-period">Nov 2013</p>
            <p className="subsection-tags">
              <span className="tag">JavaScript</span>{' '}
              <span className="tag">SASS</span>{' '}
              <span className="tag">Responsive Design</span>{' '}
            </p>
            <p>
              A microsite showcasing essential items for designers and
              creatives. Built to work flawlessly on desktop, tablet and mobile.
            </p>
          </div>
        </section>
        <section>
          <div className="subsection">
            <h2>Location</h2>
            <p>
              Currently located in <b>Bucharest, Romania</b> but I tend to move
              around. Only interested in <b>remote work</b> opportunities for
              the foreseeable future.
            </p>
          </div>
          <div className="subsection">
            <h2>Contact</h2>
            <p>
              Want to build the next big thing or just chat? Drop me an email at{' '}
              <b>
                <a href="mailto:hi@valentin.io">hi@valentin.io</a>
              </b>
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default Resume;
