import ApiUtils from '../ApiUtils';
var site_mapController = {


  site_map: function() {
    return fetch(`http://localhost:8090/site-map`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default site_mapController;