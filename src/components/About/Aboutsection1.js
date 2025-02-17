import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import AboutScreen1 from '../AboutScreen/AboutScreen1'
class Aboutsection1 extends Component {

     
    render() {
        
        return (
            <>
            <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                        <AboutScreen1/>
                    </Container>
                </section>
            </div>
            </>
        );
    }
}

export default Aboutsection1;
