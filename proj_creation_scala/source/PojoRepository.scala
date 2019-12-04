package $base_package .repository

import java.{lang, util}

import $base_package .model.$pojo
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import scala.jdk.CollectionConverters._
import $base_package .model._

@Repository
trait $pojo Repository extends JpaRepository[$pojo, lang.Long] {
    $code
}