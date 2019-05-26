import json

import pandas as pd

with open("D:/git/source_creation/proj_creation_scala/project_jsons/casestudy2-controller.json", "r") as file:
    text = file.read()

json_data = json.loads(text)
print(json_data)
arr = []
for i in json_data:
    arr.extend(i)
print(arr)

df = pd.DataFrame(arr)


# print(df.head())


def get_path(data):
    str = data.replace("@org.springframework.web.bind.annotation.", "") \
        .replace("PostMapping(", "") \
        .replace("GetMapping(", "") \
        .replace(",", "") \
        .replace("params=[]", "") \
        .replace("produces=[]", "") \
        .replace("headers=[]", "") \
        .replace("value=[]", "") \
        .replace("name=", "") \
        .replace("consumes=[application/json;charset=UTF-8]", "") \
        .replace(")", "") \
        .replace("path=", "") \
        .replace("[", "") \
        .replace("]", "") \
        .replace("}", "").replace("{", ":").strip()

    return str


df.path = df.annotation.map(get_path)
print(df.head())

service_script = """<script type="text/javascript"
    src="/angular/service?services={service}&amp;factory={factory}&amp;factoryUrl={factoryUrl}">
</script>"""

script = []
for pojo in df.pojo.drop_duplicates():
    service = pojo.lower().replace("controller", "-service").replace("rest", "")

    df_service = df[df.pojo == pojo]

    factory = ",".join(df_service.method.values)
    factoryUrl = ",".join(df_service.path.values)

    serv = service_script.format(service=service, factory=factory, factoryUrl=factoryUrl)
    script.append(serv)

script_text = "\n".join(script)

print(script_text)

with open("D:/git/source_creation/proj_creation_scala/target/script/angular-service.js", "w") as script_file:
    script_file.write(script_text)
