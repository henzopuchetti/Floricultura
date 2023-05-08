import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Group_1-removebg-preview.png'
import "../home.css"


function BasicExample() {
  return (
    <Navbar bg="danger" expand="lg">
              
      <Container>
        <Navbar.Brand href="./Navbar.jsx">Floricultura do Amor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <img className="logo" src={logo}  />
    </Navbar>
  );
}

export default BasicExample;