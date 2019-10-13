import ApiUtils from '../ApiUtils';
var homeController = {


  home: function() {
    return fetch(`http://localhost:8090/`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default homeController;