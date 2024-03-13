import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './App.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const{data} = location.state;
  // console.log("state==",data)
  function logout(){
    window.history.back()
    setTimeout(terminate,500)
    function terminate(){
      navigate("/Login")
    }
  }
   return (
      <>
        {['lg',].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-dark navbar-dark">
            <Container fluid className='mx-0 mx-sm-5'>
              <Navbar.Brand href="#"><h4 className='text-white fw-bold navh'>Online Auction System</h4></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='border border-1'/>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='bg-dark'>
                  <Nav className="justify-content-end flex-grow-1 pe-5 gap-5">
                    <Nav.Link className='text-white fw-bold'>Home</Nav.Link>
                    <Nav.Link className='text-white fw-bold'>About us</Nav.Link>
                    <Nav.Link className='text-white fw-bold'>Contact us</Nav.Link>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle fw-bold text-white" href='#' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Welcome {data.username}
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><span class="dropdown-item fw-bold" type="button" onClick={logout}><i class="bi bi-box-arrow-in-left fw-bolder"></i> Logout</span></li>
                      </ul>
                    </li>
                  </Nav>
                  {/* <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form> */}
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
}

export default HomePage