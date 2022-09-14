import React from 'react'
import '../cssfolder/megamenu.css'
import { Row,Col,Dropdown,Container} from 'react-bootstrap';
function Megamenu() {
  return (
    <Container className="eventsNav pt-0 mt-0">
                        <Row>
                            <Col xs="12" md="6" className="text-left">
                                <Dropdown.Header>
                                    Undergraduate
                                </Dropdown.Header>
                                <Dropdown.Item>
                                    <a className="nav-link" role="button">
                                       Business Administration
                                    </a>
                                </Dropdown.Item>
                                <Dropdown.Item>

                                    <a className="nav-link" role="button">
                                        School of Law
                                    </a>

                                </Dropdown.Item>
                                <Dropdown.Item>

                                    <a className="nav-link" role="button">
                                        Engineering
                                    </a>

                                </Dropdown.Item>
                                <Dropdown.Item>

                                    <a className="nav-link" role="button">
                                    
                                    </a>

                                </Dropdown.Item>

                                <Dropdown.Divider />
                                
                                <Dropdown.Divider className="d-md-none" />
                            </Col>

                            <Col xs="12" md="6" className="text-left">
                                <Dropdown.Header>

                                    Rentals
                                </Dropdown.Header>
                                <Dropdown.Item>

                                    <a className="nav-link" role="button">
                                        Fireside Room
                                    </a>

                                </Dropdown.Item>
                                <Dropdown.Item>

                                    <a className="nav-link" role="button">
                                        Roasting Room
                                    </a>

                                </Dropdown.Item>
                                <Dropdown.Divider />
                               
                            </Col>
                            
                        </Row>
                    </Container>
  )
}

export default Megamenu
