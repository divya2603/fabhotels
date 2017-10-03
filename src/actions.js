// export function increment(index) {
//     return {
//         type: 'INCREMENT_LIKES',
//         index
//     }
// }

import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const DISPLAY_APPDETAILS = 'DISPLAY_APPDETAILS'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

/********action creator for fetching places*********/
export function fetchPlaces(query) {
  const request = fetchPosts(query).results
  return {
    type: 'FETCH_PLACES',
    payload: request
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

const displayAppDetails = () => ({
  type: DISPLAY_APPDETAILS
});

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data)||{},
    receivedAt: Date.now()
  }
}

    const options = {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': ' http://192.168.43.109:3000/',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        

      },
      mode: 'no-cors', // allow cross-origin HTTP request
      //credentials: 'same-origin' // This is similar to XHR’s withCredentials flag
    };

function fetchPosts(subreddit) {

  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&rankby=distance&types=food&key=AIzaSyBwiGhJdpzxBoY_DbVp06JVnok0--x8sco`, options)
      .then((response) => response )
      .then((responseJson) => {if(responseJson.status != 0) {
        dispatch(receivePosts(subreddit, responseJson))}
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}

export default displayAppDetails;