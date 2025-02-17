import React, { Component } from "react"
import { Container, Image, Row, Col, ListGroup } from "react-bootstrap"
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa"
import { Link, StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpCpt521 {
          edges {
            node {
              acf {
                title
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
          data.allWpCpt521 &&
          data.allWpCpt521.edges &&
          data.allWpCpt521.edges.map(prop => {
            return (
              <div className="title">
                <h2 className="text-center">{prop.node.acf.title}</h2>
                <p className="text-center">{prop.node.acf.paragraph}</p>
              </div>
            )
          })}
      </>
    )}
  />
)
