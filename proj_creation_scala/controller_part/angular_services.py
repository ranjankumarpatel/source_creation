import json

import pandas as pd

with open("D:/git/source_creation/proj_creation_scala/project_jsons/casestudy2-controller.json", "r") as file:
    text = file.read()

json_data = json.loads(text)
print(json_data)

df = pd.DataFrame(json_data)

# print(df.head())


df["request_path"] = df.classPath + df.path
df["request_path"] = df.request_path.map(lambda x: x.replace(""))
print(df.head())

service_script = """<script type="text/javascript"
    src="/angular/service?services={service}&amp;factory={factory}&amp;factoryUrl={factoryUrl}">
</script>"""

script = []
for pojo in df.pojo.drop_duplicates():
    service = pojo.lower().replace("controller", "-service").replace("rest", "")

    df_service = df[df.pojo == pojo]

    factory_prefix = pojo.lower().replace("controller", "").replace("rest", "")
    factory = ",".join(factory_prefix + "_" + df_service.method.values + "Factory")
    factoryUrl = ",".join(df_service.request_path.values)

    serv = service_script.format(service=service, factory=factory, factoryUrl=factoryUrl)
    script.append(serv)

script_text = "\n".join(script)

print(script_text)

with open("D:/git/source_creation/proj_creation_scala/target/script/angular-service.js", "w") as script_file:
    script_file.write(script_text)
