package test

import java.io.File
import java.lang.annotation.Annotation

import com.ttn.idp.service.ClassUtil
import javax.persistence.GeneratedValue
import org.apache.commons.io.FileUtils
import org.service.utility.json.JsonUtil

import scala.jdk.CollectionConverters._

object GenerateClassList extends App {

  val arr = Array[String]("java")
  val pojoNames = FileUtils.listFiles(new File("D:/git/lms2/lms2-service/src/main/java/com/ttn/lms/model"), arr, true).asScala.map(_.getName.replaceFirst(".java", ""))

  println(pojoNames)

  case class PojoSchema(pojo: String, fields: String, genCol: String, manyToOne: String)

  val schema = pojoNames.map(x => {
    PojoSchema(pojo = x, fields = ClassUtil.getPropSet(x).mkString(";"), genCol = getGenField(x), manyToOne = ClassUtil.getManyToOne(x).mkString(","))
  })

  println(JsonUtil.toJson(schema))

  def getGenField(pojo: String): String = {
    println(pojo)
    case class FieldAnnotation(field: String, anot: Annotation)
    Class.forName(s"com.ttn.lms.model.$pojo").getDeclaredFields.map(x => {

      FieldAnnotation(x.getName, x.getAnnotation(classOf[GeneratedValue]))

    }).filter(_.anot != null).head.field
  }


}
