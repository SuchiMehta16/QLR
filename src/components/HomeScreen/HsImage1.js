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
        allWpCpt60 {
          edges {
            node {
              id
              slug
              acf {
                title1
                title2
                link
                image {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Row>
        {data &&
          data.allWpCpt60 &&
          data.allWpCpt60.edges &&
          data.allWpCpt60.edges.map(prop => {
            return (
              <Col xl={3} lg={3} md={6} sm={12} className="md-mb-4 h-100">
                <Card className="p-0 border-0">
                  <Card.Img
                    variant="top"
                    src={prop.node.acf.image.sourceUrl}
                    fluid
                  />
                  <Card.Body className="pl-0 pr-0 pb-0 h-100">
                    <Card.Title className="font-22 font-bold">
                      {prop.node.acf.title1}
                    </Card.Title>
                    <Card.Text className=" font-16 font-regular">
                      {prop.node.acf.title2}
                    </Card.Text>
                    <Link
                      to={"/" + prop.node.acf.link.replace("http://", "")}
                      className="nav-link p-0 font-18 font-regular"
                    >
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
