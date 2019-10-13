import ApiUtils from '../ApiUtils';
var notificationController = {


  notification_insert: function(notification) {
    return fetch(`http://localhost:8090/rest/notification/insert`, {
      method: "post",
      
      body: JSON.stringify(notification),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  find_notification_emp_max_id: function(UCM_ID) {
    return fetch(`http://localhost:8090/rest/notification/message/${UCM_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default notificationController;