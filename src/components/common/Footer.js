import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import {
  Container,
  Image,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
} from "react-bootstrap"
import { FaLinkedinIn, FaTwitter } from "react-icons/fa"
import logo from "../../images/QLRlogo.svg"
import arrowleft from "../../images/footer-arrow.png"
import footermap from "../../images/footer-map.png"
import footermail from "../../images/footer-envelop.png"
import footercall from "../../images/footer-call.png"
import FooterProject from "../Footer/FooterProject"
import FooterServices from "../Footer/FooterServices"
import FooterAddress from "../Footer/FooterAddress"
import FooterEmail from "../Footer/FooterEmail"
import FooterMobile from "../Footer/FooterMobile"
import FooterParagraph from "../Footer/FooterParagraph"
class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer">
          <Container>
            <Row>
              <Col xl={3} lg={6} md={12} sm={12} className="lg-mb-4">
                <div className="footer-data-inner">
                  <Link to="/">
                    <Image src={logo} fluid className="footer-logo mb-4" />
                  </Link>

                  <FooterParagraph />
                </div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={6} className="lg-mb-4">
                <div className="footer-data">
                  <h3 className="font-bold font-18 mb-4">Projects</h3>
                  <ListGroup as="ul">
                    <FooterProject />
                  </ListGroup>
                </div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={6} className="lg-mb-4">
                <div className="footer-data">
                  <h3 className="font-bold font-18 mb-4">Services</h3>
                  <ListGroup as="ul">
                    <FooterServices />
                  </ListGroup>
                </div>
              </Col>
              <Col xl={3} lg={12} md={12} sm={12} className="">
                <div className="footer-data social-li-pad">
                  <div className="d-lg-block d-none mb-4">
                    <Link
                      to="/contact#contact3"
                      className="font-bold font-18 color-303030"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div className="d-none d-sm-block d-lg-none mb-4">
                    <Link
                      to="/contact#contactnew3"
                      className="font-bold font-18 color-303030"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div className="d-block d-sm-none mb-4">
                    <Link
                      to="/contact#contactnewnew3"
                      className="font-bold font-18 color-303030"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li" className="font-16 font-regular">
                      <div className="d-flex">
                        <div className="footer-arrow-image last mr-2">
                          <Image src={footermail} className="img-fluid " />
                        </div>
                        <div className="footer-arrow-data last">
                          <FooterEmail />
                        </div>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                      as="li"
                      className="font-16 font-regular callingmsg"
                    >
                      <div className="d-flex">
                        <div className="footer-arrow-image last mr-2">
                          <Image src={footercall} className="img-fluid " />
                          <Image src={footercall} className="img-fluid " />
                        </div>
                        <div className="footer-arrow-data last">
                          <FooterMobile />
                        </div>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                  {/*  */}

                  <ListGroup
                    as="ul"
                    horizontal
                    className="social-icons align-items-center"
                  >
                    <ListGroup.Item as="li" className="font-16 font-regular">
                      <Link
                        className="nav-link p-0"
                        target="_blank"
                        to="https://www.linkedin.com/company/qlresources/"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="font-16 font-regular">
                      <Link
                        className="nav-link p-0"
                        target="_blank"
                        to="https://twitter.com/QlResources"
                      >
                        <FaTwitter />
                      </Link>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
        <div className="sub-footer">
          <Container>
            <Row className="align-items-center justify-content-between">
              <Col xl={6} lg={6} md={6} className="text-left">
                <p className="font-16 font-regular text-white mb-0">
                  © 2023{" "}
                  <Link to="/" className="text-white text-decoration-none">
                    QLResources
                  </Link>{" "}
                  All rights reserved.
                </p>
              </Col>
              <Col xl={6} lg={6} md={6} className="text-right copynewr">
                <Link
                  to="/privacystaement"
                  className="text-white font-16 font-regular nav-link"
                >
                  Privacy Statement
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )
  }
}

export default Footer
