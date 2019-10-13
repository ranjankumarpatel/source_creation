import ApiUtils from '../ApiUtils';
var dashboardController = {


  wipro_tracker_details: function() {
    return fetch(`http://localhost:8090/rest/dashboard/non-lms-point`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

  lms_wipro_tracker_details: function() {
    return fetch(`http://localhost:8090/rest/dashboard/lms-point`, {
      method: "get",
      
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },

};

export default dashboardController;