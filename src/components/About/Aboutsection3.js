import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import AboutScreen3 from '../AboutScreen/AboutScreen3'
import AboutScreen3Heading from '../AboutScreen/AboutScreen3Heading'
class Aboutsection3 extends Component {

     
    render() {
        
        return (
            <>
            <section className="service-section-4 about-section-3">
                  <Container>
                    <div className="title">
                      <AboutScreen3Heading/>
                    </div>
                    
                      <AboutScreen3/>
                    
                  </Container>
              </section>
            </>
        );
    }
}

export default Aboutsection3;
