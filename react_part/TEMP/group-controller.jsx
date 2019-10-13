import ApiUtils from '../ApiUtils';
var groupController = {


  detail_insert: function(group) {
    return fetch(`http://localhost:8090/rest/groupdetail/insert`, {
      method: "post",
      
      body: JSON.stringify(group),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  view_group_detail_list: function() {
    return fetch(`http://localhost:8090/rest/groupdetail/`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  view_group_detail_list: function() {
    return fetch(`http://localhost:8090/rest/groupdetail`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  group_detail_list_by_client: function(CLIENT_ID) {
    return fetch(`http://localhost:8090/rest/groupdetail/client/${CLIENT_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  group_detail_list_by_employee: function(UCM_ID) {
    return fetch(`http://localhost:8090/rest/groupdetail/user/${UCM_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  get_group_detail: function(GROUP_ID) {
    return fetch(`http://localhost:8090/rest/groupdetail/${GROUP_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default groupController;