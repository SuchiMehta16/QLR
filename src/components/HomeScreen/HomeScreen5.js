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
        allWpCpt121 {
          edges {
            node {
              acf {
                title1
                title2
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Row>
        {data &&
          data.allWpCpt121 &&
          data.allWpCpt121.edges &&
          data.allWpCpt121.edges.node &&
          data.allWpCpt121.edges.node.map(prop => {
            return (
              <Col xl={3} lg={3} md={4} sm={12} className="mb-4">
                <Card className="p-0 border-0 mb-4 md-mb-0">
                  <Card.Body className="p-0">
                    <Card.Title className="font-22 font-bold">
                      {prop.node.acf.title1}
                    </Card.Title>
                    <Card.Text className="line-break-2 font-14 font-regular">
                      {prop.node.acf.title2}
                    </Card.Text>
                    <Link to="" className="nav-link p-0 font-18 font-regular">
                      Learn more
                      <FaAngleRight className="pl-2" />{" "}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
      </Row>
    )}
  />
)
