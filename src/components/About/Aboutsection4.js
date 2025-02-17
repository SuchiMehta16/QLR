import React, { Component } from 'react';
import { Container,Image,Row,Col,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaLinkedinIn,FaEnvelope } from 'react-icons/fa'
import TeamScreen2 from '../TeamScreen/TeamScreen2'
import TeamScreen2Heading from '../TeamScreen/TeamScreen2Heading'
class Aboutsection3 extends Component {

     
    render() {
        
        return (
            <>
            <section className="about-section-4">
                  <Container>
                    <TeamScreen2Heading/>
                    <Row>
                        <TeamScreen2/>
                    </Row>
                  </Container>
              </section>
            </>
        );
    }
}

export default Aboutsection3;
