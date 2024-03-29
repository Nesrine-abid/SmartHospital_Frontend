import {Link} from "react-router-dom";
// reactstrap components
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";

const AdminNavbar = () => {
    return (
        <>
            <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
                <Container className="px-4">
                    <NavbarBrand className="nav-link-icon" to="/auth/home" tag={Link}>
                        <span className="nav-link-inner--text">Smart Hospital</span>
                    </NavbarBrand>
                    <button className="navbar-toggler" id="navbar-collapse-main">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link-icon" to="/auth/login" tag={Link}>
                                    <span className="nav-link-inner--text">Admin</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link-icon" to="/auth/registerEmployee" tag={Link}>
                                    <span className="nav-link-inner--text">Employee</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link-icon" to="/auth/registerPatient" tag={Link}>
                                    <span className="nav-link-inner--text">Patient</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link-icon" to="/auth/login" tag={Link}>
                                    <i className="ni ni-single-02"/>
                                    <span className="nav-link-inner--text">Log In</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </UncontrolledCollapse>
                </Container>
            </Navbar>
        </>
    );
};

export default AdminNavbar;