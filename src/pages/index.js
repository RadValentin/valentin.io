import React, {Component} from 'react';
import Link from 'gatsby-link';
import avatar from '../assets/valentin-radulescu.jpg';
import resumePdf from '../assets/valentin-radulescu-resume.pdf';
import './index.less';

class IndexPage extends Component {
  renderPosts() {
    return (
      <div>
        <h2>Posts</h2>
        {this.props.data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.frontmatter.title}>
            <h3>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link> -{' '}
              {node.frontmatter.date}
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const {author, description} = this.props.data.site.siteMetadata;

    return (
      <div className="index">
        <div className="intro-left">
          <div className="intro-left-inner">
            <img src={avatar} alt={author} width="200" height="200" />
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
          <a 
            className="intro-link-youtube"
            href="https://www.youtube.com/c/ValentinRad"
          >
            <i className="fa fa-youtube-play" /> YouTube
          </a>
          <a
            className="intro-link-github"
            href="https://github.com/RadValentin"
          >
            <i className="fa fa-github" /> Github
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
        {/* {this.renderPosts()} */}
      </div>
    );
  }
}

export default IndexPage;

export const indexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author
        description
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
