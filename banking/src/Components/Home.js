import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import LendersQuery from './Lenders/LendersQuery'



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

export default Home;
