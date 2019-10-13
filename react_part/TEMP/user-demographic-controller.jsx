import ApiUtils from '../ApiUtils';
var user-demographicController = {


  user_demographic_insert: function(user-demographic) {
    return fetch(`http://localhost:8090/rest/user-demographic/insert`, {
      method: "post",
      
      body: JSON.stringify(user-demographic),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default user-demographicController;