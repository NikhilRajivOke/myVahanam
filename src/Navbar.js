import React,{useState} from 'react';
//import {Link} from 'react-router-dom';
import logo from './assets/vahan-logo.png';
import {Button}  from 'reactstrap';
import {Navbar,Collapse,NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText} from 'reactstrap';
const Navibar = () =>{
        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => setIsOpen(!isOpen);
      
    return(
        <div>
            <Navbar className="nav-bg" light expand="md">
        <NavbarBrand href="/">
            <img  src = {logo} className="logo" alt="Vahan Logo"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="nav-options">
                Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/" className="nav-options">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="nav-options">Contact us</NavLink>
            </NavItem>
          </Nav>
          <NavbarText><Button className="book-btn">Book Now</Button></NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
}
export default Navibar