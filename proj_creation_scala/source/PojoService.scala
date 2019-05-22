package $base_package .service.business

import $base_package .model.$pojo

trait $pojo Service {

  def findById($genId: Long): $pojo

  def insert$pojo($pojo_lower: $pojo): Unit

  def update$pojo($pojo_lower: $pojo): Unit


}