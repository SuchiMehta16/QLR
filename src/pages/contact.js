import React, {Component} from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Contactsection1 from '../components/Contact/Conatctsection1'
import Contactsection2 from '../components/Contact/Conatctsection2'
import Contactsection3 from '../components/Contact/Conatctsection3'
import Footer from '../components/common/Footer'

class Conatct extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Contactsection1/>
                    <Contactsection2/>
                    <Contactsection3/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default Conatct