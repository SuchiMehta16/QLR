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
  //     query={graphql`
  //       query {
  //   allWordpressWpApiMenusMenusItems(filter: {slug: {eq: "header-social-link-insta"}}) {
  //     edges {
  //       node {
  //         slug
  //         items {
  //           object_slug
  //           url
  //           title
  //         }
  //       }
  //     }
  //   }
  // }

  //     `}
  //     render={data => {
  //       return (
  //             <>

  //             {data &&
  //               data.allWordpressWpApiMenusMenusItems &&
  //               data.allWordpressWpApiMenusMenusItems.edges &&
  //               data.allWordpressWpApiMenusMenusItems.edges[0] &&
  //               data.allWordpressWpApiMenusMenusItems.edges[0].node &&
  //               data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
  //               data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
  //                 prop => {
  //                   return (
  //                   <ListGroup.Item as="li" className=""><Link className="nav-link p-0" to={prop.url} target="_blank"><i className="fa fa-instagram"></i></Link></ListGroup.Item>
  //                 )
  //                 }
  //               )}

  //         </>
  //       )
  //     }}
  />
)
