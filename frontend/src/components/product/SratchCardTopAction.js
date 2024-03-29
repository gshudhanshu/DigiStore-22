import PropTypes from 'prop-types'
import React from 'react'
import { setActiveLayout } from '../../helpers/product'

const SratchCardTopAction = ({
  getLayout,
  getFilterSortParams,
  cardCount,
  sortedCardCount,
}) => {
  return (
    <div className='shop-top-bar mb-35'>
      <div className='select-shoing-wrap'>
        <div className='shop-select'>
          <select
            onChange={(e) => getFilterSortParams('filterSort', e.target.value)}
          >
            <option value='default'>Default</option>
            <option value='priceHighToLow'>Price - High to Low</option>
            <option value='priceLowToHigh'>Price - Low to High</option>
          </select>
        </div>
        <p>
          Showing {sortedCardCount} of {cardCount} result
        </p>
      </div>

      <div className='shop-tab'>
        <button
          onClick={(e) => {
            getLayout('grid two-column')
            setActiveLayout(e)
          }}
        >
          <i className='fa fa-th-large' />
        </button>
        <button
          onClick={(e) => {
            getLayout('grid three-column')
            setActiveLayout(e)
          }}
        >
          <i className='fa fa-th' />
        </button>
        <button
          onClick={(e) => {
            getLayout('list')
            setActiveLayout(e)
          }}
        >
          <i className='fa fa-list-ul' />
        </button>
      </div>
    </div>
  )
}

SratchCardTopAction.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  cardCount: PropTypes.number,
  sortedCardCount: PropTypes.number,
}

export default SratchCardTopAction
