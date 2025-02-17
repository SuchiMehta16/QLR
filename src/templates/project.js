import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { Container, Image, Row, Col } from "react-bootstrap"
import Footer from "../components/common/Footer"

class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const page = this.props.data.allWpCpt694

    console.log(page)
    return (
      <Layout>
        <div className="main-padding-header">
          <section className="banner-section">
            <Container>
              <div className="text-white text-center">
                <h2 className="font-40 font-uppercase font-bold mb-0">
                  {page.edges[0].node.title}
                </h2>
              </div>
            </Container>
          </section>
        </div>
        <section className="project-section-2 service-main-section-2">
          <Container>
            <Container>
              <p>{page.edges[0].node.acf.title}</p>

              <Image
                src={page.edges[0].node.acf.image.sourceUrl}
                fluid
                className="mb-3"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: page.edges[0].node.acf.content,
                }}
                className=""
              />
            </Container>
          </Container>
        </section>
        <Footer />
      </Layout>
    )
  }
}

Projects.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Projects

export const pageQuery = graphql`
  query ($id: String!) {
    allWpCpt694(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          acf {
            content
            title
            image {
              sourceUrl
            }
          }
          slug
          title
        }
      }
    }
  }
`
