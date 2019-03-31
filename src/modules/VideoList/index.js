import React, {Component} from 'react';
import {Divider, Spin} from 'antd';
import { connect } from 'react-redux';

import { setFavouriteStatus } from 'redux/actions/videoActions'

import SearchVideos from './components/SearchVideos'
import VideoItem from './components/VideoItem'

import './index.css'

class VideoList extends Component {
  render() {
    const {
      videos,
      isOnlyFavourite,
      setFavouriteStatus,
      isLoading,
    } = this.props;
    const emptyMessage = isOnlyFavourite ?
      "Favourites is empty. Add something from search." : "Start search great things!";

    return (
      <div className="videoList">
        { !isOnlyFavourite && <SearchVideos />}
        <Divider/>
        {
          isLoading ? <Spin/> :
          videos.length ? videos.map(video => (
            <VideoItem
              key={video.id}
              video={video}
              setFavouriteStatus={setFavouriteStatus}
            />
          )) : emptyMessage
        }
      </div>
    );
  }
}

const mapStateToProps = ({ video })=> ({
  videos: video.videos,
  isOnlyFavourite: video.isOnlyFavourite,
  isLoading: video.isLoading,
});

const mapDispatchToProps = {
  setFavouriteStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);