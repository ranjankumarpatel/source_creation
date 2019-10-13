import ApiUtils from '../ApiUtils';
var docsController = {


  view_docs_list: function() {
    return fetch(`http://localhost:8090/rest/docs/`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  view_docs_list: function() {
    return fetch(`http://localhost:8090/rest/docs`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  docs_remove: function(DOCS_ID) {
    return fetch(`http://localhost:8090/rest/docs/remove/${DOCS_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  docs_url_by_id: function(DOCS_ID) {
    return fetch(`http://localhost:8090/rest/docs/url/${DOCS_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  docs_by_id: function(DOCS_ID) {
    return fetch(`http://localhost:8090/rest/docs/${DOCS_ID}`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default docsController;