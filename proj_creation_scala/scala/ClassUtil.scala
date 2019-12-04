package com.ttn.lms.service

import java.lang.reflect.{Field, Method}

import scala.collection.mutable

object ClassUtil {

  def includeTypeFilter(x: Field): Boolean = {
    val typeName = x.getType.getTypeName
    if (typeName.contains("lang") || typeName.contains("util") || typeName.contains("sql")) {
      true
    } else {
      false
    }
  }

  def includeMethodTypeFilter(x: Method): Boolean = {
    val typeName = x.getName
    if (typeName.contains("_ENCRYPTED")) {
      true
    } else {
      false
    }
  }

  def excludeTypeFilter(x: Field): Boolean = {
    val typeName = x.getType.getTypeName
    if (typeName.contains("List")) {
      true
    } else {
      false
    }
  }


  def getPropSet(className: String): Set[String] = {


    var propSet = mutable.Set[String]()
    propSet.++=(Class.forName(s"com.ttn.lms.model.$className").getDeclaredFields.filterNot(x => x.getName == "serialVersionUID").filter(includeTypeFilter).filterNot(excludeTypeFilter).map(_.getName).toSet)
    propSet.++=(Class.forName(s"com.ttn.lms.model.$className").getDeclaredMethods.filterNot(x => x.getName == "serialVersionUID").filter(includeMethodTypeFilter).map(_.getName).toSet)

    propSet.toSet
  }

  def getPropSet(className: Class[_]): Set[String] = {


    var propSet = mutable.Set[String]()
    propSet.++=(className.getDeclaredFields.filterNot(x => x.getName == "serialVersionUID").filter(includeTypeFilter).filterNot(excludeTypeFilter).map(_.getName).toSet)
    propSet.++=(className.getDeclaredMethods.filterNot(x => x.getName == "serialVersionUID").filter(includeMethodTypeFilter).map(_.getName).toSet)

    propSet.toSet
  }

  def getManyToOne(className: String): Set[String] = {


    var propSet = mutable.Set[String]()
    propSet.++=(Class.forName(s"com.ttn.lms.model.$className")
      .getDeclaredFields.filterNot(x => x.getName == "serialVersionUID")
      .filterNot(x => x.getType.getSimpleName == "byte[]")
      .filterNot(includeTypeFilter)
      .filterNot(excludeTypeFilter).map(_.getName).toSet)


    propSet.toSet
  }

}

