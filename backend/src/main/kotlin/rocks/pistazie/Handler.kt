package rocks.pistazie

import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.RequestHandler

import org.apache.logging.log4j.LogManager
import java.util.*

class Handler:RequestHandler<Map<String, Any>, ApiGatewayResponse> {
    override fun handleRequest(input:Map<String, Any>, context:Context): ApiGatewayResponse {
        LOG.info("received: " + input.keys.toString())

        val generator = RandomNumberGenerator()
        val randomInt = generator.generate(30,70)

        val responseBody = Response("Go Serverless v1.x! Your Kotlin function executed successfully! You random number is $randomInt", input)

        return ApiGatewayResponse.build {
            statusCode = 200
            objectBody = responseBody
            headers = Collections.singletonMap<String, String>("X-Powered-By", "AWS Lambda & serverless")
        }
    }
    companion object {
        private val LOG = LogManager.getLogger(Handler::class.java)
    }
}