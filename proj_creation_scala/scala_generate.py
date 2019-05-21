from string import Template

base_package = "com.ttn.anchor"

pojos = "Admin,Client,ClientUserMapper,Competency,CompetencyStatementMapper,EmailTemplate,Locale,Option,OptionGroup,Project,ProjectUserMapper,Statement,StatementLocale,Template,TemplateOptionLocale,User,UserResponseStore".split(
    ",")


def replace_string(path):
    with open(path, "r") as file:
        text = file.read()
        # print(text)
        pojo_lower = pojo.lower()
        out_text = Template(text).substitute(pojo=pojo, pojo_lower=pojo_lower, base_package=base_package) \
            .replace("{} ".format(pojo), pojo) \
            .replace("{} ".format(pojo_lower), pojo_lower) \
            .replace("{} ".format(base_package), base_package)
        return out_text


for pojo in pojos:
    print(pojo)
    # print(out_text)
    with open("target/json/{0}Json.scala".format(pojo), "w") as out_file:
        out_text = replace_string("source/PojoJson.scala")
        out_file.write(out_text)

    with open("target/repository/{0}Repository.scala".format(pojo), "w") as out_file:
        out_text = replace_string("source/PojoRepository.scala")
        out_file.write(out_text)

    with open("target/service/{0}Service.scala".format(pojo), "w") as out_file:
        out_text = replace_string("source/PojoService.scala")
        out_file.write(out_text)

    with open("target/impl/{0}ServiceImpl.scala".format(pojo), "w") as out_file:
        out_text = replace_string("source/PojoServiceImpl.scala")
        out_file.write(out_text)
