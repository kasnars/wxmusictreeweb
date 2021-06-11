import request from '@/utils/request'
// import { get } from 'core-js/core/dict'
const baseURL = 'http://localhost:3000'

export function fetchList(params) {
  return request({
    params,
    url: `${baseURL}/playlist/list`,
    method: 'get'
  })
}
export function fetchById(params) {
  return request({
    params,
    url: `${baseURL}/playlist/getById`,
    method: 'get'
  })
}
