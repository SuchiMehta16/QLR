import React from "react"
import { StaticQuery, graphql } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpMenu(filter: { slug: { eq: "gatsby-footer-contactus-mobile" } }) {
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
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href={prop.url}
                      alt={prop.label}
                    >
                      {prop.label}
                    </a>
                  </li>
                )
              })}
          </ul>
        </nav>
      )
    }}
  />
)
