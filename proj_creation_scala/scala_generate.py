import os
from string import Template

import pandas as pd

base_package = "com.ttn.anchor"

df = pd.read_json("D:/git/source_creation/proj_creation_scala/project_jsons/anchor2-author.json", orient="records")
print(df)

target_path = "D:/git/source_creation/target"


def camel_case(str):
    return str[0].upper() + str[1:]


def replace_string(path, tup, code, get_set_script):
    with open(path, "r") as file:
        text = file.read()
        # print(text)
        pojo_camel = tup.pojo[0].lower() + tup.pojo[1:]
        pojo_lower = tup.pojo.lower()
        out_text = Template(text).substitute(pojo=tup.pojo, pojo_camel=pojo_camel, pojo_lower=pojo_lower,
                                             base_package=base_package,
                                             genId=tup.genCol, genId_camel=camel_case(tup.genCol), code=code,
                                             get_set_script=get_set_script) \
            .replace("{} ".format(tup.pojo), tup.pojo) \
            .replace("{} ".format(pojo_camel), pojo_camel) \
            .replace("{} ".format(base_package), base_package)
        return out_text


dirs = [target_path + "/controller",
        target_path + "/service/impl",
        # "D:/aws_git/assess2/assess2-service/src/main/java/com/ttn/assess2/service/json",
        target_path + "/repository",
        target_path + "/service/business"]
for dir in dirs:
    filelist = [f for f in os.listdir(dir) if f.endswith(".scala")]
    for f in filelist:
        os.remove(os.path.join(dir, f))

# raise Exception()
for tup in df.itertuples():
    pojo_camel = tup.pojo[0].lower() + tup.pojo[1:]
    pojo_lower = tup.pojo.lower()
    print(tup)
    # print(out_text)
    with open(
            target_path + "/service/json/{0}Json.scala".format(
                tup.pojo), "w") as out_file:
        out_text = replace_string("source/PojoJson.scala", tup, "", "")
        out_file.write(out_text)

    with open(
            target_path + "/repository/{0}Repository.scala".format(
                tup.pojo), "w") as out_file:
        mone_arr = []
        if tup.manyToOne != "":
            for mone in tup.manyToOne.split(","):
                repo_text = """\tdef findBy{moneClass}({mone} : {moneClass}):util.List[{pojo}]""".format(
                    pojo=tup.pojo, mone=mone, moneClass=camel_case(mone))
                mone_arr.append(repo_text)
        code_text = "\n".join(mone_arr)

        out_text = replace_string("source/PojoRepository.scala", tup, code_text, "")

        out_file.write(out_text)

    with open(
            target_path + "/service/business/{0}Service.scala".format(
                tup.pojo), "w") as out_file:
        mone_arr = []
        if tup.manyToOne != "":
            for mone in tup.manyToOne.split(","):
                repo_text = """\tdef findBy{moneClass}({mone} : {moneClass}):List[{pojo}]""".format(
                    pojo=tup.pojo, mone=mone, moneClass=camel_case(mone))
                mone_arr.append(repo_text)
        code_text = "\n".join(mone_arr)

        out_text = replace_string("source/PojoService.scala", tup, code_text, "")
        out_file.write(out_text)

    with open(
            target_path + "/service/impl/{0}ServiceImpl.scala".format(
                tup.pojo), "w") as out_file:

        get_set_arr = []
        for field in [x for x in tup.fields.split(";") if
                      (x not in [tup.genCol, "genDate", "status"] and ("_ENCRYPTED" not in x))]:
            col_camel = camel_case(field)
            get_set_arr.append(
                """update{pojo}.set{col_camel}({pojo_camel}.get{col_camel})""".format(pojo=tup.pojo,
                                                                                      pojo_camel=pojo_camel,
                                                                                      col_camel=col_camel))
        get_set_script = "\n".join(get_set_arr)
        mone_arr = []
        if tup.manyToOne != "":
            for mone in tup.manyToOne.split(","):
                repo_text = Template("""\toverride def findBy$moneClass($mone : $moneClass):List[$pojo] = {
                $pojo_camel Repository.findBy$moneClass($mone).asScala.toList
                }""").substitute(
                    pojo=tup.pojo, mone=mone, moneClass=camel_case(mone), pojo_camel=pojo_camel).replace(
                    "{} ".format(pojo_camel), pojo_camel)
                mone_arr.append(repo_text)
        code_text = "\n".join(mone_arr)

        out_text = replace_string("source/PojoServiceImpl.scala", tup, code_text, get_set_script)
        out_file.write(out_text)

    with open(
            target_path + "/controller/rest/Rest{0}Controller.scala".format(
                tup.pojo), "w") as out_file:

        mone_arr = []
        if tup.manyToOne != "":
            for mone in tup.manyToOne.split(","):
                print(mone)
                mone_df = df[df.pojo == camel_case(mone)].to_dict(orient="records")[0]
                print(mone_df)

                repo_text = Template("""\t@Transactional(readOnly = true)
                \t@GetMapping(path = Array("/$mone_lower/{$moneid}"))
                \tdef findBy$moneClass(@PathVariable("$moneid") $moneid _ENCRYPTED : String):String = {
                        val $moneid = AESEncryption.decrypt($moneid _ENCRYPTED).toLong
                        val $pojo s = $pojo_camel Service.findBy$moneClass(new $moneClass($moneid))
                        $pojo_camel Json.getJson($pojo s)
                        }""").substitute(
                    pojo=tup.pojo, mone=mone, moneClass=camel_case(mone), pojo_camel=pojo_camel,
                    mone_lower=mone.lower(), moneid=mone_df.get("genCol")).replace(
                    "{} ".format(pojo_camel), pojo_camel).replace(
                    "{} ".format(tup.pojo), tup.pojo)
                mone_arr.append(repo_text)
        code_text = "\n".join(mone_arr)

        out_text = replace_string("source/RestPojoController.scala", tup, code_text, "")
        out_file.write(out_text)
