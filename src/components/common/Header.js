import React, { Component, useState } from "react"
import {
  ListGroup,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Image,
  NavDropdown,
} from "react-bootstrap"
import {
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaTimes,
  FaAngleLeft,
  FaBars,
} from "react-icons/fa"
import { Link, StaticQuery, graphql } from "gatsby"
import logo from "../../images/QLRlogo.svg"
import Mining from "../../images/Home-Mining-1.jpg"
//import HeaderSocialTwitter from '../Menu/HeaderSocialTwitter'
//import HeaderSocialLinked from '../Menu/HeaderSocialLinkedIn'
import HeaderSocialPhone from "../Menu/HeaderSocialPhone"
import HeaderSocialPhoneIcon from "../Menu/HeaderSocialPhoneIcon"
import HeaderSocialenvelope from "../Menu/HeaderSocialenvelope"
import HeaderSocialenvelopeIcon from "../Menu/HeaderSocialenvelopeIcon"
import Cookies from "universal-cookie"
import { init } from "@amplitude/analytics-browser"
import { track } from "@amplitude/analytics-browser"

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.showSubMenu = this.showSubMenu.bind(this)
    this.hideSubMenu = this.hideSubMenu.bind(this)
    this.createUUID = this.createUUID.bind(this)
  }

  createUUID() {
    var dt = new Date().getTime()
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0
        dt = Math.floor(dt / 16)
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16)
      }
    )
    return uuid
  }

  toggleMenu(menu, menuOverlay) {
    //let menu
    //let menuOverlay
    menu.classList.toggle("active")
    menuOverlay.classList.toggle("active")
  }
  showSubMenu(hasChildren, menu) {
    let subMenu
    //let menu
    subMenu = hasChildren.querySelector(".menu-subs")
    subMenu.classList.add("active")
    subMenu.style.animation = "slideLeft 0.5s ease forwards"
    const menuTitle =
      hasChildren.querySelector("i").parentNode.childNodes[0].textContent
    menu.querySelector(".menu-mobile-title").innerHTML = menuTitle
    menu.querySelector(".menu-mobile-header").classList.add("active")
  }
  hideSubMenu(menu) {
    //let menu
    var elems = document.querySelectorAll(".menu-subs")

    ;[].forEach.call(elems, function (el) {
      el.classList.remove("active")
    })

    menu.querySelector(".menu-mobile-title").innerHTML = ""
    menu.querySelector(".menu-mobile-header").classList.remove("active")
  }
  state = {
    isTop: true,
  }

  componentDidMount() {
    const cookies = new Cookies()
    var aid = cookies.get("aid")
    if (aid == undefined) {
      var code = this.createUUID()
      cookies.set("aid", code, { domain: ".qlresources.com.au", path: "/" })
    }
    var url_action = window.location.href
    init("98d739df3e97915d4ef13950a4e14c76")
    console.log(document.title)
    const anid = cookies.get("aid")
    const eventProperties = {
      pageUrl: url_action,
      anonymoudId: anid,
      pageName: document.title,
    }
    console.log(eventProperties)
    track("Page Viewed", eventProperties)

    const menu = document.querySelector(".menu")
    console.log("Menu click", menu)
    const menuSection = menu.querySelector(".menu-section")
    const menuArrow = menu.querySelector(".menu-mobile-arrow")
    const menuClosed = menu.querySelector(".menu-mobile-close")
    const menuToggle = document.querySelector(".menu-mobile-toggle")
    console.log("Menu click", menuToggle)
    const menuOverlay = document.querySelector(".overlay")
    let subMenu
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
    document.addEventListener("resize", () => {
      if (window.innerWidth > 991) {
        if (menu.classList.contains("active")) {
          this.toggleMenu(menu, menuOverlay)
        }
      }
    })

    menuSection.addEventListener("click", e => {
      if (!menu.classList.contains("active")) {
        return
      }
      if (e.target.closest(".menu-item-has-children")) {
        const hasChildren = e.target.closest(".menu-item-has-children")
        this.showSubMenu(hasChildren, menu)
      }
    })
    menuArrow.addEventListener("click", () => {
      this.hideSubMenu(menu)
    })

    menuToggle.addEventListener("click", () => {
      this.toggleMenu(menu, menuOverlay)
    })

    menuClosed.addEventListener("click", () => {
      this.toggleMenu(menu, menuOverlay)
    })

    menuOverlay.addEventListener("click", () => {
      this.toggleMenu(menu, menuOverlay)
    })
  }

  render() {
    return (
      <>
        <header className={this.state.isTop ? "header" : "sticky header"}>
          <div className="social-header">
            <Container>
              <div className="d-md-block d-none">
                <div className="d-flex justify-content-between ">
                  <div className="first-li">
                    <ListGroup as="ul" horizontal>
                      {/* <HeaderSocialLinked/> */}
                      {/* <HeaderSocialTwitter/> */}
                    </ListGroup>
                  </div>
                  <div className="second-li">
                    <ListGroup as="ul" horizontal>
                      <HeaderSocialPhoneIcon />
                      <ListGroup.Item as="li"></ListGroup.Item>
                      <HeaderSocialenvelopeIcon />
                    </ListGroup>
                  </div>
                </div>
              </div>

              <div className="d-md-none d-block">
                <div className="d-flex justify-content-end medium-justify-center">
                  <div className="first-li">
                    <ListGroup as="ul" horizontal>
                      <HeaderSocialPhone />
                      <HeaderSocialenvelope />
                      {/* <HeaderSocialLinked/>
                                <HeaderSocialTwitter/> */}
                    </ListGroup>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <div className="sub-header">
            <Container>
              <section className="wrapper">
                <div className="header-item-left">
                  <Link to={"/"} className="brand">
                    <img src={logo} />
                  </Link>
                </div>
                <div className="header-item-center">
                  <div className="overlay"></div>
                  <nav className="menu" id="menu">
                    <div className="menu-mobile-header">
                      <button type="button" className="menu-mobile-arrow">
                        <i className="ion-ios-arrow-back"></i>
                      </button>
                      <div className="menu-mobile-title"></div>
                      <button type="button" className="menu-mobile-close">
                        <i className="ion-android-close"></i>
                      </button>
                    </div>
                    <ul className="menu-section">
                      <StaticQuery
                        query={graphql`
                          query {
                            allWpMenu(
                              filter: { slug: { eq: "gatsby-header-menu" } }
                            ) {
                              edges {
                                node {
                                  slug
                                  name
                                  menuItems {
                                    nodes {
                                      label
                                      title
                                      url
                                      parentId
                                      childItems {
                                        nodes {
                                          label
                                          url
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        `}
                        render={data => {
                          return (
                            <>
                              {data &&
                                data.allWpMenu &&
                                data.allWpMenu.edges &&
                                data.allWpMenu.edges[0] &&
                                data.allWpMenu.edges[0].node &&
                                data.allWpMenu.edges[0].node.menuItems &&
                                data.allWpMenu.edges[0].node.menuItems.nodes &&
                                data.allWpMenu.edges[0].node.menuItems.nodes.map(
                                  (prop, i) => {
                                    return (
                                      <>
                                        {prop.childItems.nodes &&
                                        prop.childItems.nodes.length != 0 ? (
                                          <li className="menu-item-has-children">
                                            <a href="#" className="nav-link">
                                              {prop.label}{" "}
                                              <i className="ion ion-ios-arrow-down"></i>
                                            </a>

                                            {prop.label == "Services" ? (
                                              <>
                                                <div className="menu-subs menu-mega menu-column-4">
                                                  {prop &&
                                                    prop.childItems &&
                                                    prop.childItems.nodes &&
                                                    prop.childItems.nodes.map(
                                                      (child, i) => {
                                                        return (
                                                          <>
                                                            {child.label ==
                                                            "Mining Engineering" ? (
                                                              <div class="list-item">
                                                                <h4 class="title">
                                                                  <Link
                                                                    className="nav-link"
                                                                    to={
                                                                      child.url
                                                                    }
                                                                  >
                                                                    Mine
                                                                    Engineering
                                                                  </Link>
                                                                </h4>
                                                                <ul>
                                                                  <li>
                                                                    <Link
                                                                      className="element nav-link"
                                                                      to={
                                                                        child.url +
                                                                        "#stp"
                                                                      }
                                                                    >
                                                                      Short Term
                                                                      Planning
                                                                    </Link>
                                                                  </li>
                                                                  <li>
                                                                    <Link
                                                                      className="element nav-link"
                                                                      to={
                                                                        child.url +
                                                                        "#mlp"
                                                                      }
                                                                    >
                                                                      Medium and
                                                                      Long-Term
                                                                      Planning
                                                                    </Link>
                                                                  </li>
                                                                  <li>
                                                                    <Link
                                                                      className="element nav-link"
                                                                      to={
                                                                        child.url +
                                                                        "#mp"
                                                                      }
                                                                    >
                                                                      Management
                                                                      Plans
                                                                    </Link>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            ) : (
                                                              ""
                                                            )}
                                                            {child.label ==
                                                            "Digital Transformation" ? (
                                                              <div className="list-item">
                                                                <h4 className="title">
                                                                  <Link
                                                                    className="nav-link"
                                                                    to={
                                                                      child.url
                                                                    }
                                                                  >
                                                                    Digital
                                                                    Transformation
                                                                  </Link>
                                                                </h4>
                                                                <ul>
                                                                  <li>
                                                                    <Link
                                                                      className="element nav-link"
                                                                      to={
                                                                        child.url +
                                                                        "#col"
                                                                      }
                                                                    >
                                                                      Collaborating
                                                                      Mine
                                                                      Planning,
                                                                      Asset
                                                                      Management,
                                                                      Mine
                                                                      Monitoring
                                                                      and
                                                                      Dispatch,
                                                                      SCADA
                                                                      Systems
                                                                      Data
                                                                    </Link>
                                                                  </li>
                                                                  <li>
                                                                    <Link
                                                                      className="element nav-link"
                                                                      to={
                                                                        child.url +
                                                                        "#gis"
                                                                      }
                                                                    >
                                                                      GIS: Data
                                                                      Visualisation
                                                                    </Link>
                                                                  </li>
                                                                  <li>
                                                                    <Link
                                                                      className="element nav-link"
                                                                      to={
                                                                        child.url +
                                                                        "#pap"
                                                                      }
                                                                    >
                                                                      Paperless
                                                                      Inspections
                                                                    </Link>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            ) : (
                                                              ""
                                                            )}
                                                            {child.label ==
                                                            "Geology and Resources" ? (
                                                              <div class="list-item">
                                                                <h4 class="title">
                                                                  <Link
                                                                    className="nav-link"
                                                                    to={
                                                                      child.url
                                                                    }
                                                                  >
                                                                    Geology And
                                                                    Resources
                                                                  </Link>
                                                                </h4>
                                                                <ul>
                                                                  <li>
                                                                    <Link
                                                                      className="element nav-link"
                                                                      to={
                                                                        child.url +
                                                                        "#me"
                                                                      }
                                                                    >
                                                                      Mineral
                                                                      Exploration
                                                                    </Link>
                                                                  </li>
                                                                  <li>
                                                                    <Link
                                                                      className="element nav-link"
                                                                      to={
                                                                        child.url +
                                                                        "#dm"
                                                                      }
                                                                    >
                                                                      Data
                                                                      Management
                                                                      (Exploration
                                                                      & Mining)
                                                                    </Link>
                                                                  </li>
                                                                  <li>
                                                                    <Link
                                                                      className="element nav-link"
                                                                      to={
                                                                        child.url +
                                                                        "#msa"
                                                                      }
                                                                    >
                                                                      Mineral
                                                                      Statistical
                                                                      Analysis
                                                                    </Link>
                                                                  </li>
                                                                  <li>
                                                                    <Link
                                                                      className="element nav-link"
                                                                      to={
                                                                        child.url +
                                                                        "#bm"
                                                                      }
                                                                    >
                                                                      Block
                                                                      Modelling
                                                                      &
                                                                      Estimation
                                                                    </Link>
                                                                  </li>
                                                                  <li>
                                                                    <Link
                                                                      className="element nav-link"
                                                                      to={
                                                                        child.url +
                                                                        "#psm"
                                                                      }
                                                                    >
                                                                      Pit
                                                                      Structural
                                                                      Mapping
                                                                    </Link>
                                                                  </li>
                                                                  <li>
                                                                    <Link
                                                                      className="element nav-link"
                                                                      to={
                                                                        child.url +
                                                                        "#gra"
                                                                      }
                                                                    >
                                                                      Geological
                                                                      Risk
                                                                      Assessment
                                                                    </Link>
                                                                  </li>
                                                                  <li>
                                                                    <Link
                                                                      className="element nav-link"
                                                                      to={
                                                                        child.url +
                                                                        "#jorc"
                                                                      }
                                                                    >
                                                                      JORC Code
                                                                      Compliance
                                                                      Reporting
                                                                    </Link>
                                                                  </li>
                                                                  <li>
                                                                    <Link
                                                                      className="element nav-link"
                                                                      to={
                                                                        child.url +
                                                                        "#rr"
                                                                      }
                                                                    >
                                                                      Resource
                                                                      Recovery
                                                                    </Link>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            ) : (
                                                              ""
                                                            )}
                                                            {child.label ==
                                                            "Mining Equipment Supply" ? (
                                                              <div class="list-item">
                                                                <h4 class="title">
                                                                  <Link
                                                                    className="nav-link"
                                                                    to={
                                                                      child.url
                                                                    }
                                                                  >
                                                                    Mining
                                                                    Equipment
                                                                    Supply
                                                                  </Link>
                                                                </h4>
                                                              </div>
                                                            ) : (
                                                              ""
                                                            )}
                                                          </>
                                                        )
                                                      }
                                                    )}
                                                </div>
                                              </>
                                            ) : (
                                              <div className="menu-subs menu-column-1">
                                                <ul>
                                                  {prop &&
                                                    prop.childItems &&
                                                    prop.childItems.nodes &&
                                                    prop.childItems.nodes.map(
                                                      (child, i) => {
                                                        return (
                                                          <>
                                                            {child.url.indexOf(
                                                              "service"
                                                            ) != -1 ? (
                                                              <li>
                                                                <Link
                                                                  to={child.url}
                                                                  className="dropdown-item nav-link"
                                                                  role="button"
                                                                >
                                                                  {child.label}
                                                                </Link>
                                                              </li>
                                                            ) : (
                                                              <>
                                                                {child.label ==
                                                                "Blog" ? (
                                                                  <li>
                                                                    <Link
                                                                      to={
                                                                        "/" +
                                                                        child.url
                                                                          .toLowerCase()
                                                                          .replace(
                                                                            "http://",
                                                                            ""
                                                                          )
                                                                      }
                                                                      className="dropdown-item nav-link"
                                                                      role="button"
                                                                    >
                                                                      {
                                                                        child.label
                                                                      }
                                                                    </Link>
                                                                  </li>
                                                                ) : (
                                                                  <li>
                                                                    <Link
                                                                      to={
                                                                        child.url
                                                                      }
                                                                      className="dropdown-item nav-link"
                                                                      role="button"
                                                                    >
                                                                      {
                                                                        child.label
                                                                      }
                                                                    </Link>
                                                                  </li>
                                                                )}
                                                              </>
                                                            )}
                                                          </>
                                                        )
                                                      }
                                                    )}
                                                </ul>
                                              </div>
                                            )}
                                          </li>
                                        ) : (
                                          <>
                                            {prop.parentId == null ? (
                                              <>
                                                {prop.url.indexOf("http://") ==
                                                0 ? (
                                                  <li className="menu-item">
                                                    <Link
                                                      className="nav-link"
                                                      to={
                                                        "/" +
                                                        prop.url
                                                          .toLowerCase()
                                                          .replace(
                                                            "http://",
                                                            ""
                                                          )
                                                      }
                                                    >
                                                      {prop.label}
                                                    </Link>
                                                  </li>
                                                ) : (
                                                  <>
                                                    <li className="menu-item">
                                                      <Link
                                                        className="nav-link"
                                                        to={prop.url}
                                                      >
                                                        {prop.label}
                                                      </Link>
                                                    </li>
                                                  </>
                                                )}
                                              </>
                                            ) : (
                                              <>
                                                {/* <li className="menu-item">
                                                  <Link
                                                    to={
                                                      "/" +
                                                      prop.url
                                                        .toLowerCase()
                                                        .replace("http://", "")
                                                    }
                                                  >
                                                    {prop.label}
                                                  </Link>
                                                </li> */}
                                              </>
                                            )}
                                          </>
                                        )}
                                      </>
                                    )
                                  }
                                )}
                            </>
                          )
                        }}
                      />
                    </ul>
                  </nav>
                  <button type="button" className="menu-mobile-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </section>
            </Container>
          </div>
        </header>
      </>
    )
  }
}

export default Header
