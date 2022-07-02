import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  MDBDropdownDivider,
  MDBTypography,
} from 'mdb-react-ui-kit';

export default function MainNav() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" className="nav-block">
      <MDBContainer>
        <MDBNavbarBrand href="#">
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
            height="30"
            alt=""
            loading="lazy"
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="ms-auto">
            <MDBNavbarItem>
              <MDBNavbarLink aria-current="page">Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>Reviews</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>Information</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown className="main-dd">
                <MDBDropdownToggle tag="a" className="nav-link">
                  Meal Kit Categories
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <p className="px-3 pt-3">
                    <MDBTypography tag="strong" className="dd-category-text">
                      <MDBIcon fas icon="leaf" /> Diet Types
                    </MDBTypography>
                  </p>
                  <MDBDropdownDivider></MDBDropdownDivider>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Keto/Carnivore</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Mediterranian</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Vegan</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Vegetarian</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownDivider></MDBDropdownDivider>
                  <p className="px-3 pt-2">
                    <MDBTypography tag="strong" className="dd-category-text">
                      <MDBIcon fas icon="users" /> Age Groups
                    </MDBTypography>
                  </p>
                  <MDBDropdownDivider></MDBDropdownDivider>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Kids</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Adults</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Seniors</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownDivider></MDBDropdownDivider>
                  <p className="px-3 pt-2">
                    <MDBTypography tag="strong" className="dd-category-text">
                      <MDBIcon fas icon="carrot" /> People
                    </MDBTypography>
                  </p>
                  <MDBDropdownDivider></MDBDropdownDivider>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Picky Eaters</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Couples</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Athletes</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarNav className="ms-auto">
            <MDBNavbarItem>
              <MDBBtn color="warning" rippleColor="light">
                <MDBIcon className="me-2" fas icon="star" />
                Leave a Review
              </MDBBtn>
            </MDBNavbarItem>
            <MDBNavbarItem className="px-3">
              <MDBBtn color="info" rippleColor="light">
                <MDBIcon className="me-2" fas icon="user" />
                Login/Create Account
              </MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
