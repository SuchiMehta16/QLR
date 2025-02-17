import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props
    console.log("here")
    console.log(posts)
    return (
      <section className="section home-section-3">
        <div className="container">
          <div className="row">
            {posts.map(({ node: post }) => (
              <div className="mb-5 h-100 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="p-0 border-0 card">
                  {post.acf != null ? (
                    <>
                      <img
                        className="card-img-top"
                        src={
                          "https://qlresources.com.au/" + post.acf.urlPathNew
                        }
                      />
                    </>
                  ) : (
                    ""
                  )}
                  <div className="pl-0 pr-0 pb-0 h-100 card-body">
                    <div
                      className="font-22 font-bold card-title h5"
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                    <p>
                      <small>{post.date} - posted by </small>
                    </p>
                    <div
                      className=" font-16 font-regular card-text"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.substring(0, 500),
                      }}
                    />

                    <Link
                      className="nav-link p-0 font-18 font-regular"
                      to={"/blog/" + post.slug}
                    >
                      Keep Reading →{" "}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

// export const pageQuery = graphql`
//   fragment PostListFields on WpPost {
//     id
//     title
//     excerpt

//     acf {
//       urlPathNew
//     }
//     date(formatString: "MMMM DD, YYYY")
//     slug
//   }
// `

export const pageQuery = graphql`
  fragment PostListFields on WpPost {
    id
    title
    excerpt
    date(formatString: "MMMM DD, YYYY")
    uri
    acf {
      urlPathNew
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
`
