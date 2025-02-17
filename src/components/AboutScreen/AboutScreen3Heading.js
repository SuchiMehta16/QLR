import React, { Component } from "react"
import { Container, Breadcrumb } from "react-bootstrap"
import { Link, StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpCpt490 {
          edges {
            node {
              acf {
                heading
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
          data.allWpCpt490 &&
          data.allWpCpt490.edges &&
          data.allWpCpt490.edges.map(prop => {
            return (
              <div className="title">
                <h2 className="text-center">{prop.node.acf.heading}</h2>
                <p className="text-center">{prop.node.acf.paragraph}</p>
              </div>
            )
          })}
      </>
    )}
  />
)
