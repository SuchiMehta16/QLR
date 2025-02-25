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
        allWpCpt568 {
          edges {
            node {
              acf {
                paragraph
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data &&
          data.allWpCpt568 &&
          data.allWpCpt568.edges &&          
          data.allWpCpt568.edges.map(prop => {
            return (
              <div className="title">
                <h2 className="text-center">{prop.node.acf.title}</h2>
                <p className="text-center"></p>
              </div>
            )
          })}
      </>
    )}
  />
)
