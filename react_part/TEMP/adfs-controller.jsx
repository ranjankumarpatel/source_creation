import ApiUtils from '../ApiUtils';
var adfsController = {


  authorized_by_server: function(client_id) {
    return fetch(`http://localhost:8090/adfs/authorized/${client_id}/${ADFS_INTEGRATION_NAME}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  authorized: function(client_id) {
    return fetch(`http://localhost:8090/adfs/authorized/${client_id}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  adfs_login: function(client_id) {
    return fetch(`http://localhost:8090/adfs/login/${client_id}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default adfsController;