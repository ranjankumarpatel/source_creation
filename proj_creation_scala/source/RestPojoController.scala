package $base_package .controller.rest

import $base_package .model.$pojo
import $base_package .repository.$pojoRepository
import $base_package .service.business.$pojoService
import $base_package .service.json.$pojoJson
import org.app.utility.security.AESEncryption
import org.service.utility.json.JsonUtil
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.{HttpStatus, MediaType, ResponseEntity}
import org.springframework.transaction.annotation.{Propagation, Transactional}
import org.springframework.web.bind.annotation._

@RequestMapping(path = Array("/rest/$pojo_lower"), produces = Array(MediaType.APPLICATION_JSON_UTF8_VALUE))
@RestController
class Rest $pojo Controller {

  @Autowired
  private var $pojo_lower Service: $pojoService = _


  @Autowired
  private var $pojo_lower Repository: $pojoRepository = _

  @Autowired
  private var $pojo_lower Json: $pojoJson = _



  @Transactional(propagation = Propagation.REQUIRED)
  @PostMapping(path = Array("/insert"), produces = Array(MediaType.APPLICATION_JSON_UTF8_VALUE))
  def insert$pojo(@RequestBody $pojo_lower : $pojo): ResponseEntity[String] = {
    try {
      $pojo_lowerService.insert$pojo( $pojo_lower )
      ResponseEntity.status(HttpStatus.OK).body(JsonUtil.toJson(Map("message" -> "$pojo Inserted Successfully")))
    } catch {
      case e: Exception => e.printStackTrace()
        ResponseEntity.status(HttpStatus.BAD_REQUEST).body(JsonUtil.toJson(Map("message" -> e)))
    }

  }



}
