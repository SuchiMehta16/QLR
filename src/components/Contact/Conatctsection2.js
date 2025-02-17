import React, { Component } from 'react';
import { Container,Row,Col,Media,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import map from '../../images/blue-map.png'
import call from '../../images/blue-call.png'
import mail from '../../images/blue-mail.png'
import iframe from '../../images/ifame.png'
import Iframe from 'react-iframe'
import ContactScreen2 from '../ContactScreen/ContactScreen2'
class Contactsection2 extends Component {

     
    render() {
        return (
            <>
            
            <section className="contact-section-2">
                <Container>
                    <ContactScreen2/>
                </Container>
            </section>

            </>
        );
    }
}

export default Contactsection2;
