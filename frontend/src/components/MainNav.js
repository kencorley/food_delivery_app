import React, { useState } from 'react';
import logo from '../assets/images/logo.webp';
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
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand='lg' className='nav-block'>
      <MDBContainer>
        <MDBNavbarBrand className='mb-2'>
          <img src={logo} height='50' alt='logo' loading='lazy' />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem className='px-2'>
              <MDBNavbarLink aria-current='page' color='info'>Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='px-2'>
              <MDBNavbarLink>Reviews</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='px-2'>
              <MDBNavbarLink>Articles</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown className='main-dd'>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Meal Kits
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <p className='px-3 pt-3'>
                    <MDBTypography tag='strong' className='dd-category-text'>
                      <MDBIcon fas icon='leaf' className='px-2 dd-icon' />{' '}
                      Diet Type
                    </MDBTypography>
                  </p>
                  <MDBDropdownDivider></MDBDropdownDivider>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Keto/Carnivore</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Mediterranean</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Paleo</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Pescatarian</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Vegan</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Vegetarian</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownDivider></MDBDropdownDivider>
                  <p className='px-3 pt-2'>
                    <MDBTypography tag='strong' className='dd-category-text'>
                      <MDBIcon fas icon='users' className='px-2 dd-icon' />{' '}
                      People Type
                    </MDBTypography>
                  </p>
                  <MDBDropdownDivider></MDBDropdownDivider>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Picky Eaters</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Singles</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Couples</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Families</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownDivider></MDBDropdownDivider>
                  <p className='px-3 pt-2'>
                    <MDBTypography tag='strong' className='dd-category-text'>
                      <MDBIcon
                        fas
                        icon='briefcase-medical'
                        className='px-2 dd-icon'
                      />{' '}
                      Condition Type
                    </MDBTypography>
                  </p>
                  <MDBDropdownDivider></MDBDropdownDivider>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Diabetes</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Heartburn</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Celiac</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>IBS</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className='ms-3'>
              <MDBBtn className='review-btn'>Leave A Review</MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
