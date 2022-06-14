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

const LoginRegister = ({ location }) => {
  const { pathname } = location

  return (
    <Fragment>
      <Helmet>
        <title>DigiStore | Login</title>
        <meta
          name='description'
          content='Compare page of flone react minimalist eCommerce template.'
        />
      </Helmet>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + '/'}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login
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
                      <Nav.Link eventKey='login'>
                        <h4>Login</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <div className='login-form-container'>
                    <div className='login-register-form'>
                      <form>
                        <label>Mobile number</label>
                        <PhoneInput
                          country={'bb'}
                          onlyCountries={['bb', 'in']}
                          placeholder='+1246 530 3444'
                          name='mobile-number'
                          // id='mobile-number-field'
                          // value={this.state.phone}
                          // onChange={(phone) => this.setState({ phone })}
                        />
                        <label htmlFor='user-password-field'>Password</label>
                        <input
                          type='password'
                          name='user-password'
                          id='user-password-field'
                          placeholder='Password'
                        />
                        <div className='button-box'>
                          <div className='login-toggle-btn'>
                            <input type='checkbox' />
                            <label className='ml-10'>Remember me</label>
                            <Link
                              to={process.env.PUBLIC_URL + '/forget-password'}
                            >
                              Forgot Password?
                            </Link>
                          </div>
                          <button type='submit'>
                            <span>Login</span>
                          </button>
                          <button type='submit' className='ml-3'>
                            <Link to={process.env.PUBLIC_URL + '/register'}>
                              Register
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

LoginRegister.propTypes = {
  location: PropTypes.object,
}

export default LoginRegister
