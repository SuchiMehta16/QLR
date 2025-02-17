import React, {Component} from 'react';
import Layout from '../components/layout'
import Privacysection1 from '../components/Privacy/Privacysection1'
import Privacysection2 from '../components/Privacy/Privacysection2'
import Footer from '../components/common/Footer'

class Privacy extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Privacysection1/>
                    <Privacysection2/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default Privacy