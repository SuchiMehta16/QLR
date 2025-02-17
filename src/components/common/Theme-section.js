import React, { Component,useState  } from 'react';
import { Container,Row,Col,Form,InputGroup,FormControl,Image,Button } from 'react-bootstrap'
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import formname from '../../images/form-name.png'
import formcall from '../../images/form-call.png'
import formmail from '../../images/form-mail.png'
import SimpleReactValidator from 'simple-react-validator';

class Themeform extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
  
        this.state = {
         
          email: '',
          mobile: '',
          lname: '',
          fname: '',
          shown: "d-none",
            IsSubmit: false,
            success: 'd-none',
        }
      this.submitForm = this.submitForm.bind(this);
      this.email = this.email.bind(this);
      this.mobile = this.mobile.bind(this);
      this.lname = this.lname.bind(this);
      this.fname = this.fname.bind(this);
      
    }
    
    
    email(e) {
        this.setState({
            email: e.target.value
        });
    }
    mobile(e) {
        this.setState({
            mobile: e.target.value
        });
    }
    lname(e) {
        this.setState({
            lname: e.target.value
        });
    }
    fname(e) {
        this.setState({
            fname: e.target.value
        });
    }

    submitForm() {
      if (this.validator.allValid()) {
        alert('success');
        this.setState({success: "d-block"});
        this.setState({IsSubmit: true});  
        
        
      } else {
        this.validator.showMessages();
        this.forceUpdate();
      }
    }


    render() {
        
        return (
            <>
            <section className="theme-section contact-section-3">
                <Container>
                    <div className="theme-section-data">
                        <div className="title">
                            <h2 className="text-center text-white">Lorem ipsum dolor sit?</h2>
                            <p className="text-center text-white">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                        </div>
                        <div className="inner-container">
                            <Row>
                                <Col xl={6} lg={6} className="text-right text-large-center">
                                    <div className="theme-image-data">
                                        <Image src={blog1} fluid />
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} className="">
                                    <div className="theme-inner-data">
                                    <h3 className="font-22 font-regular mb-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
                                        <Form>
                                            <Row className="mt-4">
                                                <Col xl={6} lg={6} md={12}>
                                                    <Form.Group controlId="">
                                                        <InputGroup className="mb-0">
                                                            <input type="text" value={this.state.fname} onChange={this.fname} className="form-control main font-18 font-regular color-666" placeholder="First Name" /> 
                                                            <InputGroup.Append>
                                                            <InputGroup.Text id=""><Image src={formname} fluid/></InputGroup.Text>
                                                            </InputGroup.Append>
                                                        </InputGroup>
                                                        <span className="errormsg">
                                                            {this.validator.message('First Name', this.state.fname, 'required|fname')}
                                                        </span>
                                                    </Form.Group>
                                                </Col>
                                                <Col xl={6} lg={6} md={12}>
                                                    <Form.Group controlId="">
                                                        <InputGroup className="mb-0">
                                                            <input type="text" value={this.state.lname} onChange={this.lname} className="form-control main font-18 font-regular color-666" placeholder="Last Name" /> 
                                                        <InputGroup.Append>
                                                        <InputGroup.Text id=""><Image src={formname} fluid/></InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                    <span className="errormsg">
                                                        {this.validator.message('Last Name', this.state.lname, 'required|lname')}
                                                    </span>
                                                    </Form.Group>
                                                </Col>
                                                <Col xl={6} lg={6} md={12}>
                                                    <Form.Group controlId="">
                                                        <InputGroup className="mb-0">
                                                            <input type="text" value={this.state.mobile} onChange={this.mobile} className="form-control main font-18 font-regular color-666" placeholder="Mobile Number" /> 
                                                            <InputGroup.Append>
                                                            <InputGroup.Text id=""><Image src={formcall} fluid/></InputGroup.Text>
                                                            </InputGroup.Append>
                                                        </InputGroup>
                                                        <span className="errormsg">
                                                            {this.validator.message('Mobile Number', this.state.mobile, 'required|mobile')}
                                                            {this.validator.message('Mobile Number', this.state.mobile, 'numeric|min:0,num|max:11')}
                                                        </span>
                                                    </Form.Group>
                                                </Col>
                                                <Col xl={6} lg={6} md={12}>
                                                    <Form.Group controlId="">
                                                        <InputGroup className="mb-0">
                                                            <input type="text" value={this.state.email} onChange={this.email} className="form-control main font-18 font-regular color-666" placeholder="Email" />        
                                                            <InputGroup.Append>
                                                            <InputGroup.Text id=""><Image src={formmail} fluid/></InputGroup.Text>
                                                            </InputGroup.Append>
                                                        </InputGroup>
                                                        <span className="errormsg">
                                                            {this.validator.message('Email', this.state.email, 'required|email')}
                                                        </span>
                                                    </Form.Group>
                                                </Col>
                                                <Col xl={12} lg={12} md={12}>
                                                    <Form.Group controlId="">
                                                    <Form.Control as="textarea" rows="6" placeholder="Message" />
                                                    </Form.Group>
                                                </Col>
                                                <Col xl={12} lg={12} md={12} className="justify-content-start d-flex">
                                                    <Button variant="" type="button" onClick={this.submitForm} className="blue font-semibold d-flex alignn-items-center">Send
                                                    </Button>
                                                    <p className={this.state.success}>This is Customise Success message</p>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default Themeform;