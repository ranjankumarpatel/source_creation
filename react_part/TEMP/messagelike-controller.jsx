import ApiUtils from '../ApiUtils';
var messagelikeController = {


  insert_message_like: function(messagelike) {
    return fetch(`http://localhost:8090/rest/messagelike/insertlike`, {
      method: "post",
      
      body: JSON.stringify(messagelike),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  update_message_like: function(messagelike) {
    return fetch(`http://localhost:8090/rest/messagelike/update`, {
      method: "post",
      
      body: JSON.stringify(messagelike),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  insert_message_like: function(messagelike) {
    return fetch(`http://localhost:8090/rest/messagelike`, {
      method: "post",
      
      body: JSON.stringify(messagelike),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  count_messagelike: function(UCM_ID) {
    return fetch(`http://localhost:8090/rest/messagelike/count/${UCM_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  find_like_by_employee: function(UCM_ID) {
    return fetch(`http://localhost:8090/rest/messagelike/user/${UCM_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  find_comment_by_id: function(LIKE_ID) {
    return fetch(`http://localhost:8090/rest/messagelike/${LIKE_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default messagelikeController;