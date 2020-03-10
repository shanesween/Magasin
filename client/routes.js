import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Login,
  Signup,
  UserHome,
  SingleProduct,
  AllProducts,
  Cart,
  NotFound,
  CheckOut,
  AdminHome,
  AdminSingleUser,
  AdminEditUser,
  AdminEditProduct,
  SplashPage,
  UserSingleOrder,
  ReviewsForm,
} from './components';
import { me } from './store';
import AdminAddProduct from './components/AdminAddProduct';
import UserProfile from './components/UserProfile';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    const { isAdmin } = this.props;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={SplashPage} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/products/:productId" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={AllProducts} />
        {isAdmin && (
          <Switch>
            <Route exact path="/admin" component={AdminHome} />
            <Route
              exact
              path="/products/admin/:productId"
              component={AdminEditProduct}
            />
            <Route
              exact
              path="/users/admin/:userId"
              component={AdminEditUser}
            />
            <Route
              exact
              path="/products/admin"
              component={AdminAddProduct}
            ></Route>
          </Switch>
        )}
        {isLoggedIn && (
          <Switch>
            <Route path="/admin" component={AdminHome} />
            <Route exact path="/users/:userId" component={AdminEditUser} />
            <Route exact path="/settings" component={UserProfile} />
            <Route exact path="/orders/:orderId" component={UserSingleOrder} />

            {/* Routes placed here are only available after logging in */}
            <Route exact path="/profile" component={UserHome} />

            <Route exact path="/review/:productId" component={ReviewsForm} />
          </Switch>
        )}
        <Route component={NotFound} />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin,
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};
