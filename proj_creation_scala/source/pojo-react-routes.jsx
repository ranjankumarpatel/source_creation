{% for tup in df.itertuples() %}
import {{tup.pojo}}View from '../views/views/{{tup.pojo_lower}}-view';
{% endfor %}

import conf_prop from "../properties/properties";
const route_path = conf_prop.get("route_path");

var RestRoutes = [
{% for tup in df.itertuples() %}
    { path: `${route_path}/{{tup.pojo_lower}}`, name: '{{tup.pojo}}View', icon: 'mdi mdi-account-key', component: {{tup.pojo}}View },
{% endfor %}
];
export default RestRoutes;