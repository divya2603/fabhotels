import fetch from 'isomorphic-fetch'

export const DISPLAY_APPDETAILS = 'DISPLAY_APPDETAILS'
export const GET_PLACES = 'GET_PLACES';

/********action creator for fetching places*********/
export function getPlaces(query) {
  const request = fetchPosts(query)
  console.log(request)
  return {
    type: GET_PLACES,
    payload: query
  }
}



const displayAppDetails = () => ({
  type: DISPLAY_APPDETAILS
});

    const options = {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': ' http://192.168.43.109:3000/',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      },
      mode: 'no-cors', // allow cross-origin HTTP request
      //credentials: 'same-origin' // This is similar to XHR’s withCredentials flag
    };

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(getPlaces(subreddit))
    return fetch(`https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=AIzaSyBZUSfdwyxVWD0N5meVeL5VKNHzt8mZBhk&input=del`, options)
      .then((response) => response.json() )
      .catch((error) => {
        console.error(error);
      });
  }
}

export function fetchPlacesIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}


export default displayAppDetails;
