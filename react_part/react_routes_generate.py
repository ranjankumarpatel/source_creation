import json

import pandas as pd
from jinja2 import Template


def extract_param(txt):
    import re

    re1 = '(\\{.*?\\})'  # Curly Braces 1

    rg = re.compile(re1, re.IGNORECASE | re.DOTALL)
    m = rg.search(txt)
    if m:
        cbraces1 = m.group(1)
        cbraces1 = cbraces1.replace("{", "").replace("}", "")
        print(cbraces1)
        return cbraces1


with open("F:/github/source_creation/proj_creation_scala/project_jsons/lms2.json", "r") as file:
    text = file.read()

json_data = json.loads(text)
print(json_data)

df = pd.DataFrame(json_data)

# df["pojo"] = df.pojo.str.replace("Rest", "").str.replace("Controller", "")
df["pojo_camel"] = df.pojo.map(lambda x: x[0].lower() + x[1:])
df["pojo_lower"] = df.pojo.str.lower()
# df.request_path = df.request_path.map(lambda x: x.replace("{", ":").replace("}", ""))
print(df.head())


def camel_case(str):
    return str[0].upper() + str[1:]


def replace_string(path, df):
    with open(path, "r") as file:
        text = file.read()
        # print(text)
        out_text = Template(text).render(df=df).replace("None", "")
        return out_text


out_text = replace_string("F:/github/source_creation/proj_creation_scala/source/pojo-react-routes.jsx", df)
print(out_text)

with open(
        "F:/GIT/lms2/lms2-node-react/src/routes/RestRoutes.jsx", "w") as out_file:
    out_file.write(out_text)
