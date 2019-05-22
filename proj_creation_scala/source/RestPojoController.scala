package $base_package .controller.rest

import $base_package .model.$pojo
import $base_package .repository.$pojo Repository
import $base_package .service.business.$pojo Service
import $base_package .service.json.$pojo Json
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
  private var $pojo_camel Service: $pojo Service = _


  @Autowired
  private var $pojo_camel Repository: $pojo Repository = _

  @Autowired
  private var $pojo_camel Json: $pojo Json = _



  @Transactional(propagation = Propagation.REQUIRED)
  @PostMapping(path = Array("/insert"), produces = Array(MediaType.APPLICATION_JSON_UTF8_VALUE))
  def insert$pojo(@RequestBody $pojo_camel : $pojo): ResponseEntity[String] = {
    try {
      $pojo_camel Service.insert$pojo( $pojo_camel )
      ResponseEntity.status(HttpStatus.OK).body(JsonUtil.toJson(Map("message" -> "$pojo  Inserted Successfully")))
    } catch {
      case e: Exception => e.printStackTrace()
        ResponseEntity.status(HttpStatus.BAD_REQUEST).body(JsonUtil.toJson(Map("message" -> e)))
    }

  }

  @Transactional(propagation = Propagation.REQUIRED)
  @PostMapping(path = Array("/update"), produces = Array(MediaType.APPLICATION_JSON_UTF8_VALUE))
  def insert$pojo(@RequestBody $pojo_camel : $pojo): ResponseEntity[String] = {
    try {
      $pojo_camel Service.update$pojo( $pojo_camel )
      ResponseEntity.status(HttpStatus.OK).body(JsonUtil.toJson(Map("message" -> "$pojo  Updated Successfully")))
    } catch {
      case e: Exception => e.printStackTrace()
        ResponseEntity.status(HttpStatus.BAD_REQUEST).body(JsonUtil.toJson(Map("message" -> e)))
    }

  }


  @Transactional(readOnly = true)
  @GetMapping(path = Array("/id/{$genId}"))
  def findById(@PathVariable("$genId") enc$genId: String): String = {
    val $genId = AESEncryption.decrypt(enc$genId).toLong

    val $pojo_camel = $pojo_camel Repository.findOne($genId)
    $pojo_camel Json.getJson($pojo_camel)

  }


 @Transactional(readOnly = true)
  @GetMapping(path = Array("/all"))
  def findAll: String = {
    $pojo_camel Json.getJson($pojo_camel Repository.findAll().toList)
  }

}
