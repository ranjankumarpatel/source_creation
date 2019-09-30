{% for tup in df.itertuples() %}
import {{tup.pojo}}View from '../views/rest/{{tup.pojo_lower}}-view';
{% endfor %}

var RestRoutes = [
{% for tup in df.itertuples() %}
    { path: '/rest/{{tup.pojo_lower}}', name: '{{tup.pojo}}View', icon: 'mdi mdi-account-key', component: {{tup.pojo}}View },
{% endfor %}
];
export default RestRoutes;