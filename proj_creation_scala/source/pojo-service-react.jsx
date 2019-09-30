import ApiUtils from '../ApiUtils';
var {{pojo}}Controller = {

{% for tup in df.itertuples() %}
  {{tup.method}}: function({{tup.param}}) {
    return fetch("http://localhost:8090{{tup.request_path}}", {
      method: "{{tup.type}}",
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token"
        // 'Content-Type': 'application/x-www-form-urlencoded'
      })
    }).then(ApiUtils.checkStatus).then(res => res.json()).catch(e => e);
  },
{% endfor %}
};

export default {{pojo}}Controller;