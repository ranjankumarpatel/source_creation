package $base_package .service.impl

import $base_package .model.{Competency, Template}
import $base_package .repository.CompetencyRepository
import $base_package .service.business.CompetencyService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.{Propagation, Transactional}

import scala.collection.JavaConversions._

@Service
class $pojo ServiceImpl extends $pojo Service {

  @Autowired
  private var $pojo_lower Repository: $pojo Repository = _

  override def findById($genId: Long): $pojo = {

    $pojo_lower Repository.findOne(new $pojo($genId))

  }


  @Transactional(propagation = Propagation.REQUIRED)
  override def insert$pojo ($pojo_lower: $pojo ): Unit = {

    $pojo_lower.setGenDate(DateUtility.getCurrentTimeStamp)
    $pojo_lower.setStatus("Y")
    $pojo_lower Repository.save($pojo_lower)

  }

  @Transactional(propagation = Propagation.REQUIRED)
  override def update $pojo ($pojo_lower: $pojo ): Unit = {
    var update $pojo : $pojo  = $pojo_lower Repository.findOne()



    $pojo_lower Repository.save(update $pojo )

  }

}