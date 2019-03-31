import React, {Component} from 'react';
import { Switch } from 'antd';
import { connect } from 'react-redux'

import { setOnlyFavouriteMode } from 'redux/actions/videoActions';

import './index.css'

class Header extends Component {
  toggleOnlyFavoriteMode = isMode => {
    const { setOnlyFavouriteMode } = this.props;

    setOnlyFavouriteMode(isMode)
  };

  render() {

    return (
      <div className="header">
        <span className="logo">
          App Logo
        </span>
        <div className="favouriteSwitch">
          <span>Search / Favourites</span>
          <Switch onChange={this.toggleOnlyFavoriteMode} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setOnlyFavouriteMode
};

export default connect(null, mapDispatchToProps)(Header);