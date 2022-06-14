import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { multilanguage } from 'redux-multilanguage'

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className='offcanvas-navigation' id='offcanvas-navigation'>
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
          <Link to={process.env.PUBLIC_URL + '/transactions'}>
            Transactions
          </Link>
        </li>
        <li>
          {/* <Link to={process.env.PUBLIC_URL + '/contact'}>Contact Us</Link> */}
          <a
            href={'https://www.digicelgroup.com/bb/en/contact-us.html'}
            target='_blank'
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  )
}

MobileNavMenu.propTypes = {
  strings: PropTypes.object,
}

export default multilanguage(MobileNavMenu)
