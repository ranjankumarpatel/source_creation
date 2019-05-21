package $base_package .service.impl

import $base_package .model.{Competency, Template}
import $base_package .repository.CompetencyRepository
import $base_package .service.business.CompetencyService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.{Propagation, Transactional}

import scala.collection.JavaConversions._

@Service
class CompetencyServiceImpl extends CompetencyService {

  @Autowired
  private var competencyRepository: CompetencyRepository = _

  override def findByTempId(templateId: Long): List[Competency] = {

    competencyRepository.findByTemplate(new Template(templateId)).toList

  }


  @Transactional(propagation = Propagation.REQUIRED)
  override def insertCompetency(competency: Competency): Unit = {

    competency.setStatus("Y")
    competencyRepository.save(competency)

  }

  @Transactional(propagation = Propagation.REQUIRED)
  override def updateCompetency(competency: Competency): Unit = {
    var chkCompetency: Competency = competencyRepository.findOne(competency.getCompetencyId)

    chkCompetency.setStatus("Y")
    chkCompetency.setCompetencyName(competency.getCompetencyName)
    chkCompetency.setTemplate(competency.getTemplate)

    competencyRepository.save(chkCompetency)

  }

}