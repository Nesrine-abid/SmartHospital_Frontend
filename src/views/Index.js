//admin/index (dashboard)
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import AdminHeader from "components/Headers/AdminHeader.js";
import {Link} from "react-router-dom";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <AdminHeader />
      {/* Page content */}
      <Container className="mt--8" fluid>
        <Row className="mt-5"  style={{justifyContent:"center"}}>
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">All Departments</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Link to="#">
                      <Button className="my-4" color="primary" type="button">
                        Add Department
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" style={{width:200, margin: 20}} responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Department name</th>
                    <th scope="col">Number of Doctor</th>
                    <th scope="col">Number of Radiologist</th>
                    <th scope="col">Number of analyst</th>
                    <th scope="col">Number of pharmacist</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Surgery</th>
                    <td>45</td>
                    <td>40</td>
                    <td>34</td>
                    <td>20</td>
                    <td>
                      <Link to="#">
                        <Button color="info" type="button">Edit</Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Cardiology</th>
                    <td>98</td>
                    <td>40</td>
                    <td>34</td>
                    <td>20</td>
                    <td><Button color="info" type="button">Edit</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">Dental</th>
                    <td>51</td>
                    <td>29</td>
                    <td>34</td>
                    <td>20</td>
                    <td><Button color="info" type="button">Edit</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">Gynecology</th>
                     <td>41</td>
                    <td>19</td>
                    <td>37</td>
                    <td>25</td>
                    <td><Button color="info" type="button">Edit</Button></td>
                  </tr>
                </tbody>
              </Table>
            </Card>

        </Row>
      </Container>
    </>
  );
};

export default Index;