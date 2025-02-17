import React, { Component } from "react"

import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Image,
  Button,
} from "react-bootstrap"
import { Link, StaticQuery, graphql } from "gatsby"
import { FaAngleRight } from "react-icons/fa"
import formname from "../../images/form-name.png"
import formcall from "../../images/form-call.png"
import formmail from "../../images/form-mail.png"
import SimpleReactValidator from "simple-react-validator"
// import ContactScreenTitle3 from "../ContactScreen/ContactScreenTitle3"
// import { ContactScreenTitle3 } from "../ContactScreen/ContactScreenTitle3"
import ContactScreenTitle3 from "../ContactScreen/ContactScreenTitle3"

import axios from "axios"
import Cookies from "universal-cookie"
import { init } from "@amplitude/analytics-browser"
import { track } from "@amplitude/analytics-browser"
import { Identify, identify } from "@amplitude/analytics-browser"

class Contactsection3 extends Component {
  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator()

    this.state = {
      email: "",
      mobile: "",
      lname: "",
      fname: "",
      message: "",
      shown: "d-none",
      IsSubmit: false,
      success: "d-none",
    }
    this.submitForm = this.submitForm.bind(this)
    this.email = this.email.bind(this)
    this.mobile = this.mobile.bind(this)
    this.lname = this.lname.bind(this)
    this.setfname = this.setfname.bind(this)
    this.message = this.message.bind(this)
  }

  email(e) {
    this.setState({
      email: e.target.value,
    })
  }
  mobile(e) {
    this.setState({
      mobile: e.target.value,
    })
  }
  lname(e) {
    this.setState({
      lname: e.target.value,
    })
  }
  setfname(e) {
    this.setState({
      fname: e.target.value,
    })
  }
  message(e) {
    this.setState({
      message: e.target.value,
    })
  }
  submitForm(e) {
    if (this.validator.allValid()) {
      this.setState({ success: "d-block" })
      setTimeout(
        function () {
          this.setState({ success: "d-none" })
        }.bind(this),
        2000
      )
      this.setState({ IsSubmit: true })
      init("98d739df3e97915d4ef13950a4e14c76")
      const eventProperties = {
        firstName: this.state.fname,
        lastName: this.state.lname,
        email: this.state.email,
        mobileNumber: this.state.mobile,
        message: this.state.message,
      }
      console.log(eventProperties)
      track("Contact Us Form Filled", eventProperties)

      window.location = "/thankyou"
      //post code
      // axios.post('https://script.google.com/macros/s/AKfycbwvxi4nTkKYAlVfy0kYfqiWRxbw7pI9OCOD_otxZBVjPwTvTtb_fF0O9g/exec', {
      //     fname: 'Fred',
      //     lname: 'Flintstone',
      //              mobile: 'Flintstone',
      //                       email: 'Flintstone',
      //                                message: 'Flintstone'

      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    } else {
      e.preventDefault()
      this.setState({ success: "d-none" })
      this.validator.showMessages()
      this.forceUpdate()
    }
  }

  render() {
    return (
      <>
        <section className="contact-section-3">
          <Container>
            <div className="title">
              <ContactScreenTitle3 />
            </div>
            <Form
              className="gform"
              method="POST"
              action="https://script.google.com/a/qlresources.com.au/macros/s/AKfycbze4PhRYXlNHa-1yK4axNJarLrvp78ywvTdiDDF2g/exec"
            >
              <Row className="mt-4">
                <Col xl={6} lg={6} md={12}>
                  <div className="form-group">
                    <InputGroup className="mb-0">
                      <input
                        type="text"
                        autoComplete="off"
                        value={this.state.fname}
                        onChange={this.setfname}
                        name="firstName"
                        className="form-control main font-18 font-regular color-666"
                        placeholder="First Name"
                      />
                      {/* <InputGroup.Append> */}
                      <InputGroup.Text id="">
                        <Image src={formname} fluid />
                      </InputGroup.Text>
                      {/* </InputGroup.Append> */}
                    </InputGroup>
                    <span className="errormsg">
                      {this.validator.message(
                        "First Name",
                        this.state.fname,
                        "required|fname"
                      )}
                    </span>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={12}>
                  <div className="form-group">
                    <InputGroup className="mb-0">
                      <input
                        type="text"
                        autoComplete="off"
                        value={this.state.lname}
                        onChange={this.lname}
                        name="lastName"
                        className="form-control main font-18 font-regular color-666"
                        placeholder="Last Name"
                      />
                      {/* <InputGroup.Append> */}
                      <InputGroup.Text id="">
                        <Image src={formname} fluid />
                      </InputGroup.Text>
                      {/* </InputGroup.Append> */}
                    </InputGroup>
                    <span className="errormsg">
                      {this.validator.message(
                        "Last Name",
                        this.state.lname,
                        "required|lname"
                      )}
                    </span>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={12}>
                  <div className="form-group">
                    <InputGroup className="mb-0">
                      <input
                        type="text"
                        autoComplete="off"
                        value={this.state.mobile}
                        onChange={this.mobile}
                        name="mobile"
                        className="form-control main font-18 font-regular color-666"
                        placeholder="Mobile Number"
                      />
                      {/* <InputGroup.Append> */}
                      <InputGroup.Text id="">
                        <Image src={formcall} fluid />
                      </InputGroup.Text>
                      {/* </InputGroup.Append> */}
                    </InputGroup>
                    <span className="errormsg">
                      {this.validator.message(
                        "Mobile Number",
                        this.state.mobile,
                        "required|mobile"
                      )}
                      {this.validator.message(
                        "Mobile Number",
                        this.state.mobile,
                        "numeric|min:7|max:15"
                      )}
                    </span>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={12}>
                  <div className="form-group">
                    <InputGroup className="mb-0">
                      <input
                        type="text"
                        autoComplete="off"
                        value={this.state.email}
                        onChange={this.email}
                        name="email"
                        className="form-control main font-18 font-regular color-666"
                        placeholder="Email"
                      />
                      {/* <InputGroup.Append> */}
                      <InputGroup.Text id="">
                        <Image src={formmail} fluid />
                      </InputGroup.Text>
                      {/* </InputGroup.Append> */}
                    </InputGroup>
                    <span className="errormsg">
                      {this.validator.message(
                        "Email",
                        this.state.email,
                        "required|email"
                      )}
                    </span>
                  </div>
                </Col>
                <Col xl={12} lg={12} md={12}>
                  <div className="form-group">
                    <Form.Control
                      as="textarea"
                      name="message"
                      className="font-18 font-regular color-666"
                      rows="4"
                      placeholder="Message"
                      value={this.state.message}
                      onChange={this.message}
                    />
                    <span className="errormsg">
                      {this.validator.message(
                        "Message",
                        this.state.message,
                        "required|message"
                      )}
                    </span>
                  </div>
                </Col>
                <Col
                  xl={12}
                  lg={12}
                  md={12}
                  className="justify-content-center d-flex"
                >
                  <Button
                    variant=""
                    type="button"
                    onClick={this.submitForm}
                    className="blue font-semibold d-flex alignn-items-center"
                  >
                    Send <FaAngleRight className="ml-1" />
                  </Button>
                </Col>
                <Col xl={12} className="justify-content-center d-flex">
                  <div className={this.state.success}>
                    <p className="succes-block">Thankyou</p>
                  </div>
                </Col>
              </Row>
            </Form>
          </Container>
        </section>
      </>
    )
  }
}

export default Contactsection3
