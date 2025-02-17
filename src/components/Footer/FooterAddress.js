import React from "react"
import { StaticQuery, graphql } from "gatsby"
export default () => (
  <StaticQuery
  // query={graphql`
  //   query {
  //     allWordpressWpApiMenusMenusItems(
  //       filter: { slug: { eq: "gatsby-footer-contactus-address" } }
  //     ) {
  //       edges {
  //         node {
  //           slug
  //           name
  //           items {
  //             title
  //             url
  //             object_slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `}
  // render={data => {
  //   return (
  //     <nav className="menu">
  //       <ul className="nav flex-column">
  //         {data &&
  //           data.allWordpressWpApiMenusMenusItems &&
  //           data.allWordpressWpApiMenusMenusItems.edges &&
  //           data.allWordpressWpApiMenusMenusItems.edges[0] &&
  //           data.allWordpressWpApiMenusMenusItems.edges[0].node &&
  //           data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
  //           data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
  //             prop => {
  //               return (
  //                 <li className="nav-item">
  //                   <a
  //                     className="nav-link active" target="_blank"
  //                     href={prop.url}
  //                     alt={prop.title}
  //                   >
  //                     {prop.title}
  //                   </a>
  //                 </li>
  //               )
  //             }
  //           )}
  //       </ul>
  //     </nav>
  //   )
  // }}
  />
)
