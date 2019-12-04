package $base_package .service.impl

import $base_package .model.$pojo
import $base_package .repository.$pojo Repository
import $base_package .service.business.$pojo Service
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.{Propagation, Transactional}
import org.app.utility.util.DateUtility
import scala.jdk.CollectionConverters._
import $base_package .model._

@Service
class $pojo ServiceImpl extends $pojo Service {

  @Autowired
  private var $pojo_camel Repository: $pojo Repository = _

  override def findById($genId: Long): $pojo = {

    $pojo_camel Repository.getOne($genId)

  }


  @Transactional(propagation = Propagation.REQUIRED)
  override def insert$pojo ($pojo_camel: $pojo ): Unit = {

    //$pojo_camel.setGenDate(DateUtility.getCurrentTimeStamp)
    //$pojo_camel.setStatus("Y")
    $pojo_camel Repository.save($pojo_camel)

  }

  @Transactional(propagation = Propagation.REQUIRED)
  override def update$pojo ($pojo_camel: $pojo ): Unit = {
    var update$pojo : $pojo  = $pojo_camel Repository.getOne($pojo_camel.get$genId_camel)

    //update$pojo.setGenDate(DateUtility.getCurrentTimeStamp)

    $get_set_script

    $pojo_camel Repository.save(update$pojo )

  }

  $code

}