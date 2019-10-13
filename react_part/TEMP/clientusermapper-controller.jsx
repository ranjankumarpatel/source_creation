import ApiUtils from '../ApiUtils';
var clientusermapperController = {


  get_userinfo_by_client: function(CLIENT_ID) {
    return fetch(`http://localhost:8090/rest/clientusermapper/client/${CLIENT_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  get_client_user_mapper: function(UCM_ID) {
    return fetch(`http://localhost:8090/rest/clientusermapper/${UCM_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default clientusermapperController;