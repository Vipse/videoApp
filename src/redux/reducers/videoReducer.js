import {
  GET_VIDEOS_BY_QUERY_REQUEST,
  GET_VIDEOS_BY_QUERY_SUCCESS,
  GET_VIDEOS_BY_QUERY_FAILURE,
  GET_FAVOURITE_VIDEOS_REQUEST,
  GET_FAVOURITE_VIDEOS_SUCCESS,
  GET_FAVOURITE_VIDEOS_FAILURE,
  SET_ONLY_FAVOURITE_MODE,
  CLEAR_VIDEOS,

} from "redux/actions/types";

const initialState = {
  videos: [],
  error: '',
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS_BY_QUERY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_VIDEOS_BY_QUERY_SUCCESS:
      return {
        ...state,
        videos: action.payload,
        isLoading: false,
      };
    case GET_VIDEOS_BY_QUERY_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };


    case GET_FAVOURITE_VIDEOS_REQUEST:
      return {
        ...state,
        isLoading: action.isShowSpinner,
      };
    case GET_FAVOURITE_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: action.payload,
        isLoading: false,
      };
    case GET_FAVOURITE_VIDEOS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };


    case SET_ONLY_FAVOURITE_MODE:
      return {
        ...state,
        isOnlyFavourite: action.payload,
      };

    case CLEAR_VIDEOS:
      return {
        ...state,
        videos: [],
      };


    default:
      return state;
  }
}