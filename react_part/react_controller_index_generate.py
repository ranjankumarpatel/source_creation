import json

import pandas as pd
from jinja2 import Template

with open("D:/git/source_creation/proj_creation_scala/project_jsons/nextv3-vdc.json",
          "r") as file:
    text = file.read()

json_data = json.loads(text)
# print(json_data)

df = pd.DataFrame(json_data)
# print(df)

with open("D:/git/source_creation/proj_creation_scala/source/pojo-service-react-index.jsx",
          "r") as file:
    temp_text = file.read()

out_text = Template(temp_text).render(df=df)
print(out_text)
