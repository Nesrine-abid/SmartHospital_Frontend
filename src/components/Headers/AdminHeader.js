// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const AdminHeader = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row className={"align-items-center"} style={{padding: 15,gridGap: 20, justifyContent:"center"}}>
              {/* Doctor */}
              <Col lg="3" md="8">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                          Total Doctor
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0"> 10 </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted">
                      <span className="text-danger mr-2">3</span>
                      <span className="text-nowrap">Approval Required</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              {/* Radiologist */}
              <Col lg="3" md="8">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                          Total Radiologist
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">4</span>
                      </div>
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <i className="fas fa-users" />
                      </div>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text">
                      <span className="text-danger mr-2">3</span>
                      <span className="text-nowrap">Approval Required</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              {/* analyst */}
                    <Col lg="3" md="8">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                          Total analyst
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">5</span>
                      </div>
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <i className="fas fa-users" />
                      </div>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text">
                      <span className="text-danger mr-2">2</span>
                      <span className="text-nowrap">Approval Required</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row style={{padding: 15,gridGap: 20, justifyContent:"center"}}>
              {/* pharmacist */}
              <Col lg="3" md="8">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                          Total pharmacist
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">6</span>
                      </div>
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <i className="fas fa-users" />
                      </div>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text">
                      <span className="text-danger mr-2">2</span>
                      <span className="text-nowrap">Approval Required</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              {/* patient */}
              <Col lg="3" md="8">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                          Total patient
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">60</span>
                      </div>
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <i className="fas fa-users" />
                      </div>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text">
                      <span className="text-danger mr-2"></span>
                      <span className="text-nowrap"></span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              {/* ApproveEmployee */}
              <Col lg="3" md="8">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                          Total Department
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">6</span>
                      </div>
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <i className="fas fa-users" />
                      </div>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text">
                      <span className="text-danger mr-2"></span>
                      <span className="text-nowrap"></span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AdminHeader;
