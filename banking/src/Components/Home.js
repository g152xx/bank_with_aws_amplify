import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import LendersQuery from './Lenders/LendersQuery'


import { withAuthenticator } from 'aws-amplify-react'

class Home extends Component {

  render() {
    return (
      <div className="site-wrapper">
          <div className="site-wrapper-inner">
            <div className="cover-container">
              <div className="mastfoot">
                <div className="inner">
                  <div>
                    <Row className="align-items-center">
                      <Col col="12" className="mb-4 mb-xl-0 text-center mt-3">
                       <div> 
                         <LendersQuery/>
                            <div>
                                <div className="container">
                                    <h1 className="text-center text-dark">Please What Would You Like To Do?</h1>
                                    <div className="display-inline" >
                                        <a href="/" style={{marginRight:50}} class="btn btn-info btn-lg">LEND MONEY</a>
                                        <a href="/" type="button" class="btn btn-outline-info btn-lg">BORROW MONEY</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default withAuthenticator(Home);
