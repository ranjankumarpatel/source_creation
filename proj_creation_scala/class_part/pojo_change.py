from string import Template

import pandas as pd


def camel_case(str):
    return str[0].upper() + str[1:]


# pojo = "Admin"

df = pd.read_json("F:/AWS_CODE_COMMIT/New folder/source_creation/proj_creation_scala/project_jsons/integr8.json",
                  orient="records")
print(df.head(1))
for pojo_dict in df.to_dict(orient="records"):
    pojo = pojo_dict.get("pojo")
    with open(
            "F:/AWS_CODE_COMMIT/New folder/integr8/integr8-service/src/main/java/com/ttn/integr8/model/{}.java".format(
                    pojo), "r") as file:
        text = file.read()
    arr = text.splitlines()
    print(arr)

    # filter
    class_str = [x for x in arr if "public class" in x][0]
    print(class_str)
    str_index = arr.index(class_str)
    pojo_camel = pojo[0].lower() + pojo[1:]
    arr.insert(str_index, '@JsonFilter("{}Filter")'.format(pojo_camel))

    # import
    class_str = [x for x in arr if "package" in x][0]
    print(class_str)
    str_index = arr.index(class_str) + 1
    str_insert = """import com.fasterxml.jackson.annotation.JsonFilter;
    import com.fasterxml.jackson.annotation.JsonProperty;
    import org.app.utility.security.AESEncryption;
    """
    arr.insert(str_index, str_insert)

    # parametrized constructor
    class_str = [x for x in arr if "public {}".format(pojo) in x][0]
    print(class_str)
    str_index = arr.index(class_str)
    str_holder = """    public $pojo(Long $genId) {
            this.$genId = $genId;
        }
    """
    str_insert = Template(str_holder).substitute(genId=pojo_dict.get("genCol"), pojo=pojo)
    arr.insert(str_index, str_insert)

    # enc
    str_index = len(arr) - 1
    print(str_index)
    str_holder = """    @JsonProperty
        public String $genId _ENCRYPTED() {
           return AESEncryption.encodeEncrypt(get$genId_camel().toString());
        }
    """
    str_insert = Template(str_holder).substitute(genId=pojo_dict.get("genCol"),
                                                 genId_camel=camel_case(pojo_dict.get("genCol"))).replace(
        "{} ".format(pojo_dict.get("genCol")), pojo_dict.get("genCol"))
    arr.insert(str_index, str_insert)

    pojo_change = "\n".join(arr)
    print(pojo_change)
    with open(
            "F:/AWS_CODE_COMMIT/New folder/integr8/integr8-service/src/main/java/com/ttn/integr8/model/{}.java".format(
                    pojo),
            "w") as w_file:
        w_file.write(pojo_change)
