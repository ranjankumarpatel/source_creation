import json

import pandas as pd

with open("D:/git/source_creation/proj_creation_scala/project_jsons/next360-controller.json", "r") as file:
    text = file.read()

json_data = json.loads(text)
print(json_data)

df = pd.DataFrame(json_data)

# print(df.head())


df["request_path"] = df.classPath + df.path
df.request_path = df.request_path.map(lambda x: x.replace("{", ":").replace("}", ""))
print(df.head())

service_script = """<script type="text/javascript"
    src="/angular/service?services={service}&amp;factory={factory}&amp;factoryUrl={factoryUrl}">
</script>"""

services = []
script = []
for pojo in df.pojo.drop_duplicates():
    service = pojo.lower().replace("controller", "-service").replace("rest", "")
    services.append(service)
    df_service = df[df.pojo == pojo]

    factory_prefix = pojo.lower().replace("controller", "").replace("rest", "")
    factory = ",".join(factory_prefix + "_" + df_service.method.values + "Factory")
    factoryUrl = ",".join(df_service.request_path.values)

    serv = service_script.format(service=service, factory=factory, factoryUrl=factoryUrl)
    script.append(serv)

service_text = "\n".join(script)

app_script = """<script type="text/javascript" src="/angular/app?services={service}"></script>""".format(
    service=",".join(services))

script_text = service_text + "\n" + app_script
print(script_text)

with open("D:/aws_git/next360/360_author_node/views/scripts/angular-services.ejs", "w") as script_file:
    script_file.write(script_text)
