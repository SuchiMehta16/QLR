import React, { Component } from 'react';
import { Container,Row,Col,Media,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import card1 from '../../images/home-section-4-img-2.png'
import arrowleft from '../../images/footer-arrow.png'
import call from '../../images/blue-call.png'
import mail from '../../images/blue-mail.png'
import PrivacyScreen2 from '../PrivacyScreen/PrivacyScreen2'
class Privacysection2 extends Component {

     
    render() {
        return (
            <>
            
            <section className="privacy-section-2">
                <Container>
                    <PrivacyScreen2/>
                </Container>
            </section>

            </>
        );
    }
}

export default Privacysection2;
