import React, { Component } from "react"
import {
  Container,
  Image,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
} from "react-bootstrap"
import { Link, StaticQuery, graphql } from "gatsby"
import { FaAngleRight } from "react-icons/fa"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpCpt359 {
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
          data.allWpCpt359 &&
          data.allWpCpt359.edges &&
          data.allWpCpt359.edges.node &&
          data.allWpCpt359.edges.node.map(prop => {
            return (
              <div className="title">
                <h2 className="text-center font-bold">
                  {prop.node.acf.heading}
                </h2>
              </div>
            )
          })}
      </>
    )}
  />
)
