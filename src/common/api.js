import axios from 'axios';

const url = '//www.baidu.com';


function getList() {
  return axios({
    method: 'get',
    url: `${url}/test`,
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  })
}

export default {
    getList,
}
