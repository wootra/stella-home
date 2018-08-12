// import apigClient from '../aws_api/react-apigClient'
import axios from 'axios'
// import dotEnv from 'dotenv'

export const ACTION_NEWS_LIST = 'ACTION_NEWS_LIST'
export const ACTION_NEWS_CONTENT = 'ACTION_NEWS_CONTENT'
export const ACTION_NEWS_CONTENT_BY_COND = 'ACTION_NEWS_CONTENT_BY_COND'
export const ACTION_NEWS_SAVE = 'ACTION_NEWS_SAVE'
export const ACTION_NEWS_EDIT = 'ACTION_NEWS_EDIT'
export const ACTION_NEWS_PATCH = 'ACTION_NEWS_PATCH'

// dotEnv.config()
// let newClient = null
const URL_ORG = process.env.REACT_APP_API_URL

export function action_newsList (size) {
  // go to reducer to handle this..
  // if (!newClient) newClient = apigClient()
  const URL_ = process.env.REACT_APP_API_URL
  const URL = !URL_ ? 'http://127.0.0.1:5000' : process.env.API_URL

  const url = `${URL}/schedule/news?limit=${size}`

  const payload = axios.get(url)
  return {
    type: ACTION_NEWS_LIST,
    payload: payload
  }
}

export function action_newsContent (id) {
  // if (!newClient) newClient = apigClient()
  const URL = !URL_ORG ? 'http://127.0.0.1:5000' : process.env.API_URL

  const payload = axios.get(`${URL}/schedule/news/${id}`)
  return {
    type: ACTION_NEWS_CONTENT,
    payload: payload
  }
}

export function action_callUrl (url) {
  // if (!newClient) newClient = apigClient()

  const payload = axios.get(url)
  return {
    type: ACTION_NEWS_CONTENT,
    payload: payload
  }
}

export function action_newsContentByCond (
  title,
  writer,
  content,
  date = Date.now()
) {
  // if (!newClient) newClient = apigClient()
  const params = {
    [title ? 'title' : null]: title,
    [writer ? 'writer' : null]: writer,
    [content ? 'content' : null]: content,
    [date ? 'date' : null]: date
  }
  const URL = !URL_ORG ? 'http://127.0.0.1:5000' : process.env.API_URL

  const payload = axios({
    url: `${URL}/schedule/news`,
    method: 'GET',
    params: params
  })

  return {
    type: ACTION_NEWS_CONTENT_BY_COND,
    payload: payload
  }
}

export function action_saveContent (title, writer, content, date = Date.now()) {
  // if (!newClient) newClient = apigClient()
  const params = {
    title,
    writer,
    content,
    date
  }
  const URL = !URL_ORG ? 'http://127.0.0.1:5000' : process.env.API_URL

  const payload = axios({
    url: `${URL}/schedule/news`,
    method: 'POST',
    params: params
  })

  return {
    type: ACTION_NEWS_SAVE,
    payload: payload
  }
}

export function action_editContent (title, writer, content, date) {
  // if (!newClient) newClient = apigClient()
  const URL = !URL_ORG ? 'http://127.0.0.1:5000' : process.env.API_URL

  const payload = axios.put(`${URL}/schedule/news`)
  return {
    type: ACTION_NEWS_EDIT,
    payload: payload
  }
}

export function action_patchContent (objToPatch) {
  // if (!newClient) newClient = apigClient()
  const URL = !URL_ORG ? 'http://127.0.0.1:5000' : process.env.API_URL

  const payload = axios.patch(`${URL}/schedule/news`)
  return {
    type: ACTION_NEWS_PATCH,
    payload: payload
  }
}
