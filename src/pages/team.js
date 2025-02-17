import React, {Component} from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Teamsection1 from '../components/Team/Teamsection1'
import Teamsection2 from '../components/Team/Teamsection2'
import Footer from '../components/common/Footer'

class Team extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Teamsection1/>
                    <Teamsection2/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default Team;