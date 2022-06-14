import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import SratchCardTopAction from '../../components/product/SratchCardTopAction'

const SratchCardTopbar = ({
  getLayout,
  getFilterSortParams,
  cardCount,
  sortedCardCount,
}) => {
  return (
    <Fragment>
      {/* shop top action */}
      <SratchCardTopAction
        getLayout={getLayout}
        getFilterSortParams={getFilterSortParams}
        productCount={cardCount}
        sortedProductCount={sortedCardCount}
      />
    </Fragment>
  )
}

SratchCardTopbar.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  productCount: PropTypes.number,
  sortedProductCount: PropTypes.number,
}

export default SratchCardTopbar
