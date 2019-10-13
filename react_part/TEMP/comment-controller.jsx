import ApiUtils from '../ApiUtils';
var commentController = {


  insert_comment: function(comment) {
    return fetch(`http://localhost:8090/rest/comment/insert`, {
      method: "post",
      
      body: JSON.stringify(comment),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  update_comment: function(comment) {
    return fetch(`http://localhost:8090/rest/comment/update`, {
      method: "post",
      
      body: JSON.stringify(comment),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  delete_comment: function(COMMENT_ID) {
    return fetch(`http://localhost:8090/rest/comment/delete/${COMMENT_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  find_comment_by_employee: function(UCM_ID) {
    return fetch(`http://localhost:8090/rest/comment/user/${UCM_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  find_comment_by_id: function(COMMENT_ID) {
    return fetch(`http://localhost:8090/rest/comment/${COMMENT_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default commentController;