import ApiUtils from '../ApiUtils';
var clientController = {


  view_client_list: function() {
    return fetch(`http://localhost:8090/rest/client/`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  view_client_list: function() {
    return fetch(`http://localhost:8090/rest/client`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  client_insert: function(client) {
    return fetch(`http://localhost:8090/rest/client/`, {
      method: "post",
      
      body: JSON.stringify(client),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  client_insert: function(client) {
    return fetch(`http://localhost:8090/rest/client`, {
      method: "post",
      
      body: JSON.stringify(client),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  get_client_photo: function(CLIENT_ID) {
    return fetch(`http://localhost:8090/rest/client/photo/${CLIENT_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  get_client: function(CLIENT_ID) {
    return fetch(`http://localhost:8090/rest/client/${CLIENT_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default clientController;