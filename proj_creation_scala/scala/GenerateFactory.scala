package test

import java.io.File

import org.apache.commons.io.FileUtils
import org.service.utility.json.JsonUtil
import org.springframework.web.bind.annotation.{GetMapping, PostMapping, RequestMapping}

import scala.collection.JavaConversions._


object GenerateFactory extends App {
  val arr = Array[String]("scala")
  val pojoNames = FileUtils.listFiles(new File("/home/biswajyoti/gitlab/ttpi2/PersonalityInventory/src/main/java/com/ttn/ttpi2/controller/rest"), arr, true).map(_.getName.replaceFirst(".scala", ""))

  println(pojoNames)

  case class ClassMethod(pojo: String, method: String, returnType: String, annotation: String, annotationMethod: String, path: String, classPath: String)

  val annotatedMethods = pojoNames.flatMap(pojo => {

    val classGen = Class.forName(s"com.ttn.ttpi2.controller.$pojo")
    println(classGen)

    val classPath = classGen.getDeclaredAnnotation(classOf[RequestMapping]).path().mkString(",")
    println(classPath)

    classGen.getDeclaredMethods.map(x => {

      var methodPath = ""
      var annotationMethod = ""
      var annotationClass = ""

      val getAnnot = x.getDeclaredAnnotation(classOf[GetMapping])
      if (getAnnot != null) {
        methodPath = getAnnot.path().mkString(",")
        annotationMethod = "GetMapping"
        annotationClass = getAnnot.toString
      }

      val postAnnot = x.getDeclaredAnnotation(classOf[PostMapping])
      if (postAnnot != null) {
        methodPath = postAnnot.path().mkString(",")
        annotationMethod = "PostMapping"
        annotationClass = postAnnot.toString
      }

      if (getAnnot != null || postAnnot != null) {
        ClassMethod(pojo = pojo, method = x.getName, returnType = x.getReturnType.getName, annotation = annotationClass, annotationMethod = annotationMethod, path = methodPath, classPath = classPath)
      } else {
        null
      }


    }).filterNot(_ == null)


  })

  println(JsonUtil.toJson(annotatedMethods))
}
