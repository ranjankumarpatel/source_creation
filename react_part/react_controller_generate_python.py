import json

import pandas as pd
from jinja2 import Template


def extract_param(txt):
    # print(txt)
    import re

    re1 = '(\\{.*?\\})'  # Curly Braces 1

    rg = re.compile(re1, re.IGNORECASE | re.DOTALL)
    m = rg.search(txt)
    if m:
        cbraces1 = m.group(1)
        cbraces1 = cbraces1.replace("{", "").replace("}", "")
        # print(txt, cbraces1)
        return cbraces1


with open("/home/thinktalentuser/github/source_creation/proj_creation_scala/project_jsons/connect-controller.json", "r",
          encoding="utf8") as file:
    text = file.read()

json_data = json.loads(text)
# print(json_data)

df = pd.DataFrame(json_data)
df["param"] = df.path.map(extract_param)
df["type"] = df.type.str.lower()
df["request_path"] = df.path.str.replace("{", "${")
df["pojo"] = df.blueprint
df["pojo_camel"] = df.pojo.map(lambda x: x[0].lower() + x[1:])
df["pojo_lower"] = df.pojo.str.lower()
# df.request_path = df.request_path.map(lambda x: x.replace("{", ":").replace("}", ""))
print(df.head())


def camel_case(str):
    return str[0].upper() + str[1:]


def replace_string(path, df, pojo):
    with open(path, "r") as file:
        text = file.read()
        # print(text)
        out_text = Template(text).render(df=df, pojo=pojo).replace("None", "")
        return out_text


for pojo in df.pojo:
    df_pojo = df[df.pojo == pojo]
    out_text = replace_string("/home/thinktalentuser/github/source_creation/proj_creation_scala/source/pojo-service-react.jsx", df_pojo,
                              pojo)
    print(out_text)

    with open(
            "F:/GIT/lms2/lms2-node-react/src/api/controller/{0}-controller.jsx".format(
                pojo.lower()), "w") as out_file:
        out_file.write(out_text)
