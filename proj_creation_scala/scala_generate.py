import os
from string import Template

import pandas as pd

base_package = "com.ttn.casestudy2"

df = pd.read_json("project_jsons/casestudy2.json", orient="records")
print(df)


def camel_case(str):
    return str[0].upper() + str[1:]


def replace_string(path, tup):
    with open(path, "r") as file:
        text = file.read()
        # print(text)
        pojo_camel = tup.pojo[0].lower() + tup.pojo[1:]
        pojo_lower = tup.pojo.lower()
        out_text = Template(text).substitute(pojo=tup.pojo, pojo_camel=pojo_camel, pojo_lower=pojo_lower,
                                             base_package=base_package,
                                             genId=tup.genCol, genId_camel=camel_case(tup.genCol)) \
            .replace("{} ".format(tup.pojo), tup.pojo) \
            .replace("{} ".format(pojo_camel), pojo_camel) \
            .replace("{} ".format(base_package), base_package)
        return out_text


dirs = ["target/controller", "target/service/impl", "target/service/json", "target/repository",
        "target/service/business"]
for dir in dirs:
    filelist = [f for f in os.listdir(dir) if f.endswith(".scala")]
    for f in filelist:
        os.remove(os.path.join(dir, f))

for tup in df.itertuples():
    print(tup)
    # print(out_text)
    with open("target/service/json/{0}Json.scala".format(tup.pojo), "w") as out_file:
        out_text = replace_string("source/PojoJson.scala", tup)
        out_file.write(out_text)

    with open("target/repository/{0}Repository.scala".format(tup.pojo), "w") as out_file:
        out_text = replace_string("source/PojoRepository.scala", tup)
        out_file.write(out_text)

    with open("target/service/business/{0}Service.scala".format(tup.pojo), "w") as out_file:
        out_text = replace_string("source/PojoService.scala", tup)
        out_file.write(out_text)

    with open("target/service/impl/{0}ServiceImpl.scala".format(tup.pojo), "w") as out_file:
        out_text = replace_string("source/PojoServiceImpl.scala", tup)
        out_file.write(out_text)

    with open("target/controller/Rest{0}Controller.scala".format(tup.pojo), "w") as out_file:
        out_text = replace_string("source/RestPojoController.scala", tup)
        out_file.write(out_text)
