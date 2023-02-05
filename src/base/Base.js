import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



const Base = ({title,children}) => {
  const history = useNavigate();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>ADMIN PAGE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Button onClick={()=>history("/dashboard")}>Dash Board</Button></Nav.Link>
              <Nav.Link ><Button onClick={()=>history("/t")}>Tables</Button></Nav.Link>
              <NavDropdown title="Dropdown">
                <NavDropdown.Item ><Button variant="light"onClick={()=>history("/b")}>Button</Button></NavDropdown.Item>
                <NavDropdown.Item ><Button variant="light">Another action</Button></NavDropdown.Item>
                <NavDropdown.Item ><Button variant="light">Something</Button></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item ><Button variant="light">Separated link</Button></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        <main className='container-fluid'>
        <header>
            <h2 className='h3 mb-4 text-gray-800'>
            {title}</h2>
        </header>
        
        <div className='segment'>
        {children}
        </div>
        </main>
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2021</span>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Base