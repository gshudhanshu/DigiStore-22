import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { multilanguage } from 'redux-multilanguage'

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? 'sidebar-menu'
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ''}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + '/'}>Products</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/scratchcards'}>
              Scratch Cards
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/transaction'}>
              Transactions
            </Link>
          </li>
          <li>
            {/* <Link to={process.env.PUBLIC_URL + '/contact'}>Constact Us</Link> */}
            <a
              href={'https://www.digicelgroup.com/bb/en/contact-us.html'}
              target='_blank'
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
}

export default multilanguage(NavMenu)
