import fetch from 'isomorphic-fetch'

export const REQUEST_PLACES = 'REQUEST_PLACES'
export const RECEIVE_PLACES = 'RECEIVE_PLACES'

function requestPlaces(query) {
  return {
    type: REQUEST_PLACES,
    query
  }
}

function receivePlaces(query, json) {
  return {
    type: RECEIVE_PLACES,
    query,
    places: json.data.children.map(child => child.data)
  }
}

function fetchPlaces(query) {
  return dispatch => {
    dispatch(requestPlaces(query))
    return fetch(`https://www.reddit.com/r/${query}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePlaces(query, json)))
  }
}

function shouldFetchPlaces(state, query) {
  const places = state.placesSearched//state.postsBySubreddit[subreddit]
  console.log()
  if (!places) {
    return true
  } else if (places.isFetching) {
    return false
  } else {
    return places.didInvalidate
  }
}

export function fetchPlacesIfNeeded(query) {
  return (dispatch, getState) => {
    if (shouldFetchPlaces(getState(), query)) {
      return dispatch(fetchPlaces(query))
    }
  }
}