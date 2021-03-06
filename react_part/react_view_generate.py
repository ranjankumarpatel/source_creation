import json
from string import Template

import pandas as pd
from jinja2 import Template as JTemplate

with open("D:/git/source_creation/proj_creation_scala/project_jsons/anchor2-author.json", "r") as file:
    text = file.read()

json_data = json.loads(text)
# print(json_data)

df = pd.DataFrame(json_data)


# df["request_path"] = df.classPath + df.path
# df.request_path = df.request_path.map(lambda x: x.replace("{", ":").replace("}", ""))
# print(df.head())


def camel_case(str):
    return str[0].upper() + str[1:]


def replace_string(path, tup, code):
    with open(path, "r") as file:
        text = file.read()
        print(tup)
        pojo_camel = tup.pojo[0].lower() + tup.pojo[1:]
        pojo_lower = tup.pojo.lower()

        fields = [x for x in tup.fields.split(";") if "_" not in x]
        id_fields = tup.genCol
        print(fields, id_fields)

        out_text = Template(text).safe_substitute(pojo=tup.pojo,
                                                  pojo_camel=pojo_camel,
                                                  pojo_lower=pojo_lower,
                                                  genId=tup.genCol,
                                                  code=code, id_fields=id_fields) \
            .replace("{} ".format(tup.pojo), tup.pojo) \
            .replace("{} ".format(pojo_lower), pojo_lower) \
            .replace("{} ".format(pojo_camel), pojo_camel) \
            .replace("_scope", "$scope") \
            .replace("_(", "$(")

        out_text = JTemplate(out_text).render(fields=fields, id_fields=id_fields)
        return out_text


for tup in df.itertuples():
    out_text = replace_string("D:/git/source_creation/proj_creation_scala/source/pojo-view-react.jsx", tup, "")
    print(out_text)

    with open(
            "D:/git/source_creation/target/react/{0}-view.jsx".format(
                tup.pojo.lower()), "w") as out_file:
        out_file.write(out_text)
