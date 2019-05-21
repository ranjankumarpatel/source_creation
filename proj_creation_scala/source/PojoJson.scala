package $base_package .service.json

import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider
import $base_package .model.$pojo
import org.springframework.stereotype.Component

@Component
class $pojo Json {

  val filterProvider = new SimpleFilterProvider()
  addFilter(filterProvider, "$pojo_lower Filter", Set(), "$pojo")


  def getJson($pojo_lower: $pojo): String = {
    getObjectMapper(filterProvider).writeValueAsString($pojo_lower)
  }

  def getJson($pojo_lower: List[$pojo]): String = {
    getObjectMapper(filterProvider).writeValueAsString($pojo_lower)
  }

}
