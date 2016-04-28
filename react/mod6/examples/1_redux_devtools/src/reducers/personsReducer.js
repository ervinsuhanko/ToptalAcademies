import {
  PERSONS_REQUEST,
  PERSONS_RECEIVE,
  PERSONS_FAIL
} from '../actions/persons';

const initialState = {
  isFetching: false,
  error: '',
  list: []
};

export function persons(state = initialState, action){
  switch (action.type) {
  case PERSONS_REQUEST:
    return Object.assign({},state,{
      isFetching: true,
      error: ''
    });
  case PERSONS_RECEIVE:
    return Object.assign({}, state, {
      isFetching: false,
      error:'Hello',
      list: action.data
    });
  case PERSONS_FAIL:
    return Object.assign({},state, {
      isFetching: false,
      error: 'Error' + action.data
    });
  default:
    return state;
  }
}
