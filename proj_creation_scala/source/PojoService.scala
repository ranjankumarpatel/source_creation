package $base_package .service.business

import $base_package .model.$pojo
import scala.jdk.CollectionConverters._

import $base_package .model._

trait $pojo Service {

  def findById($genId: Long): $pojo

  def insert$pojo($pojo_camel: $pojo): Unit

  def update$pojo($pojo_camel: $pojo): Unit

$code


}