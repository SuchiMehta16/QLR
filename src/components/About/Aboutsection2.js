import React, { Component } from 'react';
import { Container,Row,Col,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import banner1 from '../../images/home-section-4-img-2.png'
import AboutScreen2 from '../AboutScreen/AboutScreen2'
import AboutScreen2Heading from '../AboutScreen/AboutScreen2Heading'
class Aboutsection2 extends Component {

     
    render() {
        
        return (
            <>
            <section className="about-section-2">
                <Container>
                    <div className="title">
                      <AboutScreen2Heading/>
                    </div>
                    <AboutScreen2/> 
                </Container>
            </section>
            </>
        );
    }
}

export default Aboutsection2;
