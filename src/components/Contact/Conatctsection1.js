import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import ContactScreen1 from '../ContactScreen/ContactScreen1'
class Contactsection1 extends Component {

     
    render() {
        
        return (
            <>
            <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                        <div className="text-white text-center">
                            <ContactScreen1/>
                        </div>
                    </Container>
                </section>
            </div>
            </>
        );
    }
}

export default Contactsection1;
