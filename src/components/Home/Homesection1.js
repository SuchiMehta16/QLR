import React, { Component } from "react"
import {
  Container,
  Image,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
} from "react-bootstrap"
import { Link, StaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HomeScreen1 from "../HomeScreen/HomeScreen1"

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
class HomeSection1 extends Component {
  render() {
    const settings1 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
    return (
      <>
        <section className="home-section-1 main-padding-header">
          {/* <Slider {...settings1}> */}
          <HomeScreen1 />
          {/* </Slider> */}
        </section>
      </>
    )
  }
}

export default HomeSection1
