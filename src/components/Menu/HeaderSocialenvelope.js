import React, { Component, useState } from "react"
import {
  ListGroup,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Image,
  NavDropdown,
} from "react-bootstrap"
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa"
import { Link, StaticQuery, graphql } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpMenu(filter: { slug: { eq: "gatsby-footer-contactus-email" } }) {
          edges {
            node {
              slug
              name
              menuItems {
                nodes {
                  label
                  url
                  title
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          {data &&
            data.allWpMenu &&
            data.allWpMenu.edges &&
            data.allWpMenu.edges[0] &&
            data.allWpMenu.edges[0].node &&
            data.allWpMenu.edges[0].node.menuItems &&
            data.allWpMenu.edges[0].node.menuItems.nodes &&
            data.allWpMenu.edges[0].node.menuItems.nodes.map(prop => {
              return (
                <ListGroup.Item as="li" className="">
                  <a className="nav-link p-0" href={prop.url} target="_blank">
                    <i className="fa fa-envelope"></i>
                  </a>
                </ListGroup.Item>
              )
            })}
        </>
      )
    }}
  />
)
