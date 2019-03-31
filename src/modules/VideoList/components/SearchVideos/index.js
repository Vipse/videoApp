import React, { Component } from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';

import { getVideosByQuery } from 'redux/actions/videoActions';

const Search = Input.Search;

class SearchVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    }
  }

  componentDidMount() {
    this.timer = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  changeHandleSearch = (e) => {
    const { value } = e.target;

    this.setState({searchQuery: value});
    clearTimeout(this.timer);
    this.timer = setTimeout(this.triggerChange, 800);
  };

  onSearch = () => {
    clearTimeout(this.timer);
    this.triggerChange();
  };

  triggerChange = () => {
    const { searchQuery } = this.state;
    const { getVideosByQuery } = this.props;

    if( searchQuery ) {
      getVideosByQuery(searchQuery);
    }
  };

  render() {
    return (
      <Search
        placeholder="Search"
        onSearch={this.onSearch}
        onChange={this.changeHandleSearch}
      />
    );
  }
}

const mapDispatchToProps = {
  getVideosByQuery,
};

export default connect(null, mapDispatchToProps)(SearchVideos);