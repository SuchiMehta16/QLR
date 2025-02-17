import React from 'react'
import Layout from '../components/layout'
import { Container,Row,Col } from 'react-bootstrap';
import { Link ,StaticQuery, graphql } from "gatsby";
import Footer from '../components/common/Footer'

const NotFoundPage = () => (
  <Layout>
    <section className="error-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xl={10} lg={10} md={12}>
            <h1 className="error-number color-303030">404</h1>
            <p>PAGE CAN NOT BE FOUND.</p>
            <span className="d-block color-303030">The page you are looking for does not exist.</span>
            <div className="text-center d-flex justify-content-center">
              <Link to="/" className="button blue font-16 font-semibold">BACK TO HOME</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    
     <Footer/>
  </Layout>
)

export default NotFoundPage