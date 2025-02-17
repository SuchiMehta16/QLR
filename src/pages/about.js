import React, {Component} from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Aboutsection1 from '../components/About/Aboutsection1'
import Aboutsection2 from '../components/About/Aboutsection2'
import Aboutsection3 from '../components/About/Aboutsection3'
import Aboutsection4 from '../components/About/Aboutsection4'
import Footer from '../components/common/Footer'

class About extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Aboutsection1/>
                    <Aboutsection2/>
                    <Aboutsection3/>
                    <Aboutsection4/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default About