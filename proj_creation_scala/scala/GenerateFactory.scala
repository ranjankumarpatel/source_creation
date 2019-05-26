package test

import java.io.File

import org.apache.commons.io.FileUtils
import org.service.utility.json.JsonUtil

import scala.collection.JavaConversions._


object GenerateFactory extends App {
  val arr = Array[String]("scala")
  val pojoNames = FileUtils.listFiles(new File("D:/aws_git/casestudy_v2/caseStudy2-service/src/main/java/com/ttn/casestudy2/controller"), arr, true).map(_.getName.replaceFirst(".scala", ""))

  println(pojoNames)

  case class ClassMethod(pojo: String, method: String, returnType: String, annotation: String, annotationMethod: String, path: String)

  val annotatedMethods = pojoNames.map(pojo => {

    Class.forName(s"com.ttn.casestudy2.controller.$pojo").getDeclaredMethods.flatMap(x => {

      val annotation = x.getDeclaredAnnotations.filter(_.annotationType().getCanonicalName.contains("web"))
      //      annotation.foreach(println)
      //      println(x.getDeclaringClass.getSimpleName)


      annotation.map(a => {


        val path = a.annotationType().getMethod("path")
        val annotationClass = a.annotationType().getSimpleName

        path.getDefaultValue.asInstanceOf[Array[String]].foreach(println)

        ClassMethod(pojo = pojo, method = x.getName, returnType = x.getReturnType.getName, annotation = a.toString, annotationMethod = annotationClass, path = "")
      }).toList


    })


  })

  println(JsonUtil.toJson(annotatedMethods))
}
