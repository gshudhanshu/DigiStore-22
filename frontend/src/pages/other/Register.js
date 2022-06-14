import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import LayoutOne from '../../layouts/LayoutOne'
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Register = ({ location }) => {
  const { pathname } = location

  return (
    <Fragment>
      <Helmet>
        <title>DigiStore | Register</title>
        <meta
          name='description'
          content='Compare page of flone react minimalist eCommerce template.'
        />
      </Helmet>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + '/'}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Register
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <Breadcrumb />
        <div className='login-register-area pt-100 pb-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 col-md-12 ml-auto mr-auto'>
                <div className='login-register-wrapper'>
                  <Nav variant='pills' className='login-register-tab-list'>
                    <Nav.Item>
                      <Nav.Link eventKey='register'>
                        <h4>Create Account</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <div className='login-form-container'>
                    <div className='login-register-form'>
                      <form>
                        <label htmlFor='first-name-field'>First name</label>
                        <input
                          type='text'
                          name='first-name'
                          placeholder='First Name'
                          id='first-name-field'
                        />
                        <label htmlFor='last-name-field'>Last name</label>
                        <input
                          type='text'
                          name='last-name'
                          id='last-name-field'
                          placeholder='Last Name'
                        />
                        <label>Mobile number</label>
                        <PhoneInput
                          country={'bb'}
                          onlyCountries={['bb', 'in']}
                          placeholder='+1246 530 3444'
                          name='mobile-number'
                          id='mobile-number-field'
                          // value={this.state.phone}
                          // onChange={(phone) => this.setState({ phone })}
                        />

                        <div className='button-box mb-4'>
                          <button type='submit'>
                            <span>Send SMS Code</span>
                          </button>
                          <span className='ml-3'>Resend after 60 sec</span>
                        </div>

                        <label htmlFor='mobile-otp-field'>
                          Received SMS Code
                        </label>
                        <input
                          type='number'
                          name='mobile-otp'
                          id='mobile-otp-field'
                          placeholder='123456'
                        />

                        <label htmlFor='register-password-field'>
                          Password
                        </label>
                        <input
                          type='password'
                          name='register-password'
                          id='register-password-field'
                          placeholder='Password'
                        />

                        <div className='button-box'>
                          <button type='submit'>
                            <span>Register</span>
                          </button>
                          <button type='submit' className='ml-3'>
                            <Link to={process.env.PUBLIC_URL + '/login'}>
                              Login
                            </Link>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  )
}

Register.propTypes = {
  location: PropTypes.object,
}

export default Register
