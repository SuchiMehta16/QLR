import React, { Component } from "react"
import { Container, Breadcrumb } from "react-bootstrap"
import { Link, StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpCpt182 {
          edges {
            node {
              acf {
                title1
                title2
                title3
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data &&
          data.allWpCpt182 &&
          data.allWpCpt182.edges &&
          data.allWpCpt182.edges.map(prop => {
            return (
              <div className="text-white text-center">
                <h2 className="font-40 font-uppercase font-bold mb-0">
                  {prop.node.acf.title1}
                </h2>
                <Breadcrumb>
                  <Breadcrumb.Item className="font-18  font-bold ">
                    <Link className="nav-link p-0" to="/">
                      {prop.node.acf.title2}
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item
                    active
                    href=""
                    className="font-18  font-bold"
                  >
                    {prop.node.acf.title3}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            )
          })}
      </>
    )}
  />
)
