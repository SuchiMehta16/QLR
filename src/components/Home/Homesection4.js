import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import HomeScreen4 from '../HomeScreen/HomeScreen4'
import HomeScreen4title from '../HomeScreen/Homescreen4title'
class HomeSection4 extends Component {

     
    render() {
        
        return (
            <>
            <section className="home-section-4">
                  <Container>
                    <HomeScreen4title/>
                    <Row className="">
                      <HomeScreen4/>
                    </Row>
                  </Container>
              </section>
            </>
        );
    }
}

export default HomeSection4;
