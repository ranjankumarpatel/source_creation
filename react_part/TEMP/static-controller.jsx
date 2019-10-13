import ApiUtils from '../ApiUtils';
var staticController = {


  static: function(path:filename) {
    return fetch(`http://localhost:8090/static/${path:filename}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default staticController;