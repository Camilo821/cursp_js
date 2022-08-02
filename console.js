// Console
const winston = require('winston');

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});











// logger.log("Hola estoy saliendo por pantalla")
logger.error("Hola estoy saliendo por pantalla")
logger.warn("Hola estoy saliendo por pantalla")
logger.info("Hola estoy saliendo por pantalla")
logger.debug("Hola estoy saliendo por pantalla")
logger.trace("Hola estoy saliendo por pantalla")
logger.time("Hola estoy saliendo por pantalla")
logger.timeEnd("Hola estoy saliendo por pantalla")
logger.count("Hola estoy saliendo por pantalla")