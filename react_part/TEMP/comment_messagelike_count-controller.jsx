import ApiUtils from '../ApiUtils';
var comment_messagelike_countController = {


  count_messagelike: function(UCM_ID) {
    return fetch(`http://localhost:8090/rest/comment_messagelike_count/user/${UCM_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default comment_messagelike_countController;