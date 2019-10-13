import ApiUtils from '../ApiUtils';
var roleController = {


  view_role_list: function() {
    return fetch(`http://localhost:8090/rest/role/`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  view_role_list: function() {
    return fetch(`http://localhost:8090/rest/role`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  role_insert: function(role) {
    return fetch(`http://localhost:8090/rest/role/`, {
      method: "post",
      
      body: JSON.stringify(role),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  role_insert: function(role) {
    return fetch(`http://localhost:8090/rest/role`, {
      method: "post",
      
      body: JSON.stringify(role),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  get_role: function(ROLE_ID) {
    return fetch(`http://localhost:8090/rest/role/${ROLE_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default roleController;