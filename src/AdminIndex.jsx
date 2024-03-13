import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './AdminIndex.css'
import AdminHome from './AdminHome'
import { useState } from 'react';
import AdminCategory from './AdminCategory';
import AdminProducts from './AdminProducts';
import AdminBids from './AdminBids';
import AdminMngUsers from './AdminMngUsers';
import { useNavigate } from 'react-router-dom';

function AdminIndex() {
   const[home,setHome] = useState(true)
   const[category,setCategory] = useState(false)
   const[product,setProduct] = useState(false)
   const[bid,setBid] = useState(false)
   const[user,setUser] = useState(false)
   const navigate = useNavigate();
   function homePage(){
      setHome(true)
   }
   function categoryPage(){
      setHome(false)
      setProduct(false)
      setBid(false)
      setUser(false)
      setCategory(true)
   }
   function productPage(){
      setHome(false)
      setCategory(false)
      setBid(false)
      setUser(false)
      setProduct(true)
   }
   function bidPage(){
      setHome(false)
      setCategory(false)
      setProduct(false)
      setUser(false)
      setBid(true)
   }
   function userPage(){
      setHome(false)
      setCategory(false)
      setProduct(false)
      setBid(false)
      setUser(true)
   }
   function logout(){
      window.history.back()
      setTimeout(terminate,500)
      function terminate(){
        navigate("/AdminLogin")
      }
    }
   return (
      <div>
         <>
            {['lg',].map((expand) => (
               <Navbar key={expand} expand={expand} className="bg-dark navbar-dark">
                  <Container fluid className='mx-0 mx-sm-5'>
                     <Navbar.Brand href="#"><h4 className='text-white fw-bold navh'>Online Auction System</h4></Navbar.Brand>
                     <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='border border-1' />
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
                                    Welcome Administrator
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
         <div className="container-fluid">
               <div className="row">
                  <div className="col-2 p-0" style={{backgroundColor:'rgb(52,58,64)',height:'89vh'}}>
                     <div style={{backgroundColor:'rgb(208,209,211)'}} className='w-100 py-3'>
                        <ul className='fw-bold fs-5 d-flex flex-column gap-4'>
                           <li className='text-decoration-none d-flex gap-2 li' type="button" onClick={homePage}>
                             <i class="bi bi-house-door-fill"></i>
                             <span>Home</span>
                           </li>
                           <li className='text-decoration-none d-flex gap-2' type="button" onClick={categoryPage}>
                             <i class="bi bi-card-list"></i>
                             <span>Categories</span>
                           </li>
                           <li className='text-decoration-none d-flex gap-2' type="button" onClick={productPage}>
                             <i class="bi bi-cart4"></i>
                             <span>Products</span>
                           </li>
                           <li className='text-decoration-none d-flex gap-2' type="button" onClick={bidPage}>
                             <i class="bi bi-person-vcard-fill"></i>
                             <span>Bids</span>
                           </li>
                           <li className='text-decoration-none d-flex gap-2' type="button" onClick={userPage}>
                             <i class="bi bi-people-fill"></i>
                             <span>Users</span>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-10 p-5 body">
                     {home?<AdminHome />:category?<AdminCategory />:product?<AdminProducts />:bid?<AdminBids />:user?<AdminMngUsers />:""}
                  </div>
               </div>
            </div>
      </div>
   );
}

export default AdminIndex;