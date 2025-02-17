import React, { Component } from "react"
import { Container, Breadcrumb } from "react-bootstrap"
import { Link, StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpCpt299 {
          edges {
            node {
              acf {
                title1
                title2
                title3
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data &&
          data.allWpCpt299 &&
          data.allWpCpt299.edges &&
          data.allWpCpt299.edges.map(prop => {
            return (
              <div className="text-white text-center">
                <h2 className="font-40 font-uppercase font-bold mb-0">
                  {prop.node.acf.title1}
                </h2>
              </div>
            )
          })}
      </>
    )}
  />
)
