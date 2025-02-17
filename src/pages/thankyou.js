import React, {Component} from 'react';
import Layout from '../components/layout'
import Thankyou from '../components/Thankyou/Thankyou'
import Footer from '../components/common/Footer'

class Thanx extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Thankyou/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default Thanx