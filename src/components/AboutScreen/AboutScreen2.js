import React, { Component } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import { Link, StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpCpt141 {
          edges {
            node {
              acf {
                paragraph1
                paragraph2
                title1
                title2
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
      <>
        {data &&
          data.allWpCpt141 &&
          data.allWpCpt141.edges &&
          data.allWpCpt141.edges.map(prop => {
            return (
              <Row>
                <Col xl={7} lg={7} md={7} className="sm-mb-2">
                  <div className="bg-gray p-4 mb-0 h-100">
                    <div className="mb-30">
                      <p className="font-bold font-22 color-303030">
                        {prop.node.acf.title1}
                      </p>
                      <p className="font-16 font-regular mb-0">
                        {prop.node.acf.paragraph1}
                      </p>
                    </div>
                    <div>
                      <p className="font-bold font-22 color-303030">
                        {prop.node.acf.title2}
                      </p>
                      <p className="font-16 font-regular mb-0">
                        {prop.node.acf.paragraph2}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xl={5} lg={5} md={5}>
                  <Image
                    src={prop.node.acf.image.sourceUrl}
                    className="img-fluid"
                  />
                </Col>
              </Row>
            )
          })}
      </>
    )}
  />
)
