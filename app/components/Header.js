import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../actions/auth';

class Header extends React.Component {
  componentDidMount() {
    // Initialize Foundation
    $(document).foundation();
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    const rightNav = this.props.token ? (
      <div className="top-bar-right">
        <ul className="vertical medium-horizontal menu">
          <li><Link to="/account" activeClassName="active">My Account</Link></li>
          <li><a href="#" onClick={this.handleLogout.bind(this)}>Logout</a></li>
        </ul>
      </div>
    ) : (
      <div className="top-bar-right">
        <ul className="vertical medium-horizontal menu">
          <li><Link to="/login" activeClassName="active">Log in</Link></li>
          <li><Link to="/signup" activeClassName="active">Sign up</Link></li>
        </ul>
      </div>
    );
    return (
      <div>
          <div data-sticky-container className="sticky-container" style={{height:"72px"}}>
              <div class="title-bar sticky is-anchored is-at-top" data-sticky="sticky" data-options="marginTop:0;" data-resize="sticky" data-mutate="sticky" style={{"max-width": "481px", "margin-top": "0px", bottom: "auto", top: "0px"}} data-events="resize">
             
                  <div className="title-bar-left">
                    <span class="title-bar-title">Sticky Navigation</span>
                  </div>
                  <div className="title-bar-right"></div>
              </div>
          </div>
      </div>  
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Header);
