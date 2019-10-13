import ApiUtils from '../ApiUtils';
var logoutController = {


  logout: function() {
    return fetch(`http://localhost:8090/adfs/logout`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default logoutController;