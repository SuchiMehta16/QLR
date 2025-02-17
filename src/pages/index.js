import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Homesection1 from "../components/Home/Homesection1"
import Homesection2 from "../components/Home/Homesection2"
import Homesection3 from "../components/Home/Homesection3"
import Homesection4 from "../components/Home/Homesection4"
// import Homesection5 from '../components/Home/Homesection5'
// import Homesection6 from '../components/Home/Homesection6'
// import Homesection7 from '../components/Home/Homesection7'
// import Testimonialsection from '../components/Home/Testimonial-section'
import Footer from "../components/common/Footer"

class MainPage extends Component {
  render() {
    return (
      <Layout>
        <>
          <Homesection1 />
          <Homesection2 />
          <Homesection3 />
          <Homesection4 />
          {/* <Homesection5/> */}
          {/* <Homesection6/> */}
          {/* <Homesection7/> */}
          {/* <Testimonialsection/> */}
          <Footer />
        </>
      </Layout>
    )
  }
}
export default MainPage
