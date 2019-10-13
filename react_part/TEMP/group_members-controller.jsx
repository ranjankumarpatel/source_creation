import ApiUtils from '../ApiUtils';
var group_membersController = {


  group_members_insert: function(group_members) {
    return fetch(`http://localhost:8090/rest/groupmembers/update-members`, {
      method: "post",
      
      body: JSON.stringify(group_members),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default group_membersController;