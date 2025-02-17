import React, { Component } from "react"
import { Container, Row, Col, Media, Image } from "react-bootstrap"
import { Link, StaticQuery, graphql } from "gatsby"
import Iframe from "react-iframe"
import map from "../../images/blue-map.png"
import call from "../../images/blue-call.png"
import mail from "../../images/blue-mail.png"
export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpCpt307 {
          edges {
            node {
              acf {
                heading
                paragraph
                address
                email
                mobile
                paragraph1
                imageemail {
                  sourceUrl
                }
                imagelocation {
                  sourceUrl
                }
                imagemobile {
                  sourceUrl
                }
                link1
                link2
                link3
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data &&
          data.allWpCpt307 &&
          data.allWpCpt307.edges &&
          data.allWpCpt307.edges.map(prop => {
            return (
              <Container>
                <div className="title">
                  <h2 className="text-center">{prop.node.acf.heading}</h2>
                  <p className="text-center">{prop.node.acf.paragraph}</p>
                </div>

                <Row>
                  <Col>
                    <h3 className="font-25 font-regular text-center mb-30">
                      Australia Office (Headquarters)
                    </h3>
                    <Iframe
                      url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3385.1889096226905!2d115.859075!3d-31.9557714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bb29e26a22b5%3A0x4237fca06c578d13!2s45%20St%20Georges%20Terrace%2C%20Perth%20WA%206000%2C%20Australia!5e0!3m2!1sen!2sin!4v1598633772764!5m2!1sen!2sin"
                      width="100%"
                      height="500px"
                      className="map-iframe"
                      position="relative"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </Col>
                  <Col>
                    <h3 className="font-25 font-regular text-center mb-30">
                      India Office
                    </h3>
                    <iframe
                      className="map map-iframe"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9942814275378!2d72.5655622145081!3d23.023982184952448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fcf0805947%3A0x5a6d3c9ec65ad9b8!2sQL%20Tech%20%C2%BB%20Web%20Design%20%26%20SEO%20Marketing%20Company!5e0!3m2!1sen!2sin!4v1570855705668!5m2!1sen!2sin"
                      width="100%"
                      height="500px"
                      position="relative"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </Col>
                </Row>

                <p
                  className="font-25 font-regular text-center mb-30"
                  id="contact3"
                >
                  {prop.node.acf.paragraph1}
                </p>

                <Row className="mb-3 md-mb-0 align-items-center">
                  <Col>
                    <Col xl={12} lg={12} md={12} className="md-mb-4">
                      <a
                        href={prop.node.acf.link1}
                        target="_blank"
                        className="h-100 nav-link"
                      >
                        {/* <Media className="align-items-center d-flex">
                          <img
                            width="30"
                            className="mr-3 img-fluid"
                            src={prop.node.acf.imagelocation.sourceUrl}
                          />
                          <Media.Body>
                            <p className="font-18 font-semibold color-666 mb-0">
                              {prop.node.acf.address}
                            </p>
                          </Media.Body>
                        </Media> */}

                        <div className="d-flex align-items-center media">
                          <img
                            width="30"
                            className="me-3 img-fluid"
                            src={prop.node.acf.imagelocation.sourceUrl}
                          />
                          <div className="media-body">
                            <p className="font-18 font-semibold color-666 mb-0">
                              {prop.node.acf.address}
                            </p>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col
                      xl={12}
                      lg={12}
                      md={12}
                      className="md-mb-4"
                      id="contactnew3"
                    >
                      <a href={prop.node.acf.link2} className="h-100 nav-link">
                        {/* <Media className="align-items-center d-flex">
                          <img
                            width="30"
                            className="mr-3 img-fluid"
                            src={prop.node.acf.imageEmail.sourceUrl}
                          />
                          <Media.Body id="contactnewnew3">
                            <p className="font-18 font-semibold color-666 mb-0">
                              {prop.node.acf.email}
                            </p>
                          </Media.Body>
                        </Media> */}

                        <div className="d-flex align-items-center media">
                          <img
                            width="30"
                            className="me-3 img-fluid"
                            src={prop.node.acf.imageemail?.sourceUrl}
                            alt="Email Icon"
                          />
                          <div id="contactnewnew3">
                            <div className="media-body">
                              <p className="font-18 font-semibold color-666 mb-0">
                                {prop.node.acf.email || "No email available"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xl={12} lg={12} md={12} className="md-mb-4">
                      <div className="h-100">
                        {/* <Media className="align-items-center d-flex">
                          <img
                            width="30"
                            className="mr-3 img-fluid"
                            src={prop.node.acf.imagemobile.sourceUrl}
                          />
                          <Media.Body>
                            <a
                              href={prop.node.acf.link3}
                              className="font-18 font-semibold color-666 mb-0 d-block"
                            >
                              {prop.node.acf.mobile}
                            </a>
                          </Media.Body>
                        </Media> */}

                        <div className="d-flex align-items-center media">
                          <img
                            width="30"
                            className="me-3 img-fluid"
                            src={prop.node.acf.imagemobile?.sourceUrl}
                            alt="Mobile Icon"
                          />
                          <div className="media-body">
                            <a
                              href={prop.node.acf.link3 || "#"}
                              className="font-18 font-semibold color-666 mb-0 d-block nav-link"
                            >
                              {prop.node.acf.mobile || "No mobile available"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Col>
                  <Col>
                    <Col xl={12} lg={12} md={12} className="md-mb-4">
                      <a
                        href="https://goo.gl/maps/4kNRJGU3EtJ1mjpS8"
                        target="_blank"
                        className="h-100 nav-link"
                      >
                        {/* <Media className="align-items-center d-flex">
                          <img
                            width="30"
                            className="mr-3 img-fluid"
                            src={prop.node.acf.imagelocation.sourceUrl}
                          />
                          <Media.Body>
                            <p className="font-18 font-semibold color-666 mb-0">
                              1208, Phoenix, Vijay Cross Rd, opp. Andhra Bank,
                              Navrangpura, Ahmedabad, Gujarat 380009
                            </p>
                          </Media.Body>
                        </Media> */}

                        <div className="d-flex align-items-center media">
                          <img
                            width="30"
                            className="me-3 img-fluid"
                            src={prop.node.acf.imagelocation?.sourceUrl}
                            alt="Location Icon"
                          />
                          <div className="media-body">
                            <p className="font-18 font-semibold color-666 mb-0">
                              1208, Phoenix, Vijay Cross Rd, opp. Andhra Bank,
                              Navrangpura, Ahmedabad, Gujarat 380009
                            </p>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col
                      xl={12}
                      lg={12}
                      md={12}
                      className="md-mb-4"
                      id="contactnew3"
                    >
                      <a href={prop.node.acf.link2} className="h-100 nav-link">
                        {/* <Media className="align-items-center d-flex">
                          <img
                            width="30"
                            className="mr-3 img-fluid"
                            src={prop.node.acf.imageemail.sourceUrl}
                          />
                          <Media.Body id="contactnewnew3">
                            <p className="font-18 font-semibold color-666 mb-0">
                              {prop.node.acf.email}
                            </p>
                          </Media.Body>
                        </Media> */}

                        <div className="d-flex align-items-center media">
                          <img
                            width="30"
                            className="me-3 img-fluid"
                            src={prop.node.acf.imageemail?.sourceUrl}
                            alt="Email Icon"
                          />
                          <div id="contactnewnew3">
                            <div className="media-body">
                              <p className="font-18 font-semibold color-666 mb-0">
                                {prop.node.acf.email || "No email available"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xl={12} lg={12} md={12} className="md-mb-4">
                      <div className="h-100">
                        {/* <Media className="align-items-center d-flex">
                          <img
                            width="30"
                            className="mr-3 img-fluid"
                            src={prop.node.acf.imagemobile.sourceUrl}
                          />
                          <Media.Body>
                            <a
                              href={prop.node.acf.link3}
                              className="font-18 font-semibold color-666 mb-0 d-block"
                            >
                              +91 79 4006 1419
                            </a>
                          </Media.Body>
                        </Media> */}

                        <div className="d-flex align-items-center media">
                          <img
                            width="30"
                            className="me-3 img-fluid"
                            src={
                              prop.node.acf.imagemobile?.sourceUrl ||
                              "fallback-image.jpg"
                            }
                            alt="Mobile Icon"
                          />
                          <div className="media-body">
                            <a
                              href={prop.node.acf.link3 || "#"}
                              className="font-18 font-semibold color-666 mb-0 d-block nav-link"
                            >
                              +91 79 4006 1419
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Col>
                </Row>

                <Row className="mb-3 md-mb-0 align-items-center"></Row>
              </Container>
            )
          })}
      </>
    )}
  />
)
