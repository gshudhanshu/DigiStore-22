import PropTypes from 'prop-types'
import React, { useEffect, Suspense, lazy } from 'react'
import ScrollToTop from './helpers/scroll-top'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import { multilanguage, loadLanguages } from 'redux-multilanguage'
import { connect } from 'react-redux'
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic'

// home pages
const Home = lazy(() => import('./pages/home/Home'))

// other pages
const About = lazy(() => import('./pages/other/About'))
const Contact = lazy(() => import('./pages/other/Contact'))
const MyAccount = lazy(() => import('./pages/other/MyAccount'))
const Register = lazy(() => import('./pages/other/Register'))
const Login = lazy(() => import('./pages/other/Login'))
const ForgetPassword = lazy(() => import('./pages/other/ForgetPassword'))
const Transactions = lazy(() => import('./pages/other/Transactions'))
const ScratchCards = lazy(() => import('./pages/other/ScratchCards'))

const Cart = lazy(() => import('./pages/other/Cart'))
const Wishlist = lazy(() => import('./pages/other/Wishlist'))
const Compare = lazy(() => import('./pages/other/Compare'))
const Checkout = lazy(() => import('./pages/other/Checkout'))

const NotFound = lazy(() => import('./pages/other/NotFound'))

const App = (props) => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require('./translations/english.json'),
          fn: require('./translations/french.json'),
          de: require('./translations/germany.json'),
        },
      })
    )
  })

  return (
    <ToastProvider placement='bottom-left'>
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className='flone-preloader-wrapper'>
                  <div className='flone-preloader'>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                {/* Homepages */}
                <Route
                  exact
                  path={process.env.PUBLIC_URL + '/'}
                  component={Home}
                />

                {/* Other pages */}
                <Route
                  path={process.env.PUBLIC_URL + '/about'}
                  component={About}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/contact'}
                  component={Contact}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/my-account'}
                  component={MyAccount}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/login'}
                  component={Login}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/register'}
                  component={Register}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/forget-password'}
                  component={ForgetPassword}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/transactions'}
                  component={Transactions}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/scratchcards'}
                  component={ScratchCards}
                />

                <Route
                  path={process.env.PUBLIC_URL + '/cart'}
                  component={Cart}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/wishlist'}
                  component={Wishlist}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/compare'}
                  component={Compare}
                />
                <Route
                  path={process.env.PUBLIC_URL + '/checkout'}
                  component={Checkout}
                />

                <Route
                  path={process.env.PUBLIC_URL + '/not-found'}
                  component={NotFound}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  )
}

App.propTypes = {
  dispatch: PropTypes.func,
}

export default connect()(multilanguage(App))
