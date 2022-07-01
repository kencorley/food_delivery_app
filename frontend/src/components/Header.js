import React, { useState } from 'react';
import {
  MDBAnimatedNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBNavbarItem,
  MDBNavbarBrand,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
} from 'mdb-react-ui-kit';

export default function Header() {
  const [activeLink, setActiveLink] = useState('');

  const handleActive = (e) => {
    setActiveLink(e.target.name);
  };

  return (
    <>
      <header>
        <MDBAnimatedNavbar expand="lg" fixed="top">
          <MDBContainer fluid>
            <MDBNavbarToggler
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MDBIcon fas icon="bars" />
            </MDBNavbarToggler>
            <div className="collapse navbar-collapse" id="mainNavbar">
              <MDBNavbarBrand>
                <img
                  src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
                  height="30"
                  alt=""
                  loading="lazy"
                />
              </MDBNavbarBrand>
              <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
                <MDBNavbarItem>
                  <MDBNavbarLink
                    name="home"
                    active={activeLink === 'home'}
                    onClick={handleActive}
                  >
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag="a" className="nav-link">
                      Meal Delivery Services
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="mainDropdown" dark>
                      <MDBDropdownItem>
                        <MDBDropdownLink>Item</MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink>Item</MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink>Item</MDBDropdownLink>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBNavbarLink
                    name="reviews"
                    active={activeLink === 'reviews'}
                    onClick={handleActive}
                  >
                    Reviews
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink
                    name="contact"
                    active={activeLink === 'contact'}
                    onClick={handleActive}
                  >
                    Contact
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>

              <MDBNavbarNav fullWidth={false} className="flex-row ms-auto">
                <MDBNavbarItem>
                  <MDBNavbarLink className="pe-2">
                    <MDBIcon fab icon="youtube" />
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink className="nav-link px-2">
                    <MDBIcon fab icon="facebook-f" />
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink className="nav-link px-2">
                    <MDBIcon fab icon="twitter" />
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink className="nav-link ps-2">
                    <MDBIcon fab icon="github" />
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </div>
          </MDBContainer>
        </MDBAnimatedNavbar>

        <div
          id="intro"
          className="bg-image"
          style={{
            backgroundImage:
              'url(https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp)',
            height: '100vh',
          }}
        >
          <div
            className="mask text-white"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          >
            <div className="container d-flex align-items-center text-center h-100">
              <div>
                <h1 className="mb-5">Some title here</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis quam minima perspiciatis eos tenetur. Praesentium
                  dolores at quos aperiam sed, sint provident consectetur
                  incidunt, nostrum porro earum commodi, ex architecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container my-5">
        <p>
          {' '}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quam
          minima perspiciatis eos tenetur. Praesentium dolores at quos aperiam
          sed, sint provident consectetur incidunt, nostrum porro earum commodi,
          ex architecto.
        </p>
      </div>
    </>
  );
}
