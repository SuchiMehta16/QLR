import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import TeamScreen1 from '../TeamScreen/TeamScreen1'
class Teamsection1 extends Component {

     
    render() {
        
        return (
            <>
            <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                        <TeamScreen1/>
                    </Container>
                </section>
            </div>
            </>
        );
    }
}

export default Teamsection1;
