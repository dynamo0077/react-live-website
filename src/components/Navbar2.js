import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  NavItem,
  NavLink
} from 'reactstrap';

const Navbar2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand style={{marginLeft: '200px'}} href="/">Payless</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink style={{marginLeft: '100px'}} href="/components/">Category</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{marginLeft: '50px'}} href="https://github.com/reactstrap/reactstrap">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{marginLeft: '50px'}} href="https://github.com/reactstrap/reactstrap">About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{marginLeft: '50px'}} href="https://github.com/reactstrap/reactstrap">Testimonial</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{marginLeft: '50px'}} href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
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
            </UncontrolledDropdown> */}
          </Nav>
          <Button outline color="primary" style={{marginLeft: '10%'}}>Sign Up</Button>{' '}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar2; 