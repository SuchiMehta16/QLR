import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostList from "../components/PostList"
import Pagination from "../components/Pagination"
import Footer from "../components/common/Footer"

export default class IndexPage extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { edges: posts } = data.allWpPost

    return (
      <Layout>
        <section className="banner-section">
          <div className="container">
            <div className="text-white text-center">
              <h2 className="font-40 font-uppercase font-bold mb-0">Blogs</h2>
            </div>
          </div>
        </section>
        <PostList posts={posts} title="Latest posts" />
        <Pagination pageContext={pageContext} pathPrefix="/" />
        <Footer />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWpPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
}

export const pageQuery = graphql`
  query IndexQuery($limit: Int!, $skip: Int!) {
    allWpPost(sort: { date: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          title
          slug
          excerpt
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
          acf {
            urlPathNew
          }
        }
      }
    }
  }
`
