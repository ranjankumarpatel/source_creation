import ApiUtils from '../ApiUtils';
var client_hrController = {


  validate_by_email: function(client_hr) {
    return fetch(`http://localhost:8090/rest/client_hr/validate-email`, {
      method: "post",
      
      body: JSON.stringify(client_hr),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  username_password_auth: function(client_hr) {
    return fetch(`http://localhost:8090/rest/client_hr/validate`, {
      method: "post",
      
      body: JSON.stringify(client_hr),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  view_client_hr_list: function() {
    return fetch(`http://localhost:8090/rest/client_hr/`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  view_client_hr_list: function() {
    return fetch(`http://localhost:8090/rest/client_hr`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  client_hr_insert: function(client_hr) {
    return fetch(`http://localhost:8090/rest/client_hr/`, {
      method: "post",
      
      body: JSON.stringify(client_hr),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  client_hr_insert: function(client_hr) {
    return fetch(`http://localhost:8090/rest/client_hr`, {
      method: "post",
      
      body: JSON.stringify(client_hr),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  get_client: function(HR_ID) {
    return fetch(`http://localhost:8090/rest/client_hr/${HR_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default client_hrController;