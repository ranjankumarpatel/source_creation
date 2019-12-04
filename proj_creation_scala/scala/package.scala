package com.ttn.idp.service

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.ser.impl.{SimpleBeanPropertyFilter, SimpleFilterProvider}
import org.service.utility.json.JsonUtil

package object json {
  def getObjectMapper(simpleFilterProvider: SimpleFilterProvider): ObjectMapper = {
    val mapper = JsonUtil.getObjectMapper
    mapper.setFilterProvider(simpleFilterProvider)
    mapper
  }

  def getPropertyFilter(propertySet: Set[String]): SimpleBeanPropertyFilter = JsonUtil.getPropertyFilter(propertySet)


  //  def addFilter(filterProvider: SimpleFilterProvider, filterName: String, propertySet: Set[String]): Unit = JsonUtil.addFilter(filterProvider, filterName, propertySet)

  def addFilter(filterProvider: SimpleFilterProvider, filterName: String, propertySet: Set[String], className: String): Unit = {
    val propSet = scala.collection.mutable.Set[String]()
    propSet.++=(propertySet)
    propSet.++=(getPropSet(className))
    println(propSet)
    filterProvider.addFilter(filterName, getPropertyFilter(propSet.toSet))
  }

  def addFilter(filterProvider: SimpleFilterProvider, filterName: String, propertySet: Set[String], className: Class[_]): Unit = {
    val propSet = scala.collection.mutable.Set[String]()
    propSet.++=(propertySet)
    propSet.++=(getPropSet(className))
    println(propSet)
    filterProvider.addFilter(filterName, getPropertyFilter(propSet.toSet))
  }

  def getPropSet(className: Class[_]): Set[String] = {
    ClassUtil.getPropSet(className)

  }

  def getPropSet(className: String): Set[String] = {
    ClassUtil.getPropSet(className)
  }

}
