import ApiUtils from '../ApiUtils';
var messageController = {


  upload_media: function(message) {
    return fetch(`http://localhost:8090/rest/message/upload`, {
      method: "post",
      
      body: JSON.stringify(message),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  update_message: function(message) {
    return fetch(`http://localhost:8090/rest/message/update`, {
      method: "post",
      
      body: JSON.stringify(message),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  find_messages: function() {
    return fetch(`http://localhost:8090/rest/message/`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  find_messages: function() {
    return fetch(`http://localhost:8090/rest/message`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  insert_message: function(message) {
    return fetch(`http://localhost:8090/rest/message/`, {
      method: "post",
      
      body: JSON.stringify(message),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  insert_message: function(message) {
    return fetch(`http://localhost:8090/rest/message`, {
      method: "post",
      
      body: JSON.stringify(message),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  find_message_by_client_year_month: function(CLIENT_ID) {
    return fetch(`http://localhost:8090/rest/message/client/${CLIENT_ID}/year-month`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  find_message_by_employee_year_month: function(UCM_ID) {
    return fetch(`http://localhost:8090/rest/message/user/${UCM_ID}/year-month`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  find_message_by_client: function(CLIENT_ID) {
    return fetch(`http://localhost:8090/rest/message/client/${CLIENT_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  message_remove: function(MES_ID) {
    return fetch(`http://localhost:8090/rest/message/remove/${MES_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  delete_message: function(MES_ID) {
    return fetch(`http://localhost:8090/rest/message/delete/${MES_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  find_message_by_group: function(GROUP_ID) {
    return fetch(`http://localhost:8090/rest/message/group/${GROUP_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  find_message_by_employee: function(UCM_ID) {
    return fetch(`http://localhost:8090/rest/message/user/${UCM_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  find_message_by_id: function(MES_ID) {
    return fetch(`http://localhost:8090/rest/message/${MES_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default messageController;