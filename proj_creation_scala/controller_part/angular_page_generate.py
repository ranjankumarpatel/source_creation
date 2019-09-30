import json
from string import Template

import pandas as pd

with open("D:/git/source_creation/proj_creation_scala/project_jsons/idp.json", "r") as file:
    text = file.read()

json_data = json.loads(text)
print(json_data)

df = pd.DataFrame(json_data)

# df["request_path"] = df.classPath + df.path
# df.request_path = df.request_path.map(lambda x: x.replace("{", ":").replace("}", ""))
print(df.head())


def camel_case(str):
    return str[0].upper() + str[1:]


def replace_string(path, tup, code, code_th_text, code_td_text, code_insert_text, code_update_text):
    with open(path, "r") as file:
        text = file.read()
        # print(text)
        pojo_camel = tup.pojo[0].lower() + tup.pojo[1:]
        pojo_lower = tup.pojo.lower()
        out_text = Template(text).substitute(pojo=tup.pojo,
                                             pojo_camel=pojo_camel,
                                             pojo_lower=pojo_lower,
                                             genId=tup.genCol,
                                             code=code, code_th_text=code_th_text, code_td_text=code_td_text,
                                             code_insert_text=code_insert_text, code_update_text=code_update_text) \
            .replace("{} ".format(tup.pojo), tup.pojo) \
            .replace("{} ".format(pojo_lower), pojo_lower) \
            .replace("{} ".format(pojo_camel), pojo_camel) \
            .replace("{} ".format(tup.genCol), tup.genCol) \
            .replace("_scope", "$scope") \
            .replace("_(", "$(")
        return out_text


for tup in df.itertuples():

    pojo_camel = tup.pojo[0].lower() + tup.pojo[1:]
    pojo_lower = tup.pojo.lower()

    th_td_col = [x for x in tup.fields.split(";") if not (("_ENCRYPTED" in x) or ("status" in x.lower()))]

    # col th ggenerate
    col_th_arr = []
    for col in th_td_col:
        repo_text = """<th>{}</th>""".format(camel_case(col))
        col_th_arr.append(repo_text)
    code_th_text = "\n".join(col_th_arr)

    # col td generate
    col_td_arr = []
    for col in th_td_col:
        repo_text = """<td data-ng-bind="{pojo_lower}.{col}"></td>""".format(pojo_lower=pojo_lower, col=col)
        col_td_arr.append(repo_text)
    code_td_text = "\n".join(col_td_arr)

    insert_update_cols = [x for x in tup.fields.split(";") if not
    (("status" in x.lower()) or ("timestamp" in x.lower()) or ("genDate" in x.lower()) or (
            "_ENCRYPTED" in x) or (x == tup.genCol) or ("gendate" in x.lower()))]

    print(insert_update_cols)
    # col insert from part
    col_insert_arr = []
    for col in insert_update_cols:
        repo_text = """<div class="form-group">
                                    <label for="insert-{col}" class="control-label">{col}:</label>
                                    <input type="text" class="form-control" id="insert-{col}"
                                        data-ng-model="new{pojo}.{col}" required="true" data-parsley-required="true">
                                </div>""".format(pojo=tup.pojo, pojo_lower=pojo_lower, col=col)
        col_insert_arr.append(repo_text)
    code_insert_text = "\n".join(col_insert_arr)

    # col update from part
    col_update_arr = []
    for col in insert_update_cols:
        repo_text = """<div class="form-group">
                                        <label for="update-{col}" class="control-label">{col}:</label>
                                        <input type="text" class="form-control" id="update-{col}"
                                            data-ng-model="update{pojo}.{col}" required="true" data-parsley-required="true">
                                    </div>""".format(pojo=tup.pojo, pojo_lower=pojo_lower, col=col)
        col_update_arr.append(repo_text)
    code_update_text = "\n".join(col_update_arr)

    out_text = replace_string("D:/git/source_creation/proj_creation_scala/source/pojo.html", tup, "", code_th_text,
                              code_td_text, code_insert_text, code_update_text)
    # print(out_text)

    with open("D:/gitlab/idp/idp-node-angular/views/pages/rest/{0}.ejs".format(
            tup.pojo.lower()), "w") as out_file:
        out_file.write(out_text)
