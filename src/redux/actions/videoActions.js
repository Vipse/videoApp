import {
  GET_VIDEOS_BY_QUERY_REQUEST,
  GET_VIDEOS_BY_QUERY_SUCCESS,
  GET_VIDEOS_BY_QUERY_FAILURE,
  GET_FAVOURITE_VIDEOS_REQUEST,
  GET_FAVOURITE_VIDEOS_SUCCESS,
  GET_FAVOURITE_VIDEOS_FAILURE,
  SET_ONLY_FAVOURITE_MODE,
  CLEAR_VIDEOS,
} from "./types";

import axios from 'config/axios'


export const getVideosByQuery = query => dispatch => {
  dispatch({
    type: GET_VIDEOS_BY_QUERY_REQUEST,
  });

  axios.get(`/videos/search?query=${query}`)
    .then(res => dispatch({
      type: GET_VIDEOS_BY_QUERY_SUCCESS,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_VIDEOS_BY_QUERY_FAILURE,
      payload: err,
    }))
};

export const setOnlyFavouriteMode = (bool, isShowSpinner = true) => dispatch => {
  dispatch({
    type: SET_ONLY_FAVOURITE_MODE,
    payload: bool,
  });

  if(bool) {
    dispatch({
      type: GET_FAVOURITE_VIDEOS_REQUEST,
      isShowSpinner
    });

    axios.get('/videos/favourites')
      .then(res => dispatch({
        type: GET_FAVOURITE_VIDEOS_SUCCESS,
        payload: res.data,
      }))
      .catch(err => dispatch({
        type: GET_FAVOURITE_VIDEOS_FAILURE,
        payload: err,
      }))
  } else {
    dispatch({
      type: CLEAR_VIDEOS,
    });
  }

};

export const setFavouriteStatus = (id, isFavourite) => (dispatch, getState) => {
    const isFavouriteMode = getState().video.isOnlyFavourite;

    axios.patch(`/videos/${id}`, JSON.stringify({ isFavourite: isFavourite }))
      .then(() => {
        if(isFavouriteMode) {
          dispatch(setOnlyFavouriteMode(true, false))
        }
      });
};