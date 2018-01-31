import { request } from '../utils';

export const getAds = () => request({
  url: 'https://flower.handsomehan.cn/v1/ads/'
})
  .then(resp => resp.results)