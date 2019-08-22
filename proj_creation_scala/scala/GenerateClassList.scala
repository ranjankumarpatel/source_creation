package test

import java.io.File
import java.lang.annotation.Annotation

import com.ttn.ttpi2.service.ClassUtil
import javax.persistence.GeneratedValue
import org.apache.commons.io.FileUtils
import org.service.utility.json.JsonUtil

import scala.collection.JavaConversions._

object GenerateClassList extends App {

  val arr = Array[String]("java")
  val pojoNames = FileUtils.listFiles(new File("/home/biswajyoti/gitlab/ttpi2/PersonalityInventory/src/main/java/com/ttn/ttpi2/model"), arr, true).map(_.getName.replaceFirst(".java", ""))

  println(pojoNames)

  case class PojoSchema(pojo: String, fields: String, genCol: String, manyToOne: String)

  val schema = pojoNames.map(x => {
    PojoSchema(pojo = x, fields = ClassUtil.getPropSet(x).mkString(";"), genCol = getGenField(x), manyToOne = ClassUtil.getManyToOne(x).mkString(","))
  })

  println(JsonUtil.toJson(schema))

  def getGenField(pojo: String): String = {
    println(pojo)
    case class FieldAnnotation(field: String, anot: Annotation)
    Class.forName(s"com.ttn.ttpi2.model.$pojo").getDeclaredFields.map(x => {

      FieldAnnotation(x.getName, x.getAnnotation(classOf[GeneratedValue]))

    }).filter(_.anot != null).head.field
  }


}
