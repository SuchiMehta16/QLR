import React, { Component } from "react"
import { Container, Breadcrumb } from "react-bootstrap"
import { Link, StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpCpt562 {
          edges {
            node {
              acf {
                paragraph
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data &&
          data.allWpCpt562 &&
          data.allWpCpt562.edges &&
          data.allWpCpt562.edges.map(prop => {
            return (
              <p className="font-16 font-regular">{prop.node.acf.paragraph}</p>
            )
          })}
      </>
    )}
  />
)
