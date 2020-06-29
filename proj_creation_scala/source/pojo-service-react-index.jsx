
{% for tup in df.itertuples() %}
export {default as VDC{{tup.pojo}}Controller} from './vdc-{{tup.pojo.lower()}}-controller';
{% endfor %}
