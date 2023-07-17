import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Footer2 = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" style={{ marginTop: '5px' }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="https://ads.google.com/intl/en_ca/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</Nav.Link>
          <Nav.Link href="https://smallbusiness.withgoogle.com/intl/en_ca/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=ww-ww-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u&c=CA#!/e">Business</Nav.Link>
          <Nav.Link href="https://www.google.com/search/howsearchworks/?fg=1">How Search Works</Nav.Link>

        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="https://policies.google.com/privacy?hl=en-CA&fg=1" style={{ position: 'relative', right: '10px' }}>Privacy</Nav.Link>
          <Nav.Link href="https://policies.google.com/terms?hl=en-CA&fg=1" style={{ position: 'relative', right: '10px' }}>Terms</Nav.Link>
          <Nav.Link href="#gmail-image" style={{ position: 'relative', right: '10px' }}>Settings</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Footer2;
