
{% for tup in df.itertuples() %}
export {default as Anchor{{tup.pojo}}Controller} from './anchor-{{tup.pojo.lower().replace("rest","")}}-controller';
{% endfor %}
