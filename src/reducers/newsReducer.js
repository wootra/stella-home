import {
  ACTION_NEWS_LIST,
  ACTION_NEWS_CONTENT,
  ACTION_NEWS_CONTENT_BY_COND,
  ACTION_NEWS_SAVE,
  ACTION_NEWS_EDIT,
  ACTION_NEWS_PATCH
} from '../actions/scheduleActions'

export default function (
  state = { count: 0, selContent: '', list: [] },
  action
) {
  // be sure, this state is not the same state that the components have.
  // when axios or fetch returns the result, it comes to here..
  // this state will be returned to the components as props.

  console.log('payload for ' + action.type)
  console.log(action.payload)

  switch (action.type) {
    case ACTION_NEWS_LIST: {
      if (action.payload) {
        if (action.payload.data) {
          return {
            ...state,
            count: action.payload.data.count,
            list: [...action.payload.data.list]
          }
        } else {
          console.log(action.payload)
          return state
        }
      } else return state // if no result, return current state.
    }
    case ACTION_NEWS_CONTENT:
    case ACTION_NEWS_CONTENT_BY_COND: {
      if (action.payload) {
        if (action.payload.data) {
          return { ...state, selContent: action.payload.data.content }
        } else {
          console.log(action.payload)
          return state
        }
      } else return state // if no result, return current state.
    }
    case ACTION_NEWS_SAVE:
    case ACTION_NEWS_EDIT:
    case ACTION_NEWS_PATCH: {
      return state
    }
    default:
      return state
  }
}
