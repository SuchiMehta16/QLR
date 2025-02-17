import React from "react"
import {
  Container,
  Image,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
} from "react-bootstrap"
import arrowleft from "../../images/footer-arrow.png"
import { Link, StaticQuery, graphql } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpMenu(filter: { slug: { eq: "gatsby-footer-service" } }) {
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
        <nav className="menu">
          <ul className="nav flex-column">
            {data &&
              data.allWpMenu &&
              data.allWpMenu.edges &&
              data.allWpMenu.edges[0] &&
              data.allWpMenu.edges[0].node &&
              data.allWpMenu.edges[0].node.menuItems &&
              data.allWpMenu.edges[0].node.menuItems.nodes &&
              data.allWpMenu.edges[0].node.menuItems.nodes.map(prop => {
                return (
                  <>
                    {prop.url.indexOf("service") != -1 ? (
                      <ListGroup.Item
                        as="li"
                        className="font-16 font-regular list-group-item menu-item menu-item-type-post_type menu-item-object-cpt_694 menu-item-1095"
                      >
                        <Link to={prop.url} className="nav-link p-0">
                          {prop.label}
                        </Link>
                      </ListGroup.Item>
                    ) : (
                      <ListGroup.Item
                        as="li"
                        className="font-16 font-regular list-group-item menu-item menu-item-type-post_type menu-item-object-cpt_694 menu-item-1095"
                      >
                        <Link
                          to={
                            "/" + prop.url.toLowerCase().replace("http://", "")
                          }
                          className="nav-link p-0"
                        >
                          {" "}
                          {prop.label}
                        </Link>
                      </ListGroup.Item>
                    )}
                  </>
                )
              })}
          </ul>
        </nav>
      )
    }}
  />
)
