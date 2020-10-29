
{% for tup in df.itertuples() %}
export {default as Inbasket{{tup.pojo}}Controller} from './inbasket-{{tup.pojo.lower().replace("rest","")}}-controller';
{% endfor %}
