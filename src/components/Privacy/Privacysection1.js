import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import PrivacyScreen1 from '../PrivacyScreen/PrivacyScreen1'
class Privacysection1 extends Component {

     
    render() {
        
        return (
            <>
            <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                        <PrivacyScreen1/>
                    </Container>
                </section>
            </div>
            </>
        );
    }
}

export default Privacysection1;
