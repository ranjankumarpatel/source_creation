import ApiUtils from '../ApiUtils';
var userinfoController = {


  userinfo_profile_upload: function(userinfo) {
    return fetch(`http://localhost:8090/rest/userinfo/upload/profile`, {
      method: "post",
      
      body: JSON.stringify(userinfo),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  userinfo_email_validation: function(userinfo) {
    return fetch(`http://localhost:8090/rest/userinfo/email/validation`, {
      method: "post",
      
      body: JSON.stringify(userinfo),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  validata_user_email: function(userinfo) {
    return fetch(`http://localhost:8090/rest/userinfo/validate-email`, {
      method: "post",
      
      body: JSON.stringify(userinfo),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  username_password_auth: function(userinfo) {
    return fetch(`http://localhost:8090/rest/userinfo/validate`, {
      method: "post",
      
      body: JSON.stringify(userinfo),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  view_userinfo_list: function() {
    return fetch(`http://localhost:8090/rest/userinfo/`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  view_userinfo_list: function() {
    return fetch(`http://localhost:8090/rest/userinfo`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  userinfo_insert: function(userinfo) {
    return fetch(`http://localhost:8090/rest/userinfo/`, {
      method: "post",
      
      body: JSON.stringify(userinfo),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  userinfo_insert: function(userinfo) {
    return fetch(`http://localhost:8090/rest/userinfo`, {
      method: "post",
      
      body: JSON.stringify(userinfo),
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
         'Content-Type': 'application/json'
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  get_userinfo_photo: function(USER_ID) {
    return fetch(`http://localhost:8090/rest/userinfo/photo/${USER_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  get_userinfo: function(USER_ID) {
    return fetch(`http://localhost:8090/rest/userinfo/id/${USER_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default userinfoController;