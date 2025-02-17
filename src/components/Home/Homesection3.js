import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import HsImage1 from '../HomeScreen/HsImage1'
import HomeScreen3Title from '../HomeScreen/HomeScreen3Title'
class HomeSection3 extends Component {

     
    render() {
        
        return (
            <>
            
            <section className="home-section-3">
                <Container>
                 <HomeScreen3Title/>
                  <HsImage1/>
                </Container>
              </section>

            </>
        );
    }
}

export default HomeSection3;
