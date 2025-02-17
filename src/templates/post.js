import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import { Container, Image, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
//import Footer from "../components/common/Footer"
export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  image,
}) => {
  return (
    <>
      <div className="main-padding-header">
        <section className="banner-section">
          <Container>
            <div className="text-white text-center">
              <h2
                className="font-40 font-uppercase font-bold mb-0"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
          </Container>
        </section>
      </div>
      <section>
        <Container>
          <Row>
            <div className="col-lg-8 offset-2 mt-3 mb-3 col">
              <img
                className="card-img-top"
                src={"https://qlresources.com.au/" + image}
              />
            </div>
          </Row>
        </Container>
      </section>
      <section className="project-section-2 service-main-section-2">
        <Container>
          <div dangerouslySetInnerHTML={{ __html: content }} className="" />
        </Container>
      </section>

      {/* <Footer /> */}
    </>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wpPost: post } = data

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        image={post.acf != null ? post.acf.url_path_new : ""}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on WpPost {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        nodes {
          name
          slug
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
    }
  }
`
