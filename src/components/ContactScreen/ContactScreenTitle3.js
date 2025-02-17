// import React, { Component } from "react"
// import { Container, Row, Col, Media, Image } from "react-bootstrap"
// import { Link, StaticQuery, graphql } from "gatsby"
// import Iframe from "react-iframe"
// import map from "../../images/blue-map.png"
// import call from "../../images/blue-call.png"
// import mail from "../../images/blue-mail.png"
// export default () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         allWpCpt507 {
//           edges {
//             node {
//               acf {
//                 title
//                 paragraph
//                 paragraph2
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         {data &&
//           data.allWpCpt507 &&
//           data.allWpCpt507.edges &&
//           data.allWpCpt507.edges.map(prop => {
//             return (
//               <div className="title">
//                 <h2 className="text-center">{prop.node.acf.title}</h2>
//                 <p className="text-center">
//                   {prop.node.acf.paragraph}
//                   <br></br>
//                   {prop.node.acf.paragraph2}
//                 </p>
//               </div>
//             )
//           })}
//       </>
//     )}
//   />
// )

import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import { graphql, StaticQuery } from "gatsby"
import Iframe from "react-iframe"
import map from "../../images/blue-map.png"
import call from "../../images/blue-call.png"
import mail from "../../images/blue-mail.png"

const ContactScreenTitle3 = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWpCpt507 {
            edges {
              node {
                acf {
                  title
                  paragraph
                  paragraph2
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          {data?.allWpCpt507?.edges?.map(({ node }, index) => (
            <div className="title" key={index}>
              <h2 className="text-center">{node.acf.title}</h2>
              <p className="text-center">
                {node.acf.paragraph}
                <br />
                {node.acf.paragraph2}
              </p>
            </div>
          ))}
        </>
      )}
    />
  )
}

export default ContactScreenTitle3
