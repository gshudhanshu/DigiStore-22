import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import HeaderOne from '../wrappers/header/HeaderOne'
import FooterTwo from '../wrappers/footer/FooterTwo'

const LayoutOne = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  headerPositionClass,
}) => {
  return (
    <Fragment>
      <HeaderOne
        layout={headerContainerClass}
        top={headerTop}
        headerPaddingClass={headerPaddingClass}
        headerPositionClass={headerPositionClass}
      />
      {children}
      <FooterTwo
        backgroundColorClass='footer-white'
        spaceLeftClass='ml-70'
        spaceRightClass='mr-70'
        footerTopBackgroundColorClass='bg-gray-2'
        footerTopSpaceTopClass='pt-80'
        footerTopSpaceBottomClass='pb-60'
        copyrightColorClass='copyright-gray'
        footerLogo='/assets/img/logo/logo.png'
      />
    </Fragment>
  )
}

LayoutOne.propTypes = {
  children: PropTypes.any,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string,
}

export default LayoutOne
