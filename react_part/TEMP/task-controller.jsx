import ApiUtils from '../ApiUtils';
var taskController = {


  view_task_list: function() {
    return fetch(`http://localhost:8090/rest/task/user`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default taskController;