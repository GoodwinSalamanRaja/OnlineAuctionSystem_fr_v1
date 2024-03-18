import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './App.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
import AllProducts from './AllProducts';
import Appliances from './Appliances';
import Computers from './Computers';
import Laptops from './Laptops';
import MobilePhones from './MobilePhones';
import Televisions from './Televisions';
import Button from 'react-bootstrap/esm/Button';

function HomePage() {
  const [productData, setProductData] = useState([]);
  const [allProductPage, setAllProductPage] = useState(true)
  const [appliancesPage, setAppliancesPage] = useState(false)
  const [computersPage, setComputersPage] = useState(false)
  const [laptopsPage, setLaptopsPage] = useState(false)
  const [mobilePhonesPage, setMobilePhonesPage] = useState(false)
  const [televisionsPage, setTelevisionsPage] = useState(false)
  const [bid, setBid] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const data = location.state
  console.log("state==", data.username)
  function logout() {
    window.history.back()
    setTimeout(terminate, 500)
    function terminate() {
      navigate("/Login")
    }
  }
  function all() {
    setAppliancesPage(false)
    setComputersPage(false)
    setLaptopsPage(false)
    setMobilePhonesPage(false)
    setTelevisionsPage(false)
    setAllProductPage(true)
  }
  function appliances() {
    setAllProductPage(false)
    setComputersPage(false)
    setLaptopsPage(false)
    setMobilePhonesPage(false)
    setTelevisionsPage(false)
    setAppliancesPage(true)
  }
  function computers() {
    setAllProductPage(false)
    setAppliancesPage(false)
    setLaptopsPage(false)
    setMobilePhonesPage(false)
    setTelevisionsPage(false)
    setComputersPage(true)
  }
  function laptops() {
    setAllProductPage(false)
    setAppliancesPage(false)
    setComputersPage(false)
    setMobilePhonesPage(false)
    setTelevisionsPage(false)
    setLaptopsPage(true)
  }
  function mobilePhones() {
    setAllProductPage(false)
    setAppliancesPage(false)
    setComputersPage(false)
    setLaptopsPage(false)
    setTelevisionsPage(false)
    setMobilePhonesPage(true)
  }
  function televisions() {
    setAllProductPage(false)
    setAppliancesPage(false)
    setComputersPage(false)
    setLaptopsPage(false)
    setMobilePhonesPage(false)
    setTelevisionsPage(true)
  }
  useEffect(() => {
    axios.get("http://localhost:8080/product/getAll")
      .then((response) => {
        // console.log(response)
        console.log("response data:", response.data)
        setProductData(response.data)
        console.log("=====", productData)
      })
  }, [])
  return (
    <>
      {['lg',].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-dark navbar-dark sticky-top">
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
                  Online Auction System
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='bg-dark'>
                <Nav className="justify-content-end flex-grow-1 pe-5 gap-5">
                  <Nav.Link className='text-white fw-bold'>Home</Nav.Link>
                  <Nav.Link className='text-white fw-bold'>About us</Nav.Link>
                  <Nav.Link className='text-white fw-bold'>Contact us</Nav.Link>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle fw-bold text-white" href='#' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Welcome {data && data.username !== null ? data.username : ""}
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
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-3">
            <div class="card" style={{ width: '18rem', position: 'fixed', top: '11%' }}>
              <h3 className="card-header p-3" style={{ backgroundColor: 'rgb(247,247,247)' }}>Categories</h3>
              <div class="card-body p-4">
                <ul class="list-group list-group-flush">
                  <li class={`list-group-item border border-1 p-3 btn-outline-primary fs-5 fw-500 ${allProductPage ? 'bg-primary' : ''}`} style={{ color: allProductPage ? 'white' : '' }} type="button" onClick={all}>All</li>
                  <li class={`list-group-item border border-1 p-3 btn-outline-primary fs-5 fw-500 ${appliancesPage ? 'bg-primary' : ''}`} style={{ color: appliancesPage ? 'white' : '' }} type="button" onClick={appliances}>Appliances</li>
                  <li class={`list-group-item border border-1 p-3 btn-outline-primary fs-5 fw-500 ${computersPage ? 'bg-primary' : ''}`} style={{ color: computersPage ? 'white' : '' }} type="button" onClick={computers}>Desktop Computers</li>
                  <li class={`list-group-item border border-1 p-3 btn-outline-primary fs-5 fw-500 ${laptopsPage ? 'bg-primary' : ''}`} style={{ color: laptopsPage ? 'white' : '' }} type="button" onClick={laptops}>Laptops</li>
                  <li class={`list-group-item border border-1 p-3 btn-outline-primary fs-5 fw-500 ${mobilePhonesPage ? 'bg-primary' : ''}`} style={{ color: mobilePhonesPage ? 'white' : '' }} type="button" onClick={mobilePhones}>MobilePhones</li>
                  <li class={`list-group-item border border-1 p-3 btn-outline-primary fs-5 fw-500 ${televisionsPage ? 'bg-primary' : ''}`} style={{ color: televisionsPage ? 'white' : '' }} type="button" onClick={televisions}>Televisions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            {allProductPage ? (
              <div className="py-5">
                <div className="row gap-5 justify-content-center">
                  {Array.isArray(productData) && productData.map((datas) => (
                    <div class="col-5 card shadow" key={datas.id}>
                      <div className="card-header">
                        <img src={"http://localhost:8080/uploads/" + datas.image} class="card-img-top" width="100%" height="400px" alt="..." />
                      </div>
                      <div class="card-body">
                        <div class="card-text d-flex gap-1"><p className='text-nowrap'>Name :</p><span className='fw-bold'>{datas.name}</span></div>
                        <div class="card-text d-flex gap-1"><p className='text-nowrap'>Category :</p><span className='fw-bold'>{datas.category}</span></div>
                        <div class="card-text d-flex gap-1"><p className='text-nowrap fw-bold'>Description :</p><span className='fst-italic'>{datas.description}</span></div>
                        <>
                          <div className="text-center mt-3">
                            <Button className='p-2 w-25' variant="primary" onClick={handleShow}>View</Button>
                            {/* <Button variant="primary" onClick={toggleShow} className="me-2">{name}</Button> */}
                          </div>
                          <Offcanvas show={show} onHide={handleClose} backdrop={false} scroll={true} placement='end'>
                            <Offcanvas.Header closeButton>
                              <Offcanvas.Title>View Product</Offcanvas.Title>
                            </Offcanvas.Header>
                            <hr className='m-0'></hr>
                            <Offcanvas.Body>
                              <div>
                                <img src={"http://localhost:8080/uploads/" + datas.image} width="100%" />
                                <div class="d-flex gap-1 mt-4"><p className='text-nowrap'>Name :</p><span className='fw-bold'>{datas.name}</span></div>
                                <div class="d-flex gap-1 mt-3"><p className='text-nowrap'>Category :</p><span className='fw-bold'>{datas.category}</span></div>
                                <div class="d-flex gap-1"><p className='text-nowrap'>Regular Price :</p><span className='fw-bold'>{datas.regprice}</span></div>
                                <div class="d-flex gap-1"><p className='text-nowrap'>Starting Amount :</p><span className='fw-bold'>{datas.bidprice}</span></div>
                                <div class="d-flex gap-1"><p className='text-nowrap'>Until :</p><span className='fw-bold'>{datas.biddate}</span></div>
                                <div class="d-flex gap-1"><p className='text-nowrap fw-bold'>Description :</p><span className='fst-italic'>{datas.description}</span></div>
                                <div className="text-center mt-4">
                                  {/* <Link className='btn btn-primary p-2 w-25' to="/Login">Bid</Link> */}
                                  <Button variant="primary" className='w-25 p-2' onClick={() => setBid(true)}>Bid</Button>
                                  {bid ? (
                                    <div className='text-center px-4'>
                                      <input type="number" placeholder="Enter your bid amount" className="form-control form-control-lg mt-4 border-primary" aria-label=".form-control-lg example" />
                                      <div className='d-flex gap-5 mt-4 justify-content-center'>
                                        <Button variant="success" className='p-2 px-4'>Submit</Button>
                                        <Button variant="danger" className='p-2 px-4' onClick={() => setBid(false)}>Cancel</Button>
                                      </div>
                                    </div>
                                  ) : ""
                                  }
                                </div>
                              </div>
                            </Offcanvas.Body>
                          </Offcanvas>
                        </>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : appliancesPage ? <Appliances /> : computersPage ? <Computers /> : laptopsPage ? <Laptops /> : mobilePhonesPage ? <MobilePhones /> : televisionsPage ? <Televisions /> : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage