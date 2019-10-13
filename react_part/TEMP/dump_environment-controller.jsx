import ApiUtils from '../ApiUtils';
var dump_environmentController = {


  dump_environment: function() {
    return fetch(`http://localhost:8090/environment`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default dump_environmentController;