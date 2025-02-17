import React, { Component } from "react"
import { Container, Breadcrumb } from "react-bootstrap"
import { Link, StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpCpt617 {
          edges {
            node {
              acf {
                heading
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data &&
          data.allWpCpt617 &&
          data.allWpCpt617.edges &&
          data.allWpCpt617.edges.map(prop => {
            return (
              <div className="text-white text-center">
                <h2 className="font-40 font-uppercase font-bold mb-0">
                  {prop.node.acf.heading}
                </h2>
              </div>
            )
          })}
      </>
    )}
  />
)
