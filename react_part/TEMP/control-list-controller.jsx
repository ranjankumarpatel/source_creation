import ApiUtils from '../ApiUtils';
var control-listController = {


  group_detail_list_by_client: function(CLIENT_ID) {
    return fetch(`http://localhost:8090/rest/control-list/client/${CLIENT_ID}/${ROLE_NAME}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default control-listController;