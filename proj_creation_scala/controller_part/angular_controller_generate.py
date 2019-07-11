import json
from string import Template

import pandas as pd

with open("D:/git/source_creation/proj_creation_scala/project_jsons/roleplay2.json", "r") as file:
    text = file.read()

json_data = json.loads(text)
print(json_data)

df = pd.DataFrame(json_data)

# df["request_path"] = df.classPath + df.path
# df.request_path = df.request_path.map(lambda x: x.replace("{", ":").replace("}", ""))
print(df.head())


def camel_case(str):
    return str[0].upper() + str[1:]


def replace_string(path, tup, code):
    with open(path, "r") as file:
        text = file.read()
        # print(text)
        pojo_camel = tup.pojo[0].lower() + tup.pojo[1:]
        pojo_lower = tup.pojo.lower()
        out_text = Template(text).substitute(pojo=tup.pojo,
                                             pojo_camel=pojo_camel,
                                             pojo_lower=pojo_lower,
                                             genId=tup.genCol,
                                             code=code) \
            .replace("{} ".format(tup.pojo), tup.pojo) \
            .replace("{} ".format(pojo_lower), pojo_lower) \
            .replace("{} ".format(pojo_camel), pojo_camel) \
            .replace("_scope", "$scope") \
            .replace("_(", "$(")
        return out_text


for tup in df.itertuples():
    out_text = replace_string("D:/git/source_creation/proj_creation_scala/source/pojo-controller.js", tup, "")
    print(out_text)

    with open(
            "D:/aws_git/roleplay_v2/roleplayv2-author-node-angular/public/angular/controller/{0}-controller.js".format(
                tup.pojo.lower()), "w") as out_file:
        out_file.write(out_text)
