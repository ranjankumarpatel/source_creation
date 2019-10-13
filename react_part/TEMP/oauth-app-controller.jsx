import ApiUtils from '../ApiUtils';
var oauth-appController = {


  app_login: function() {
    return fetch(`http://localhost:8090/rest/oauth-app/app-login`, {
      method: "post,get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default oauth-appController;