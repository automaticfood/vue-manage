import axios from "./axios";

export const getMenu = parms => {
  return axios.request({
    url: '/permission/getMenu',
    methods: 'post',
    data: parms
  })
}

export const getData = () => {
  return axios.request({
    url: '/home/getData'
  })
}

export const getUser = (parms) => {
  return axios.request({
    url: '/user/getUser',
    methods: 'get',
    parms
  })
}
