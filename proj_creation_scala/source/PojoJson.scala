package $base_package .service.json

import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider
import $base_package .model.$pojo
import org.springframework.stereotype.Component
import scala.jdk.CollectionConverters._

@Component
class $pojo Json {

  val filterProvider = new SimpleFilterProvider()
  addFilter(filterProvider, "$pojo_camel Filter", Set(), classOf[$pojo])


  def getJson($pojo_camel: $pojo): String = {
    getObjectMapper(filterProvider).writeValueAsString($pojo_camel)
  }

  def getJson($pojo_camel: List[$pojo]): String = {
    getObjectMapper(filterProvider).writeValueAsString($pojo_camel)
  }

}
