import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Container, Image, Row, Col, Button } from "react-bootstrap"
import { FaAngleRight } from "react-icons/fa"
import Slider from "react-slick"
import arrowleft from "../../images/footer-arrow.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        display: "block",
        borderRadius: "25px",
        border: "2px solid #fff",
        width: "50px",
        height: "50px",
        lineHeight: "46px",
        textAlign: "center",
      }}
      onClick={onClick}
    ></div>
  )
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        display: "block",
        borderRadius: "25px",
        border: "2px solid #fff",
        width: "50px",
        height: "50px",
        lineHeight: "46px",
        textAlign: "center",
      }}
      onClick={onClick}
    ></div>
  )
}
const settings1 = {
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWpCpt49(sort: { date: ASC }) {
          edges {
            node {
              acf {
                title2
                title3
                title4
                slider1image {
                  sourceUrl
                }
                slider2image {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Slider {...settings1} className="trusted-by-slider">
        {data &&
          data.allWpCpt49 &&
          data.allWpCpt49.edges.map((prop, i) => {
            return (
              <div className="slider-data">
                <Image
                  src={prop.node.acf.slider1image.sourceUrl}
                  className="img-fluid d-sm-inline d-none"
                />
                <Image
                  src={prop.node.acf.slider2image.sourceUrl}
                  className="img-fluid d-sm-none d-inline"
                />
                <div className="slider-inner-data">
                  <Container>
                    <Row className="just-end">
                      <Col xl={8} lg={12} md={12}>
                        <h2 className="text-white font-bold">
                          {prop.node.acf.title2}
                        </h2>
                        <h3 className="font-bold color-abf">
                          {prop.node.acf.title3}
                          <br></br>
                          {prop.node.acf.title4}
                        </h3>
                        {/* <h3 className="font-bold color-abf"></h3> */}
                        
                        {i > 0 ? (
                          <>
                            <div className="d-lg-inline d-none">
                              <Link
                                to="/contact#contact3"
                                className="button white font-16 font-semibold nav-link"
                              >
                                know more
                                <FaAngleRight className="ml-2" />
                              </Link>
                            </div>
                            <div className="d-none d-sm-block d-lg-none">
                              <Link
                                to="/contact#contactnew3"
                                className="button white font-16 font-semibold nav-link"
                              >
                                know more
                                <FaAngleRight className="ml-2" />
                              </Link>
                            </div>
                            <div className="d-block d-sm-none">
                              <Link
                                to="/contact#contactnewnew3"
                                className="button white font-16 font-semibold nav-link"
                              >
                                know more
                                <FaAngleRight className="ml-2" />
                              </Link>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            )
          })}
      </Slider>
    )}
  />
)
