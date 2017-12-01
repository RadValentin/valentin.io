import React from 'react';
import Link from 'gatsby-link';
import avatar from '../assets/valentin-radulescu.jpg';
import resumePdf from '../assets/valentin-radulescu-resume.pdf';
import './index.less';

const IndexPage = ({data}) => {
  const {author, description} = data.site.siteMetadata;

  return (
    <div className="index">
      <div className="intro-left">
        <div className="intro-left-inner">
          <img src={avatar} alt={author} />
          <h1>{description}</h1>
          <h2>
            👉{' '}
            <a href="&#109;&#097;&#105;&#108;&#116;&#111;:&#104;&#105;&#064;&#118;&#097;&#108;&#101;&#110;&#116;&#105;&#110;&#046;&#105;&#111;">
              Get in touch
            </a>
          </h2>
        </div>
      </div>
      <div className="intro-right">
        <a className="intro-link-github" href="https://github.com/RadValentin">
          <i className="fa fa-github" /> Github
        </a>
        <a
          className="intro-link-twitter"
          href="https://twitter.com/RadValentin"
        >
          <i className="fa fa-twitter" /> Twitter
        </a>
        <a
          className="intro-link-linkedin"
          href="https://www.linkedin.com/in/valentinrad/"
        >
          <i className="fa fa-linkedin" /> LinkedIn
        </a>
        <a className="intro-link-codepen" href="https://codepen.io/valentin/">
          <i className="fa fa-codepen" /> Codepen
        </a>
        <a className="intro-link-resume" href={resumePdf}>
          <i className="fa fa-file-pdf-o" /> Résumé
        </a>
      </div>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexMetadataLookup {
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`;
