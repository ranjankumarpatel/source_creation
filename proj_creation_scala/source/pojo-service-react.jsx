import ApiUtils from '../ApiUtils';
import conf_prop from '../../properties/properties';
import "whatwg-fetch";

const Inbasket{{pojo}}Controller = {

{% for tup in df.itertuples() %}
  {{tup.method}}: function({{ pojo if tup.type=='post' else tup.param }}) {
  const access_token = ApiUtils.getCookie("accessToken");

    return fetch(`${conf_prop.get("serviceUrl")}{{tup.request_path}}`, {
      method: "{{tup.type}}",
      {% if tup.type=='post' %}
      body: JSON.stringify({{pojo}}),
      {% endif %}
      headers: new Headers({
         Authorization: `Bearer ${access_token}`,
        {% if tup.type=='post' %}
         'Content-Type': 'application/json'
        {% endif %}
      })
    }).then(ApiUtils.checkStatus).then(res => res.json());
  },
{% endfor %}
};

export default Inbasket{{pojo}}Controller;