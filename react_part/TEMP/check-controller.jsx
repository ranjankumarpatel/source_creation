import ApiUtils from '../ApiUtils';
var checkController = {


  check: function() {
    return fetch(`http://localhost:8090/healthcheck`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default checkController;