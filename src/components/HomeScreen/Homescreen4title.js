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
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpCpt516 {
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
      <>
        {data &&
          data.allWpCpt516 &&
          data.allWpCpt516.edges &&
          data.allWpCpt516.edges.map(prop => {
            return (
              <div className="title">
                <h2 className="text-center">{prop.node.acf.title1}</h2>
                <p className="text-center">{prop.node.acf.title2}</p>
              </div>
            )
          })}
      </>
    )}
  />
)
