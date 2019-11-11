import ApiUtils from '../ApiUtils';
import conf_prop from '../../properties/properties'

var {{pojo}}Controller = {

{% for tup in df.itertuples() %}
  {{tup.method}}: function({{ pojo if tup.type=='post' else tup.param }}) {
    return fetch(`${conf_prop.get("serviceUrl")}{{tup.request_path}}`, {
      method: "{{tup.type}}",
      {% if tup.type=='post' %}
      body: JSON.stringify({{pojo}}),
      {% endif %}
      headers: new Headers({
        Authorization: "Bearer fake-jwt-token",
        {% if tup.type=='post' %}
         'Content-Type': 'application/json'
        {% endif %}
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },
{% endfor %}
};

export default {{pojo}}Controller;