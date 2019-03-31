import React, {Component} from 'react';
import moment from 'moment';

import './index.css'

class VideoItem extends Component {
  toggleFav = id => e => {
    const { setFavouriteStatus } = this.props;

    e.target.classList.toggle("favactive");

    const isFavourite = e.target.classList.contains("favactive");

    setFavouriteStatus(id, isFavourite);
  };

  render() {
    const {
      video: { id, thumbs, title, description, publishedAt, isFavourite }
    } = this.props;

    return (
      <div className="videoItem">
        <div className="mainInfo">
          <div className="thumb">
            <img src={thumbs.medium} alt=""/>
          </div>
          <div className="info">
            <span className="title">
              {title}
            </span>
            <span className="publishedDate">
              {moment(publishedAt).format("DD.MM.YYYY")}
            </span>
            <span className="description">
              {description}
            </span>
          </div>
        </div>
        <div className={`fav ${ isFavourite ? "favactive" : null }`} onClick={this.toggleFav(id)}>
        </div>
      </div>
    );
  }
}

export default VideoItem;