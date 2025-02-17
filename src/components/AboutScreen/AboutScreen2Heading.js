import React, { Component } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import { Link, StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpCpt485 {
          edges {
            node {
              acf {
                heading
                paragraph
                paragraph2
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data &&
          data.allWpCpt485 &&
          data.allWpCpt485.edges &&
          data.allWpCpt485.edges.map(prop => {
            return (
              <div className="title">
                <h2 className="text-center font-bold">
                  {prop.node.acf.heading}
                </h2>
                <p className="text-left">{prop.node.acf.paragraph}</p>
                <p className="text-left">{prop.node.acf.paragraph2}</p>
              </div>
            )
          })}
      </>
    )}
  />
)
